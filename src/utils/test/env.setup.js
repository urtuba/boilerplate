import dotenv from 'dotenv'
import path from 'node:path'

const setupEnv = () => {
  dotenv.config({ path: path.resolve(__dirname, './.env.test') })
}

export default setupEnv
