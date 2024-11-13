import { Router, Response, Request } from 'express'

const router = Router()

router.get('/', (req: Request, res: Response) => {
  const data = req.body
  console.log(data)
  return res.status(200).send({
    message: 'Está funcionando'
  })
})

export { router }
