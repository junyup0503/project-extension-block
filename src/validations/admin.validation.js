import Joi from 'joi';

export const getAllAdmins = {
  query: Joi.object({
    limit: Joi.number().optional(),
    offset: Joi.number().optional(),
    sortValue: Joi.string().optional(),
    sortDirection: Joi.string().optional(),
    status: Joi.any().valid('ACTIVE', 'INACTIVE', 'REMOVED').optional(),
    email: Joi.string().optional(),
    name: Joi.string().optional(),
  }),
};

export const insertAdmin = {
  body: Joi.object({
    email: Joi.string().required(),
    password: Joi.string().required(),
    status: Joi.any().valid('ACTIVE', 'INACTIVE', 'REMOVED').optional(),
    name: Joi.string().optional(),
    phone: Joi.string().max(11).optional(),
    level: Joi.any().valid('SUPER', 'SUPPORT', 'MANAGE').required(),
  }),
};

export const setAdmin = {
  params: Joi.object({
    no: Joi.number().required(),
  }),
  body: Joi.object({
    password: Joi.string().optional(),
    status: Joi.any().valid('ACTIVE', 'INACTIVE', 'REMOVED').optional(),
    email: Joi.string().email().optional(),
    name: Joi.string().optional(),
    phone: Joi.string().max(11).optional(),
    level: Joi.any().valid('SUPER', 'SUPPORT', 'MANAGE').optional(),
  }),
};

export const getAdmin = {
  params: Joi.object({
    no: Joi.number().required(),
  }),
};

export const checkEmail = {
  params: Joi.object({
    email: Joi.string().required(),
  }),
};
