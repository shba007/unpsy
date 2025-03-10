<script setup lang="ts">
import type { SubscribedScale } from '~/utils/models'
import doc from '~/assets/images/documents.svg?raw'

definePageMeta({
  middleware: 'auth',
  layout: 'panel',
})
useHead({
  title: 'Scanner',
})

const title = `Psychological Assessment Toolkit - Scanner`
const description = `A psychoanalytical web tool for diverse assessments and automatic analysis with a built-in scanner. 
It includes various assessments scales like EPQ, MACI, MCMI, TCI, JEPQ.`
const url = 'https://psy.monalisa-bairagi.com'

useSeoMeta({
  title: title,
  ogTitle: title,
  description: description,
  ogDescription: description,
  ogImage: url + '/previews/scanner.webp',
  ogUrl: url + '/scanner',
})

const { proxy: gaProxy } = useScriptGoogleAnalytics()

const scale = ref<{
  name: string
  type: 'binary' | 'pentanary'
  count: number
  options: {
    name: string
    value: number
  }[]
  choices: {
    index: number
    value: number | null
  }[]
} | null>(null)
const isLoading = ref(false)
const openModel = ref<'download' | 'scale' | null>(null)

const dropZoneRef = ref<HTMLDivElement>()
const documents = ref<string[]>([])

async function convertFileToDataURL(files: File[]) {
  return await Promise.all(
    files.map((file) => {
      return new Promise<string | ArrayBuffer | null>((resolve) => {
        const reader = new FileReader()

        reader.onloadend = () => {
          resolve(reader.result)
        }

        reader.readAsDataURL(file)
      })
    })
  )
}

async function convertImagesToObjectURL(imageDatas: File[] | string[]): Promise<string[]> {
  return await Promise.all(
    imageDatas.map((imageData) => {
      // Create a blob from binary image data
      const blob = new Blob([imageData], { type: 'image/jpeg' })

      // Generate object URL
      const objectURL = URL.createObjectURL(blob)
      return objectURL
    })
  )
}

async function uploadFile(files: File[] | null) {
  if (!files) return

  gaProxy.gtag('event', 'upload_files', {
    count: files.length,
  })

  const allowedFileTypes = ['image/png', 'image/jpeg', 'image/webp', 'image/avif']
  const allAllowed = files.every((file) => allowedFileTypes.includes(file.type))

  if (!allAllowed) throw new Error('Some files are not allowed')
  else if (!(files.length >= 1 && files.length <= 2)) throw new Error('Min 1 and Max 2 files allowed at a time')

  documents.value = await convertImagesToObjectURL(files)
  isLoading.value = true
  try {
    const result = await $fetchAPI('/api/scale/scan', {
      method: 'POST',
      body: await convertFileToDataURL(files),
    })

    documents.value = result.highlights
    scale.value = result.data
  } catch (error) {
    console.error('Fetch API Scale/Scan', error)
  }
  isLoading.value = false
}

const { open: openFileDialog, reset: fileDialogReset, onChange } = useFileDialog()

onChange((files) => {
  const fileIndexes = Array.from({ length: files?.length ?? 0 }, (_, index) => index)
  const fileArray = fileIndexes.map((index) => files?.item(index) ?? null).filter((file) => !!file) as File[]

  uploadFile(fileArray)
})

const { isOverDropZone } = useDropZone(dropZoneRef, uploadFile)

function onDownload() {
  gaProxy.gtag('event', 'model_download_open')

  openModel.value = 'download'
}

function onReset() {
  gaProxy.gtag('event', 'scan_reset')

  documents.value = []
  fileDialogReset()
}

function onContinue() {
  gaProxy.gtag('event', 'scan_continue')

  openModel.value = 'scale'
}

const { data: scales, execute } = await useAsyncData<SubscribedScale[]>(
  'scales',
  async () =>
    $fetchAPI('/api/scale', {
      method: 'GET',
    }),
  { immediate: false }
)

onBeforeMount(execute)
</script>

<template>
  <main class="relative flex h-full w-full items-center justify-center">
    <!-- <AppToast /> -->
    <div
      v-if="!documents.length"
      ref="dropZoneRef"
      class="upload flex w-fit flex-col gap-4 rounded-lg px-12 pb-12 transition-colors md:gap-0 md:px-20 md:pb-16"
      :class="{ 'bg-dark-400': isOverDropZone }">
      <div class="mx-auto w-[50vw] max-w-[256px] md:w-screen" v-html="doc" />
      <div class="mx-auto flex flex-col items-center gap-3">
        <BaseButton title="Upload Documents" size="S" icon="upload" class="!text-base" @click="openFileDialog" />
        <span class="text-sm uppercase">or</span>
        <BaseButton title="Download Templates" size="S" icon="download" class="!bg-dark-500 !text-base hover:!bg-dark-600" @click="onDownload" />
      </div>
    </div>
    <div v-else class="relative h-[504px] w-full text-[24px]">
      <NuxtIcon v-if="isLoading" name="loader" class="absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2" />
      <div class="mx-auto h-full w-fit py-5" :class="{ 'blur-sm': isLoading }">
        <div v-if="isLoading" class="absolute bottom-1 left-1 right-1 top-1 z-20 bg-dark-400/60 !text-white" />
        <img v-for="document in documents" :key="document" :src="document" class="h-full object-contain" />
      </div>
    </div>
    <div v-if="documents.length > 0 && !isLoading" class="absolute bottom-4 left-4 right-4 flex justify-between">
      <BaseButton title="Reset" size="S" icon="chevron-bold" class="w-[110px] justify-center !text-base" @click="onReset" />
      <BaseButton title="Continue" size="S" icon="chevron-bold-right" class="flex-row-reverse !pl-[14px] !pr-3 !text-base" @click="onContinue" />
    </div>
    <ModelDownload v-if="openModel === 'download'" :is-open="openModel === 'download'" :scales="scales" @close="openModel = null" />
    <ModelScale
      v-if="openModel === 'scale' && !!scale"
      :is-open="openModel === 'scale' && !!scale"
      :name="scale.name"
      :type="scale.type"
      :count="scale.count"
      :options="scale.options"
      :choices="scale.choices"
      @close="
        () => {
          scale = null
          openModel = null
          onReset()
        }
      " />
  </main>
</template>

<style scoped>
.upload {
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='12' ry='12' stroke='%23FFFFFFFF' stroke-width='3' stroke-dasharray='6%2c 6' stroke-dashoffset='16' stroke-linecap='round'/%3e%3c/svg%3e");
}
</style>
