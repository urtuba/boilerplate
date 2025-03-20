import registerDefaultMiddlewares from 'middlewares/default'
import HTTP from 'node:http'
import ENV from 'utils/environment'

import buildApp from './app'

const app = buildApp(registerDefaultMiddlewares)

const srv = HTTP.createServer(app)

srv.listen(ENV.PORT, () => {
  // biome-ignore lint/style/noConsole: <explanation>
  console.log(`Server is running on port ${ENV.PORT}`)
})
