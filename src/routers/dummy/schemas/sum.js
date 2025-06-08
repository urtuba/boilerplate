import Joi from 'joi'

export const sumSchema = Joi.object({
  a: Joi.number().required(),
  b: Joi.number().required()
})
