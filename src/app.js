import express from 'express'

import dummyRouter from 'routers'
import errorHandler from 'middlewares/error-handler'
import rateLimiter from './middlewares/rate-limiter'

const healthz = (app) => {
  app.get('/healthz', (req, res) => {
    res.status(200).send({ status: 'OK' })
  })
}

const buildApp = (additionalRoutesCallback = (app) => {}) => {
  const app = express()

  healthz(app)
  app.use(rateLimiter)
  app.use('/dummy', dummyRouter)
  app.use(errorHandler)
  additionalRoutesCallback?.(app)

  return app
}

export default buildApp
