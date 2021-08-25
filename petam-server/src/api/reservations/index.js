import Router from "koa-router"
import {
  write,
  read,
  readOne,
  filter,
  hspfilter,
  readName,
  hospital,
  remove,
  postCheck,
  check,
  hspfilterComplete,
  postReservation,
  filterComplete,
} from './reservations.ctrl';

const reservations=new Router()

reservations.post('/',write)
reservations.get('/read',read)
reservations.get('/read/:_id',readOne)
reservations.get('/filter/:filter',filter)    // 진료X
reservations.get('/filter/complete/:filter',filterComplete) // 진료O
reservations.get('/hspfilter/:filter',hspfilter)    // 진료X
reservations.get('/hspfilter/reserve/:filter',hspfilterComplete) // 진료O
reservations.put('/:_id', check)
reservations.put('/postcheck/:_id', postCheck)
// reservations.get('/read/host/:hostId',readName)
// reservations.get('/read/name/:hospitalName',hospital)
reservations.delete('/:_id', remove)
reservations.get('/readpost/:hostId', postReservation);

export default reservations