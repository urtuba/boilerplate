import Logger from 'utils/logger'

const requestLogger = (req, res, next) => {
  req.logger = Logger.child({ id: req.id, url: req.url, method: req.method })

  const start = Date.now()

  req.logger.info({
    event: 'REQUEST RECEIVED',
    headers: req.headers,
    body: req.body
  })

  res.on('finish', () => {
    const duration = Date.now() - start

    req.logger.info({
      message: 'REQUEST SERVED',
      status: res.statusCode,
      duration: `${duration}ms`
    })
  })

  return next()
}

export default requestLogger
