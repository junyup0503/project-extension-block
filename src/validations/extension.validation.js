import Joi from 'joi';

export const blockExtSchema = {
  body: Joi.object({
    name: Joi.string()
      .regex(/^(?=.*[a-z])[0-9a-z]{1,20}$/, 'regex')
      .required(),
  }),
};

export const deleteExtSchema = {
  params: Joi.object({
    extNo: Joi.number().required(),
  }),
};

export const checkExtSchema = {
  body: Joi.object({
    no: Joi.number().required(),
    isCheck: Joi.boolean().required(),
  }),
};
