import { TwitterApi } from 'twitter-api-v2'

export const useTwitterApi = () => {
  const config = useRuntimeConfig()

  const client = new TwitterApi({
    appKey: config.twitterApiKey,
    appSecret: config.twitterApiSecret,
    accessToken: config.twitterAccessToken,
    accessSecret: config.twitterAccessTokenSecret,
  })

  const getAuthorizationUrl = async () => {
    const authLink = await client.generateAuthLink(config.twitterCallbackUrl)
    return authLink.url
  }

  const getAccessToken = async (oauthToken, oauthVerifier) => {
    const { client: loggedClient, accessToken, accessSecret } = await client.login(oauthVerifier, oauthToken)
    return { loggedClient, accessToken, accessSecret }
  }

  const getLast20DMs = async (loggedClient) => {
    const dms = await loggedClient.v1.listDmEvents({ count: 20 })
    return dms.events
  }

  return {
    getAuthorizationUrl,
    getAccessToken,
    getLast20DMs,
  }
}