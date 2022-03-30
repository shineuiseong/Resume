import { Router } from 'express'
import nodemailer from 'nodemailer'
import config from '../../config/index.js'
const route = Router()

export default (app) => {
  app.use('/contact', route)

  route.post('/', (req, res, next) => {
    try {
      console.log('dd')
      let data = req.body
      console.log(data)
      if (data.name.length === 0 || data.email.length === 0 || data.message.length === 0) {
        return res.json({ msg: 'please fill all the fields..' })
      }
      let smtpTransporter = nodemailer.createTransport({
        service: 'Gmail',
        port: 456,
        auth: {
          user: config.gmailUser,
          pass: config.gmailMacPassword,
        },
      })
      let mailOptions = {
        from: data.email,
        to: config.gmailUser,
        subject: `message from ${data.name}`,
        html: `
          <h3>Informations<h3/>
          <ul>
              <li>Name: ${data.name}</li>
              <li>Email: ${data.email}</li>
          </ul>
          <h3>Message<h3/>
          <p>${data.message}<p/>
      `,
      }
      smtpTransporter.sendMail(mailOptions, (error) => {
        try {
          if (error) return res.status(400).json({ msg: 'sendMail Please fill all the fields..' })
          res.status(200).json({ msg: 'Thank you for contacting.' })
        } catch (error) {
          if (error) {
            return res.status(500).json({ msg: 'There is serer error' })
          }
        }
      })
    } catch (error) {
      console.log(error)
      next(error)
    }
  })
}
