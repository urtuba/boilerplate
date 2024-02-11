import HTTP from 'http'
import registerDefaultMiddlewares from 'middlewares/default'
import ENV from 'utils/environment'

import buildApp from './app'

ENV.control()

const app = buildApp(registerDefaultMiddlewares)

const srv = HTTP.createServer(app)

srv.listen(ENV.port, () => {
  console.log(`SERVER ON: http://localhost:${ENV.port}/healthz`)
})
