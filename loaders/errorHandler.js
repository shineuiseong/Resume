import createError from 'http-errors'
import { CustomError } from '../CustomError.js'

export default (app) => {
  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404))
  })

  // custom error handler
  app.use(function handlecustomError(error, req, res, next) {
    if (error instanceof CustomError) {
      const { status, type, message } = error
      return res.status(status).send({ type, message })
    }
    next(error)
  })

  // error handler
  app.use(function (error, req, res, next) {
    res.status(400).json({ message: error.message })
  })
}
