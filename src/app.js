import express from 'express'

import errorHandler from 'middlewares/error-handler'
import initRoutes from 'routers'

const healthz = (app) => {
  app.get('/healthz', (req, res) => {
    res.status(200).send({ status: 'OK' })
  })
}

// biome-ignore lint/suspicious/noEmptyBlockStatements: <explanation>
const buildApp = (additionalRoutesCallback = (_app) => {}) => {
  const app = express()
  additionalRoutesCallback?.(app)

  healthz(app)
  initRoutes(app, '/v1')

  app.use(errorHandler)
  return app
}

export default buildApp
