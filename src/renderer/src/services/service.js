import { Fields, CommandType, PaymentMethod } from '../../../shared/constants/Fields'

export const mountPayloadPayment = async (typeOrMethod, value) => {
  try {
    const payload = {
      [Fields.COMMAND]: CommandType.PAYMENT,
      [Fields.VALUE]: value
    }

    if (Object.values(PaymentMethod).includes(typeOrMethod)) {
      payload[Fields.PAYMENT_METHOD] = typeOrMethod
    } else {
      payload[Fields.PAYMENT_METHOD] = PaymentMethod.CARD
      payload[Fields.PAYMENT_TYPE] = typeOrMethod
    }

    const response = await window.payment.create(payload)

    //this.$store.dispatch('salvar essa bagaça numa store?????', response)

    return response
  } catch (err) {
    console.error(err)
  }
}
