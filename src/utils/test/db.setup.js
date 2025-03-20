import mongoose from 'mongoose'
import ENV from 'utils/environment'

const connect = async () => {
  if (mongoose.connection.readyState === 1) {
    return
  }

  await mongoose.connect(ENV.MONGO_URI)
}

const closeConnection = async () => {
  await mongoose.connection.close()
}

const clear = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key]
    await collection.deleteMany()
  }
}

export const db = { connect, clear, closeConnection }
