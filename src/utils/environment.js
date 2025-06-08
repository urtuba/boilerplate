/* eslint-disable no-undef */
import { cleanEnv, port, str } from 'envalid'

const ENV = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ['development', 'test', 'production'], devDefault: 'development' }),
  PORT: port({ default: 3000 }),
  MONGO_URI: str({ default: 'mongodb://localhost:27017/boilerplate' }),
  X_API_KEY: str({ default: 'boilerplate-admin-api-key' })
})

export default ENV
