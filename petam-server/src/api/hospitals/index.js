import Router from "koa-router"
import {write, read, readOne, remove} from "./hospitals.ctrl"

const hospitals=new Router()

hospitals.post('/',write)
hospitals.get('/list',read)
// hospitals.get('/:id',readOne)
// hospitals.delete('/:id',remove)

export default hospitals