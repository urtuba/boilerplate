import bodyParser from 'body-parser'
import cors from 'cors'
import helmet from 'helmet'
import responseTime from 'response-time'

import rateLimiter from './rate-limiter'
import requestId from './request-id'

const registerDefaultMiddlewares = (app) => {
  app.use(requestId)
  app.use(responseTime())
  app.use(cors()) // CORS should come early for global application-level configuration
  app.use(helmet()) // Helmet should also come early for security headers
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(rateLimiter)
}

export default registerDefaultMiddlewares
