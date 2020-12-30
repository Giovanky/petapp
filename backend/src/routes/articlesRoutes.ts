import {articleController}from '../controllers/articleController'
import {Router} from 'express'

const router = Router()

router.get('/listAll', articleController.listAll)

export default router