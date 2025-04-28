import Joi from 'joi'

const actions = [
  {
    method: 'POST',
    path: '/calc-grant-amount',
    options: {
      validate: {
        payload: Joi.object({
          totalEstimatedCost: Joi.number().required()
        })
      }
    },
    handler: async (request, h) => {
      const grantPercent = 0.4

      return h
        .response({
          grantAmount: request.payload.totalEstimatedCost * grantPercent
        })
        .code(200)
    }
  }
]

export { actions }
