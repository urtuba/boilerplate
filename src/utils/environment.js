/* eslint-disable no-undef */
import { cleanEnv, str, port } from 'envalid'

const ENV = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production'], devDefault: 'development' }),
  PORT: port({ default: 3000 }),
})

export default ENV
