import { nanoid } from 'nanoid'

const requestId = (req, res, next) => {
  const idInHeader = req.get('X-Request-Id')
  const id = idInHeader ?? nanoid()

  console.log(`Request ID: ${id}`)

  req.id = id
  res.set('X-Request-Id', id)

  next()
}

export default requestId
