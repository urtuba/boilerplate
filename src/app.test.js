import request from 'supertest'

import buildApp from './app'

describe('[express app]', () => {
  let app = buildApp((app) => {
    app.get('/test', (req, res) => {
      res.status(200).send({ status: 'TEST' })
    })
  })

  test('should start respond to the health check with additional routes callback.', async () => {
    const res = await request(app).get('/healthz')

    expect(res.statusCode).toEqual(200)
    expect(res.body.status).toEqual('OK')

    const res2 = await request(app).get('/test')

    expect(res2.statusCode).toEqual(200)
    expect(res2.body.status).toEqual('TEST')
  })

  test('should start respond to the health check without additional routes callback.', async () => {
    app = buildApp()

    const res = await request(app).get('/healthz')

    expect(res.statusCode).toEqual(200)
    expect(res.body.status).toEqual('OK')

    const res2 = await request(app).get('/test')

    expect(res2.statusCode).toEqual(404)
  })
})
