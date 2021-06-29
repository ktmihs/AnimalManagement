import Router from 'koa-router';
import * as productsCtrl from './products.ctrl';
import Product from '../../models/product';
const products = new Router();

products.post('/', productsCtrl.write);
products.get('/read', productsCtrl.read);

export default products;
