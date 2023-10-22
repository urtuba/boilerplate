import HTTP from 'http'

import buildApp from './app.js'
import ENV from './utils/environment.js'

ENV.control()

const app = buildApp()
const srv = HTTP.createServer(app)

srv.listen(ENV.port, () => {
  console.log(`SERVER ON: http://localhost:${ENV.port}/healthz`)
})
