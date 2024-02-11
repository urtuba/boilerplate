import { sum } from './sum'

describe('[ dummy / services / sum ]', () => {
  it('should throw an error if a or b are not defined', () => {
    expect(() => sum()).toThrow('a and b must be defined')
    expect(() => sum(1)).toThrow('a and b must be defined')
    expect(() => sum(undefined, 2)).toThrow('a and b must be defined')
  })

  it('should return the sum of a and b with fixed 2 precision', () => {
    expect(sum(1, 2)).toBe((3).toFixed(2))
    expect(sum(1.1, 2.2)).toBe((3.3).toFixed(2))
  })
})
