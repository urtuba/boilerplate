import express from "express"

const healthz = (app) => {
  app.get("/healthz", (req, res) => {
    res.status(200).send("OK")
  })
}

const buildApp = (additionalRoutesCallback = () => {}) => {
  const app = express()

  additionalRoutesCallback?.(app)
  healthz(app)

  return app
}

export default buildApp
