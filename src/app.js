import express from 'express'

const healthz = (app) => {
  app.get('/healthz', (req, res) => {
    res.status(200).send({ status: 'OK' })
  })
}

const buildApp = (additionalRoutesCallback = (app) => {}) => {
  const app = express()

  additionalRoutesCallback?.(app)
  healthz(app)

  return app
}

export default buildApp
