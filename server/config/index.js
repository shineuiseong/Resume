import dotenv from 'dotenv'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'

const envFound = dotenv.config()
if (envFound.error) {
  throw new Error("Couldn't find .env file")
}
export default {
  port: parseInt(process.env.PORT, 10),

  /* API configs */
  api: {
    prefix: '/api',
  },

  gmailUser: process.env.GmailUser,
  gmailPassword: process.env.GmailPassword,
  gmailMacPassword: process.env.Macpassword,

  logs: {
    level: process.env.LOG_LEVEL || 'silly',
  },
}
