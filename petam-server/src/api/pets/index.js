import Router from 'koa-router'
import {write, read, readMyPet, readOnePet, update, remove} from './pets.ctrl'

const pets = new Router()

pets.post('/',write)
pets.get('/',read)
pets.get('/:email',readMyPet)
pets.get('/:email/:pet',readOnePet)
pets.put('/:name',update)
pets.delete('/:email/:name',remove)

export default pets