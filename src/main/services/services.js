import axios from 'axios'
import { Fields, CommandType } from '../constants/payerFields'
import { pooling } from './pooling'

const url = 'http://localhost:6060/Client/request'

export const chamaVenda = async (payload) => {
  try {
    const fullPayload = {
      [Fields.COMMAND]: CommandType.PAYMENT,
      [Fields.VALUE]: payload
    }

    await axios.post(url, fullPayload)
    const response = await pooling()
    console.log(response)

    if (response.statusTransaction === 'APPROVED') {
      // await saveTransaction(response)
    }

    return response
  } catch (err) {
    console.error('Falha na venda:', err)
    return false
  }
}
