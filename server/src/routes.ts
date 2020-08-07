import express from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

// GET: busca ou lista informações
// POST: cria alguma nova informação
// PUT: atualizar uma informação existente
// DELETE: deletar uma informação existente

// corpo( request body) dados para criação ou atualizacao de um registro
// route params: indentificar qual recurso eu quero atualizar ou deletar 
// query params: paginacao, filtros, ordenação

const routes = express.Router();
const classesControler = new ClassesController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControler.index);
routes.post('/classes', classesControler.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;