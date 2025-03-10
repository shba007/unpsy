<script setup lang="ts">
const title = `Psy - Psychological Assessment Toolkit`
const description = `A psychoanalytical web tool for diverse assessments and automatic analysis with a built-in scanner. 
It includes various assessments scales like EPQ, MACI, MCMI 3, TCI, JEPQ.`
const url = 'https://psy.monalisa-bairagi.com'

useHead({
  titleTemplate: (titleChunk) => (titleChunk ? `Psy - ${titleChunk}` : 'Psy'),
})

useSeoMeta({
  ogType: 'website',
  ogImageWidth: 1280,
  ogImageHeight: 720,
  fbAppId: 966242223397117,
  twitterCard: 'summary_large_image',
  colorScheme: 'dark light',
})

useSchemaOrg([
  defineWebPage({
    datePublished: new Date(2020, 6, 2).toISOString(),
    dateModified: new Date(2020, 6, 5).toISOString(),
    author: 'Shirsendu Bairagi',
  }),
  defineWebSite({
    url: url,
    name: title,
    description: description,
  }),
])
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPwaManifest />
  <NuxtPwaAssets />
  <!-- <NuxtLoadingIndicator /> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
@font-face {
  font-family: 'Arkhip';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~/assets/fonts/Arkhip-Regular.ttf') format('truetype');
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-tap-highlight-color: transparent;
  scrollbar-width: 6px;
}

*::-webkit-scrollbar {
  @apply block size-[6px] bg-light-500 dark:bg-dark-400;
}

*::-webkit-scrollbar-thumb {
  @apply rounded-md bg-light-400 dark:bg-dark-600;
}

html {
  @apply relative overflow-x-hidden scroll-smooth;
}

body {
  @apply relative min-h-screen overflow-hidden bg-white font-body text-black dark:bg-dark-400 dark:text-white;
}

.nuxt-icon > svg {
  @apply !m-0;
}

.scrollbar-hidden {
  -ms-overflow-style: none;
  /* Internet Explorer 10+ */
  scrollbar-width: none;
  /* Firefox */
}

.scrollbar-hidden::-webkit-scrollbar {
  display: none;
  /* Safari and Chrome */
}
</style>
