import expressloader from './express.js'
import logger from './logger.js'
export default (app) => {
  expressloader(app)
  logger.info('✌️ Express loaded')
}
