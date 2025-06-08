import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Timestamp API',
      version: '1.0.0',
      description: 'API for timestamping documents using KSM CLI'
    },
    servers: [
      {
        url: '/v1',
        description: 'API V1'
      }
    ]
  },
  apis: ['./src/routers/**/*.js']
}

const specs = swaggerJsdoc(options)

export const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}
