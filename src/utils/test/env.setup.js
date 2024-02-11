import path from 'path'
import dotenv from 'dotenv'

const setupEnv = () => {
  dotenv.config({ path: path.resolve(__dirname, './.env.test') })
}

export default setupEnv
