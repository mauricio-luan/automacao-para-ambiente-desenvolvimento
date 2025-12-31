import axios from 'axios'
import { Fields, CommandType, PaymentMethod } from '../../shared/constants/payerFields'
import { pooling } from './pooling'

const url = 'http://localhost:6060/Client/request'

export const chamaVenda = async (payload) => {
  try {
    const fullPayload = {
      [Fields.COMMAND]: CommandType.PAYMENT,
      [Fields.PAYMENT_METHOD]: PaymentMethod.CARD,
      [Fields.VALUE]: payload.value,
      [Fields.PAYMENT_TYPE]: payload.paymentType
    }

    await axios.post(url, fullPayload)
    const response = await pooling()

    if (!response) throw new Error('chamaVenda: Deu merda ao buscar o response ali no pooling')

    // await saveTransaction(response)

    return response.statusTransaction
  } catch (err) {
    console.error('Falha na venda:', err)
    return false
  }
}
