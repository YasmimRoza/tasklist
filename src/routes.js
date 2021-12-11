import { Router } from 'express';
import User from './app/model/User';

const routes = new Router();

routes.get('/teste', async (req, res) => {
  const user = await User.create({
    name: 'Teste2',
    email: 'teste@teste2.com',
    password_hash: '1222',
  });

  return res.json(user);
});

export default routes;
