import { Router, Request, Response } from 'express'
import { sum } from '../../modules/calc/sum'

// Criada rotas de calculadora
const calculatorRouters = Router()

calculatorRouters.post('/sum', (req: Request, res: Response) => {
  const { arr } = req.body
  if (arr.length < 1 || typeof arr[0] !== 'number')
    return res.status(200).send({ result: 0 })
  const result = sum(arr)
  return res.status(200).send({ result })
})

export { calculatorRouters }
