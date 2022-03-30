import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import config from '../config/index.js'
import cors from 'cors'
import routes from '../api/index.js'
export default (app) => {
  const whitelist = ['http://localhost:3000']
  const corsOptions = {
    origin: function (origin, callback) {
      const isWhitelisted = whitelist.indexOf(origin) !== -1
      callback(null, isWhitelisted)
    },
    credentials: true,
  }

  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser())
  app.use(express.static(path.join(path.resolve(), 'public')))
  app.use(express.static(path.join(path.resolve(), 'client/build')))

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'))
  })

  app.use(config.api.prefix, routes())
}
