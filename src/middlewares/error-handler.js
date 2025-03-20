const errorHandler = (error, req, res, next) => {
  res.status(error.status ?? 500).json({ error: error.message })
}

export default errorHandler
