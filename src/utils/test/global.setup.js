import { db } from './db.setup'
import setupEnv from './env.setup'

const setup = async () => {
  setupEnv()

  await db.connect()
}

export default setup
