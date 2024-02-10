import { Router } from 'express'

const dummyRouter = Router()

dummyRouter.get('/sum', sumHandler)

export default dummyRouter
