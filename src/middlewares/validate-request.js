export const validateRequest = (schema, { validate = 'body' }) => {
  return (req, res, next) => {
    const { error } = schema.validate(req[validate])
    if (error) {
      return res.status(400).json({ error: error.details[0].message })
    }

    return next()
  }
}
