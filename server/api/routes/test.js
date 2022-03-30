import { Router } from 'express'

const route = Router()

export default (app) => {
  app.use('/test', route)

  route.get('/', (req, res, next) => {
    try {
      console.log('test')

      req.statusCode(200).json({ message: 'good' })
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
}
