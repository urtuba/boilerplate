import request from 'supertest'

import buildApp from 'app'

describe('[express app]', () => {
  const app = buildApp()
  const apiVersion = '/v1'

  it('should return sum of 2 numbers.', async () => {
    const res = await request(app).get(`${apiVersion}/dummy/sum`).query({ a: 1, b: 2 })

    expect(res.statusCode).toEqual(200)
    expect(res.body.result).toEqual('3.00')

    const res2 = await request(app).get(`${apiVersion}/dummy/sum`).query({ a: 1.1, b: 2.2 })

    expect(res2.statusCode).toEqual(200)
    expect(res2.body.result).toEqual('3.30')
  })

  it('should return error if lack of arguments', async () => {
    const res = await request(app).get(`${apiVersion}/dummy/sum`).query({ a: 1 })

    expect(res.statusCode).toEqual(400)
    expect(res.body.error).toEqual('a and b must be defined')

    const res2 = await request(app).get(`${apiVersion}/dummy/sum`).query({ b: 2 })

    expect(res2.statusCode).toEqual(400)
    expect(res2.body.error).toEqual('a and b must be defined')

    const res3 = await request(app).get(`${apiVersion}/dummy/sum`)

    expect(res3.statusCode).toEqual(400)
    expect(res3.body.error).toEqual('a and b must be defined')
  })

  it('should return error if arguments are not numbers', async () => {
    const res = await request(app).get(`${apiVersion}/dummy/sum`).query({ a: 'a', b: 2 })

    expect(res.statusCode).toEqual(429)
    expect(res.body.error).toEqual('a and b must be numbers')

    const res2 = await request(app).get(`${apiVersion}/dummy/sum`).query({ a: 1, b: 'b' })

    expect(res2.statusCode).toEqual(429)
    expect(res2.body.error).toEqual('a and b must be numbers')
  })
})
