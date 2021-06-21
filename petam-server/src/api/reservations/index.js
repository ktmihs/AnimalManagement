import Router from "koa-router"
import {write, read, readOne, readName,hospital, remove} from "./reservations.ctrl"

const reservations=new Router()

reservations.post('/',write)
reservations.get('/read',read)
reservations.get('/read/:_id',readOne)
// reservations.get('/read/host/:hostId',readName)
// reservations.get('/read/name/:hospitalName',hospital)
reservations.delete('/:_id',remove)

export default reservations