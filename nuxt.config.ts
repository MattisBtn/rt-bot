// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  runtimeConfig: {
    twitterApiKey: process.env.TWITTER_API_KEY,
    twitterApiSecret: process.env.TWITTER_API_SECRET,
    twitterAccessToken: process.env.TWITTER_ACCESS_TOKEN,
    twitterAccessTokenSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
    twitterCallbackUrl: process.env.TWITTER_CALLBACK_URL,
  },
})
