export const sum = (a, b) => {
  if (a === undefined || b === undefined) {
    throw new Error('a and b must be defined')
  }

  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('a and b must be numbers')
  }

  const result = a + b

  return result.toFixed(2)
}
