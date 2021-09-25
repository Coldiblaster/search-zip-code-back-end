import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import AddressController from '../controllers/AddressController';

const addressController = new AddressController();

const addressRouter = Router();

addressRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      cep: Joi.number().required(),
      bairro: Joi.string().required(),
      logradouro: Joi.string().required(),
      uf: Joi.string().required(),
      complemento: Joi.string().empty('').default('default value'),
      localidade: Joi.string().required(),
    },
  }),
  addressController.create
);

// addressRouter.put(
//   '/:endereco_id',
//   celebrate({
//     [Segments.PARAMS]: {
//       endereco_id: Joi.string().uuid().required(),
//     },
//     [Segments.BODY]: {
//       bairro: Joi.string().required(),
//       cep: Joi.number().required(),
//       rua: Joi.string().required(),
//       numero: Joi.string().required(),
//       complemento: Joi.string().empty('').default('default value'),
//       cidade_id: Joi.string().uuid().required(),
//     },
//   }),
//   addressController.update
// );

// addressRouter.delete(
//   '/:endereco_id',
//   celebrate({
//     [Segments.PARAMS]: {
//       endereco_id: Joi.string().uuid().required(),
//     },
//   }),
//   addressController.delete
// );

addressRouter.get('/', addressController.show);

addressRouter.get(
  '/:cep',
  celebrate({
    [Segments.PARAMS]: {
      cep: Joi.number().required(),
    },
  }),
  addressController.index
);

export default addressRouter;
