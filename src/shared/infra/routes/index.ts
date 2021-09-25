import { Router } from 'express';

import addressRouter from '../../../modules/address/infra/http/routes/address.routes';

const routes = Router();

routes.use('/address', addressRouter);

export default routes;
