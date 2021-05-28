const axios = require('axios')

module.exports = () => {
  const start = async ({ config, logger }) => {
    const { url, accessTokens } = config

    const apiAuth = async (requestToken) => {
      const clientID = process.env.GITHUB_API_CLIENT_ID
      const clientSecret = process.env.GITHUB_API_CLIENT_SECRET

      try {
        // await axios({
        //   method: 'post',
        //   url: `${oauthUrl}/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
        //   headers: {
        //     accept: 'application/json'
        //   }
        // })
        //   .then(response => response.data['access_token'])
        //   .then((response, _token) => {
        //     token = _token;
        //     return response.json({ ok: 1 });
        //   })
      } catch (err) {
        logger.error(`Error on auth from gitHub api: ${err}`)
        throw err
      }
    }

    const getAllRepositories = async (user) => {
      try {
        await axios({
          method: 'get',
          url: `${url}/orgs/${user}/repos`,
          headers: {
            "Content-Type": "application/json",
            Accept: 'application/json',
            Authorization: `Bearer ${accessTokens}`
          }
        })
        .then(response => response.status(200).send(response.data))
      } catch (err) {
        logger.error(`Error while fetching all repositories from gitHub api: ${err}`)
        throw err
      }
    }

    return {
      apiAuth,
      getAllRepositories
    }
  }

  return { start }
}