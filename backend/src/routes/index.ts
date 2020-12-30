import articlesRoutes from './articlesRoutes'
// import categoriesRoutes from './categoriesRoutes'
// import incomesRoutes from './incomesRoutes'
// import salesRoutes from './salesRoutes'
import usersRoutes from './usersRoutes'
import {Router} from 'express'

const router: Router = Router()

router.use('/articles', articlesRoutes)
// router.use('/categories', categoriesRoutes)
// router.use('/incomes', incomesRoutes)
// router.use('/sales', salesRoutes)
router.use('/auth', usersRoutes)

export default router