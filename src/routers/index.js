import { Router } from 'express'

import { sumHandler } from './dummy/handlers/sum'

const dummyRouter = Router()

dummyRouter.get('/sum', sumHandler)

export default dummyRouter
