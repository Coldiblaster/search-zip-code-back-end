import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';
import AddressController from '../controllers/AddressController';

const addressController = new AddressController();

const addressRouter = Router();

addressRouter.post('/', addressController.create);

addressRouter.get('/', addressController.show);

addressRouter.get('/:cep', addressController.index);

export default addressRouter;
