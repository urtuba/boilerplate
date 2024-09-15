import rateLimit from 'express-rate-limit'

const rateLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 1000, // 1000 requests
  message: 'Too many requests from this IP, please try again after 15 minutes'
})

export default rateLimiter
