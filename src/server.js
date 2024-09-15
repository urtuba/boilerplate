import HTTP from 'http'
import registerDefaultMiddlewares from 'middlewares/default'
import ENV from 'utils/environment'

import buildApp from './app'

const app = buildApp(registerDefaultMiddlewares)

const srv = HTTP.createServer(app)

srv.listen(ENV.PORT, () => {
  console.log(`SERVER ON: http://localhost:${ENV.PORT}/healthz`)
})
