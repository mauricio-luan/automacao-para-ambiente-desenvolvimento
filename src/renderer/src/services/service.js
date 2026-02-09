import { Fields, CommandType, PaymentMethod } from '../../../shared/constants/Fields'
import store from '../store/store'

export function verifyIntegrationMode({ typeOrMethod, value, integrationMode }) {
  if (store.state.integrationMode === 'localhost') {
    return localhostPayment({ typeOrMethod, value, integrationMode })
  } else {
    return gatewayPayment({ typeOrMethod, value, integrationMode })
  }
}

const localhostPayment = async ({ typeOrMethod, value, integrationMode }) => {
  try {
    const payload = {
      [Fields.COMMAND]: CommandType.PAYMENT,
      [Fields.VALUE]: value.toFixed(2)
    }

    if (Object.values(PaymentMethod).includes(typeOrMethod)) {
      payload[Fields.PAYMENT_METHOD] = typeOrMethod
    } else {
      payload[Fields.PAYMENT_METHOD] = PaymentMethod.CARD
      payload[Fields.PAYMENT_TYPE] = typeOrMethod
    }

    window.api.log.info(`payload: -> ${JSON.stringify(payload)}`)
    window.api.log.info(`integrationMode: -> ${integrationMode}`)

    const response = await window.api.payment.create(payload)

    return response
  } catch (err) {
    console.error(err)
  }
}
