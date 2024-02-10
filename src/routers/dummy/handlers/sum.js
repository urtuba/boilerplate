import { sum } from '../services/sum'

export const sumHandler = (req, res, next) => {
  const { a, b } = req.query

  try {
    const result = sum(a, b)
    return res.status(200).json({ result })
  } catch (error) {
    return next(error)
  }
}
