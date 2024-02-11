import ENV from './environment'

describe('Environment', () => {
  const OLD_ENV = process.env

  beforeEach(() => {
    process.env = { NODE_ENV: 'test' }
  })

  afterAll(() => {
    process.env = OLD_ENV
  })

  test('should return true if all environments are set.', () => {
    const result = ENV.control()

    expect(result).toEqual(true)
  })

  test('should throw error if required environments are not set.', () => {
    process.env = {}

    const mockConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {})
    const mockExit = jest.spyOn(process, 'exit').mockImplementation(() => {})

    ENV.control()

    expect(mockConsoleError).toHaveBeenCalledWith('Missing required environments. App is shutting down.')
    expect(mockExit).toHaveBeenCalledWith(1)
  })

  test('should return true if all environments are set.', () => {
    const result = ENV.control()

    expect(result).toEqual(true)
    expect(ENV.isProduction).toEqual(false)
    expect(ENV.isDevelopment).toEqual(false)
    expect(ENV.isStaging).toEqual(false)
    expect(ENV.isTest).toEqual(true)
  })

  test('should return true if all environments are set.', () => {
    process.env = {
      NODE_ENV: 'test',
    }

    const result = ENV.control()

    expect(result).toEqual(true)
  })

  test('should return true if all environments are set.', () => {
    process.env = {
      NODE_ENV: ' ',
      PORT: 3000,
      TEST: 'TEST',
    }

    const result = ENV.control()

    expect(result).toEqual(true)
    expect(ENV.port).toEqual(3000)
  })
})
