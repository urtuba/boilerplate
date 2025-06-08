import HTTP from 'node:http'

import registerDefaultMiddlewares from 'middlewares/default'
import ENV from 'utils/environment'

import { setupSwagger } from 'utils/swagger'
import buildApp from './app'

const app = buildApp((app) => {
  registerDefaultMiddlewares(app)
  setupSwagger(app)
})

const srv = HTTP.createServer(app)

srv.listen(ENV.PORT, () => {
  // biome-ignore lint/suspicious/noConsole: <explanation>
  console.log(`Server is running on port ${ENV.PORT}`)
})
