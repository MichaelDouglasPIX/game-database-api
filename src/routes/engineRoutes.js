import express from 'express';
import EngineController from '../controllers/engineController.js';
import pagination from '../middlewares/pagination.js';

const routes = express.Router();

routes.get('/engine', EngineController.listEngines, pagination);
routes.get('/engine/:id', EngineController.listEngineById);
routes.post('/engine', EngineController.registerEngine);
routes.put('/engine/:id', EngineController.updateEngineById);
routes.delete('/engine/:id', EngineController.deleteEngineById);

export default routes;
