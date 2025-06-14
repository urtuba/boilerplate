import { httpError } from 'utils/error'

export const sum = (a, b) => {
  if (a === undefined || b === undefined) {
    throw httpError(400, 'a and b must be defined')
  }

  if (Number.isNaN(Number(a)) || Number.isNaN(Number(b))) {
    throw httpError(422, 'a and b must be numbers')
  }

  const result = Number(a) + Number(b)

  return result.toFixed(2)
}
