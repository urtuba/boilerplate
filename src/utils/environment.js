const RequiredEnvironments = ['NODE_ENV']
const OptionalEnvironments = ['PORT']

const controlAndReportEnvironment = () => {
  const missingRequiredEnvironments = RequiredEnvironments.filter((env) => !process.env[env])
  const missingOptionalEnvironments = OptionalEnvironments.filter((env) => !process.env[env])

  if (missingRequiredEnvironments.length > 0) {
    console.log({ missingRequiredEnvironments, missingOptionalEnvironments })
    console.error('Missing required environments. App is shutting down.')
    process.exit(1)
  } else if (missingOptionalEnvironments.length > 0) {
    console.log({ missingRequiredEnvironments, missingOptionalEnvironments })
    console.warn('Missing optional environments. App is running with default values.')
  } else {
    console.log('All environments are set.')
  }

  return true
}

const ENV = {
  control: controlAndReportEnvironment,
  env: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isStaging: process.env.NODE_ENV === 'staging',
  isTest: process.env.NODE_ENV === 'test',
}

export default ENV
