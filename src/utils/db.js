import mongoose from 'mongoose'

import ENV from './environment'

export const connectDB = async () => {
  await mongoose.connect(ENV.MONGO_URI)
}
