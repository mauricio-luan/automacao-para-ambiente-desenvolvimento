<template>
  <v-btn @click="handleIsOpen = true">Pagar</v-btn>

  <v-dialog v-model="handleIsOpen" max-width="400" height="400">
    <v-card class="align-center pa-5">
      <v-card-title class="w-100 text-center">Escolha o metodo:</v-card-title>
      <v-card-text class="w-75 d-flex justify-center flex-column ga-2">
        <v-btn
          v-for="btn in botoes"
          :key="btn.label"
          variant="tonal"
          @click="chamaVenda(btn.value)"
        >
          {{ btn.label }}
        </v-btn>
      </v-card-text>

      <v-card-actions>
        <v-btn variant="text" color="error" @click="handleIsOpen = false">
          <v-icon>mdi-close</v-icon>
          Esc</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { PaymentMethod, PaymentType } from '../../../shared/constants/payerFields'

export default {
  props: { isOpen: Boolean },

  emits: ['chama-venda', 'update:isOpen'],

  data() {
    return {
      botoes: [
        {
          label: '1 - Debito',
          value: PaymentType.DEBIT
        },
        {
          label: '2 - Credito',
          value: PaymentType.CREDIT
        },
        {
          label: '3 - Pix',
          value: PaymentMethod.PIX
        },
        {
          label: '4 - E-Commerce',
          value: PaymentMethod.LINK
        }
      ]
    }
  },

  computed: {
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
