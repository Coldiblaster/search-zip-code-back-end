// import { ensureAuthenticated } from '@modules/users/infra/http/middlewares/ensureAuthenticated';
// import { celebrate, Joi, Segments } from 'celebrate';
// import { Router } from 'express';
// import CepPromiseController from '../controllers/CepPromiseController';

// const cepPromiseController = new CepPromiseController();

// const addressRouter = Router();

// addressRouter.use(ensureAuthenticated());

// addressRouter.get(
//   '/:cep_promise',
//   celebrate({
//     [Segments.PARAMS]: {
//       cep_promise: Joi.string().required(),
//     },
//   }),
//   cepPromiseController.index,
// );

// export default addressRouter;
