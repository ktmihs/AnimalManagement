import Router from 'koa-router'
import {write, read, update} from './pets.ctrl'

const pets = new Router()

pets.post('/',write)
pets.get('/',read)
pets.put('/:name',update)

export default pets