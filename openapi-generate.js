#!/usr/bin/env node

/**
 * This script generates Swagger/OpenAPI documentation from JSDoc comments
 * and saves it to a JSON file for use in production builds.
 */

// Register Babel to handle ES modules
require('@babel/register')({
  presets: ['@babel/preset-env'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          routes: './src/routes',
          utils: './src/utils',
          middlewares: './src/middlewares',
          services: './src/services',
          models: './src/models',
          handlers: './src/routes/handlers',
          jobs: './src/jobs'
        }
      }
    ]
  ]
})

const fs = require('node:fs')
const path = require('node:path')
const swaggerJsdoc = require('swagger-jsdoc')

// Get options from the swagger config
const { options } = require('./src/utils/swagger')
const { default: logger } = require('./src/utils/logger')

// Generate Swagger specification
const specs = swaggerJsdoc(options)

// Ensure directory exists
const outputDir = path.resolve(__dirname, 'dist/swagger')
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true })
}

// Write to file
const outputFile = path.join(outputDir, 'swagger.json')
fs.writeFileSync(outputFile, JSON.stringify(specs, null, 2))

logger.info(`Swagger documentation generated at ${outputFile}`)
