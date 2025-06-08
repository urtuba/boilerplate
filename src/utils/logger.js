import pino from 'pino'

import ENV from './environment'

const Pino = pino()

const Logger = Pino.child({
  app: 'boilerplate',
  env: ENV.NODE_ENV
})

export default Logger
