import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

export const options = {
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
  apis: [
    process.env.NODE_ENV === 'production' ? './dist/routers/**/*.js' : './src/routers/**/*.js',
    process.env.NODE_ENV === 'production' ? './dist/utils/swagger.js' : './src/utils/swagger.js'
  ]
}

const specs = swaggerJsdoc(options)

export const setupSwagger = (app) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))
}

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     xApiKey:
 *       type: apiKey
 *       in: header
 *       name: x-api-key
 *       description: API key for authentication
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error message
 *           example: Failed to check credit
 */
