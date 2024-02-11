export const sum = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('a and b must be defined')
  }

  if (isNaN(a) || isNaN(b)) {
    throw new Error('a and b must be numbers')
  }

  const result = Number(a) + Number(b)

  return result.toFixed(2)
}
