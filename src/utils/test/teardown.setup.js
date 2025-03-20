import { db } from './db.setup'

export default async () => {
  await db.clear()
  await db.closeConnection()
}
