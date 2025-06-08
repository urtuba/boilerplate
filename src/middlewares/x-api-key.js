import ENV from 'utils/environment'

export default (req, res, next) => {
  const apiKey = req.headers['x-api-key']

  if (apiKey === ENV.X_API_KEY) {
    return next()
  }

  return res.status(401).send({ error: 'Unauthorized' })
}
