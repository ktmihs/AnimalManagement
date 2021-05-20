import KoaRouter from "koa-router"
import {write, read, readOne, remove} from "./reservations.ctrl"

const router=new KoaRouter()

router.post('/',write)
router.get('/',read)
router.read('/:id',readOne)
router.delete('/:id',remove)

export default router