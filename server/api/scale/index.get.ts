import type { ScaleType, SubscribedScale } from '~/utils/models'

export default defineEventHandler<Promise<SubscribedScale[]>>(async () => {
  try {
    const scales = dataScales
    /* const subscribedScales = await prisma.subscription.findMany({
      where: {
        userId
      },
      select: {
        name: true,
        expiresAt: true
      }
    }) */

    return scales.map(({ name, type, count, subScales, options, monthlyPrice, publishedAt, updatedAt }) => {
      // const subscribedScale = subscribedScales.find((subscribedScale) => subscribedScale.name === name)

      return {
        name: name,
        type: type.toLowerCase() as ScaleType,
        count,
        options,
        subScales,
        monthlyPrice,
        // expiresAt: subscribedScale?.expiresAt.toISOString() ?? null,
        updatedAt: updatedAt,
        publishedAt: publishedAt,
      }
    })
  } catch (error: unknown) {
    console.error('API scale/index GET', error)

    throw createError({ statusCode: 500, statusMessage: 'Some Unknown Error Found' })
  }
})
