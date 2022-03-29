import { Router } from 'express'

const route = Router()

export default (app) => {
  app.use('/contact', route)

  route.get('/', (req, res, next) => {
    try {
      console.log('server in')
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
}
