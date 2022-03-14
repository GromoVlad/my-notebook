export const wrongRequestApiResource = {
  status: 400,
  description: 'Invalid request parameters',
  schema: {
    type: 'object',
    properties: {
      code: { type: 'number', default: 400 },
      message: { type: 'array', items: { type: 'string' } },
      statusCode: { type: 'number', default: 400 },
    },
  },
};
