import { Router } from 'express'
import { calculatorRouters } from './calc'

const router = Router()

router.use('/', calculatorRouters)

export { router }
