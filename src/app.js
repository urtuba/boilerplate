import express from 'express'
import dummyRouter from './routers'

const healthz = (app) => {
  app.get('/healthz', (req, res) => {
    res.status(200).send({ status: 'OK' })
  })
}

const buildApp = (additionalRoutesCallback = (app) => {}) => {
  const app = express()

  app.use('/dummy', dummyRouter)

  additionalRoutesCallback?.(app)
  healthz(app)

  return app
}

export default buildApp
