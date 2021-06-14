import Router from "koa-router"
import {write, read, readOne, readName, remove} from "./reservations.ctrl"

const reservations=new Router()

reservations.post('/',write)
reservations.get('/read',read)
reservations.get('/read/:_id',readOne)
reservations.get('/read/host/:hostId',readName)
// reservations.delete('/:id',remove)

export default reservations