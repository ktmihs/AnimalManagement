import Router from 'koa-router';
import * as productsCtrl from './products.ctrl';
import Product from '../../models/product';
const products = new Router();

products.post('/', productsCtrl.write);
products.get('/read', productsCtrl.read);
products.get('/readone/:_id', productsCtrl.readOne);
products.put('/:_id/:hospitalId', productsCtrl.updateHospital);
products.get('/read/hospital/:_id/:hospitalId', productsCtrl.readHospital);
products.delete('/hospital/:_id/:hospitalId', productsCtrl.removeHospital);
export default products;
