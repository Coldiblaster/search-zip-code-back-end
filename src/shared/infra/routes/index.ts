import { Router } from 'express';

import addressRouter from '../../../modules/address/infra/http/routes/address.routes';
import searchZipCodeRouter from '../../../modules/address/infra/http/routes/cepPromise.routes';

const routes = Router();

routes.use('/address', addressRouter);
routes.use('/search-zip-code', searchZipCodeRouter);

export default routes;
