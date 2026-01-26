import axios from 'axios'
import { pooling } from './pooling'
import { logger } from '../log/logger'

export const createPayment = async (payload) => {
  try {
    if (!payload || payload == undefined) throw new Error('Payload vazio.')

    // const url =
    //   integrationMode === 'localhost' ? 'http://localhost:6060/Client/request' : 'url de prod'

    await axios.post('http://localhost:6060/Client/request', payload)

    const response = await pooling()
    logger.info('response -> ', response.data)

    return response.data
  } catch (err) {
    if (err.response) {
      console.error(err.response.data.message)
      throw new Error(err.response.data.message)
    }
    if (err.request) {
      console.error(err.request)
      throw new Error(err.request)
    } else {
      console.error(err.message)
      throw err.message
    }
  }
}
