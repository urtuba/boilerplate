import HTTP from 'http'

import buildApp from './app.js'
import ENV from './utils/environment.js'
import registerDefaultMiddlewares from './middlewares/default.js'

ENV.control()

const app = buildApp(registerDefaultMiddlewares)

const srv = HTTP.createServer(app)

srv.listen(ENV.port, () => {
  console.log(`SERVER ON: http://localhost:${ENV.port}/healthz`)
})
