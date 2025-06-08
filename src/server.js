import HTTP from 'node:http'

import registerDefaultMiddlewares from 'middlewares/default'
import ENV from 'utils/environment'
import Logger from 'utils/logger'
import { setupSwagger } from 'utils/swagger'

import buildApp from './app'

const app = buildApp((app) => {
  registerDefaultMiddlewares(app)
  setupSwagger(app)
})

const srv = HTTP.createServer(app)

srv.listen(ENV.PORT, () => {
  Logger.info({
    event: 'SERVER STARTED',
    port: ENV.PORT
  })
})
