import { Fields, CommandType, PaymentMethod } from '../../../shared/constants/Fields'

export const mountPayloadPayment = async (typeOrMethod, value) => {
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
    const response = await window.api.payment.create(payload)

    return response
  } catch (err) {
    console.error(err)
  }
}
