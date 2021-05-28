module.exports = () => {
  const start = async ({ logger, gitHubApi }) => {

    const OAuth = async () => {
      const userAuthorization = await gitHubApi.apiAuth()
      logger.info(`gitHubApi auth`)
      return userAuthorization
    }

    const getRepositories = async (user) => {
      const repositories = await gitHubApi.getAllRepositories(user)
      logger.info(`Getting user: ${user}`)
      return repositories
    }
    
    return {
      OAuth,
      getRepositories
    }
  }

  return { start }
}