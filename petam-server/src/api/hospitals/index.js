import Router from "koa-router"
import {write, read, readOne, readName, remove} from "./hospitals.ctrl"

const hospitals=new Router()

hospitals.post('/',write)
hospitals.get('/read',read)
hospitals.get('/read/:_id',readOne)
hospitals.get('/read/name/:name',readName)
// hospitals.delete('/:id',remove)

export default hospitals