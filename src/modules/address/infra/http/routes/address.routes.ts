import { Router } from 'express';
import AddressController from '../controllers/AddressController';

const addressController = new AddressController();

const addressRouter = Router();

addressRouter.post('/', addressController.create);

addressRouter.get('/', addressController.show);

addressRouter.get('/single/:cep', addressController.index);

export default addressRouter;
