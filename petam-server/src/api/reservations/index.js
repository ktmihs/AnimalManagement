import Router from "koa-router"
import {write, read, readOne, remove} from "./reservations.ctrl"

const reservations=new Router()

reservations.post('/',write)
// reservations.get('/',read)
// reservations.get('/:id',readOne)
// reservations.delete('/:id',remove)

export default reservations