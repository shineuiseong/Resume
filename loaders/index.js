import expressloader from './express.js'
import logger from './logger.js'
import errorHandler from './errorHandler.js'
export default (app) => {
  expressloader(app)
  errorHandler(app)
  logger.info('✌️ Express loaded')
}
