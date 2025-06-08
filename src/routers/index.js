import dummyRouter from './dummy'

const initRoutes = (app, rootPath = '/v1') => {
  app.use(`${rootPath}/dummy`, dummyRouter)
}

export default initRoutes
