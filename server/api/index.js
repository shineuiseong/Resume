import { Router } from 'express'
import contact from './routes/contact.js'

export default () => {
  const app = Router()
  contact(app)

  return app
}
