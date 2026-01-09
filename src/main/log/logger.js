import winston from 'winston'
import { join } from 'path'

const logFile = join(__dirname, 'app.log')

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(winston.format.timestamp(), winston.format.json()),
  transports: [new winston.transports.File({ filename: logFile }), new winston.transports.Console()]
})
