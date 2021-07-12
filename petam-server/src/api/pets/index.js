import Router from 'koa-router'
import {write, read, update, remove} from './pets.ctrl'

const pets = new Router()

pets.post('/',write)
pets.get('/',read)
pets.put('/:name',update)
pets.delete('/:email/:name',remove)
export default pets