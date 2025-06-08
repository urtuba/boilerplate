import { nanoid } from 'nanoid'

const requestId = (req, res, next) => {
  const existingId = req.get('X-Request-Id')
  const id = existingId ?? nanoid()

  req.id = id
  res.set('X-Request-Id', id)

  return next()
}

export default requestId
