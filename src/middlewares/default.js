import cors from 'cors'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import responseTime from 'response-time'

import requestId from './request-id'

const registerDefaultMiddlewares = (app) => {
  app.use(requestId)
  app.use(responseTime())
  app.use(cors()) // CORS should come early for global application-level configuration
  app.use(helmet()) // Helmet should also come early for security headers
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
}

export default registerDefaultMiddlewares
