<template>
  <div>
    <button @click="handleIsOpen = true">Pagar</button>
    <dialog :open="isOpen">
      <button @click="chamaVenda(paymentType.DEBIT)">Debito</button>
      <button @click="chamaVenda(paymentType.CREDIT)">Credito</button>
    </dialog>
  </div>
</template>

<script>
import { PaymentType } from '../../../shared/constants/payerFields'

export default {
  props: { isOpen: Boolean },
  emits: ['chama-venda', 'update:isOpen'],

  computed: {
    paymentType() {
      return PaymentType
    },

    handleIsOpen: {
      get() {
        return this.isOpen
      },
      set(v) {
        this.$emit('update:isOpen', v)
      }
    }
  },
  methods: {
    chamaVenda(paymentType) {
      const valorTotalNoCarrinho = this.$store.getters.valorTotalNoCarrinho
      const payload = {
        paymentType: paymentType,
        value: valorTotalNoCarrinho
      }
      this.$emit('chama-venda', payload)
    }
  }
}
</script>
