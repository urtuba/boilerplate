const errorHandler = (error, req, res, next) => {
  req.logger.error({
    event: 'ERROR OCCURRED',
    error: error.message
  })

  res.status(error.status ?? 500).json({ error: error.message })

  return next()
}

export default errorHandler
