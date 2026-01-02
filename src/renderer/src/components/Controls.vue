<template>
  <v-btn @click="$store.dispatch('limpaCarrinho')">Limpar carrinho</v-btn>
  <v-btn :disabled="carrinhoVazio" @click="isOpen = true">Pagar</v-btn>

  <v-dialog v-model="isOpen" max-width="400" height="400">
    <v-card class="align-center pa-5">
      <v-card-title class="w-100 text-center">Escolha o metodo:</v-card-title>
      <v-card-text class="w-75 d-flex justify-center flex-column ga-2">
        <v-btn
          v-for="btn in botoes"
          :key="btn.label"
          variant="tonal"
          @click="handleSubmitPayment(btn.value)"
        >
          {{ btn.label }}
        </v-btn>
      </v-card-text>

      <v-card-actions>
        <v-btn variant="text" color="error" prepend-icon="mdi-close" @click="isOpen = false">
          Esc
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { mountPayloadPayment } from '../services/service'
import { PaymentMethod, PaymentType } from '../../../shared/constants/Fields'

export default {
  emits: ['handle-option'],

  data() {
    return {
      isOpen: false,
      message: null,
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
    carrinhoVazio() {
      return this.$store.getters.carrinhoEstaVazio
    },

    cartTotalValue() {
      return this.$store.getters.valorTotalNoCarrinho
    }
  },

  methods: {
    async handleSubmitPayment(typeOrMethod) {
      this.message = null

      try {
        if (this.carrinhoVazio) throw new Error('Carrinho vazio paizao')

        const response = await mountPayloadPayment(typeOrMethod, this.cartTotalValue)
        this.message = response //usar um snackbar pra dar retorno da transação
      } catch (err) {
        console.error(err)
      } finally {
        this.isOpen = false
      }
    }
    //     if (response === statusTransaction.APPROVED) {
    //       this.$store.dispatch('limpaCarrinho')
  }
}
</script>
