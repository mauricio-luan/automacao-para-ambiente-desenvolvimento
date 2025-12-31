<template>
  <v-app>
    <v-main>
      <ProductList :produtos="produtos"></ProductList>

      <Carrinho></Carrinho>

      <Totals></Totals>

      <Controls v-model:is-open="isOpen" @chama-venda="chamaVenda"></Controls>
    </v-main>
  </v-app>
</template>

<script>
import Carrinho from './components/Carrinho.vue'
import Controls from './components/Controls.vue'
import ProductList from './components/ProductList.vue'
import Totals from './components/Totals.vue'
import { statusTransaction } from '../../shared/constants/payerFields'

export default {
  components: { Carrinho, Controls, ProductList, Totals },

  data() {
    return {
      isOpen: false,
      produtos: [
        {
          id: 1,
          produto: 'Arroz 5kg',
          valorUnitario: 28.9
        },
        {
          id: 2,
          produto: 'Feijão 1kg',
          valorUnitario: 8.5
        },
        {
          id: 3,
          produto: 'Óleo de Soja 900ml',
          valorUnitario: 7.2
        },
        {
          id: 4,
          produto: 'Açúcar 2kg',
          valorUnitario: 6.8
        }
      ]
    }
  },

  methods: {
    async chamaVenda(payload) {
      try {
        const response = await window.api.pagamento(payload)
        if (response === statusTransaction.APPROVED) {
          this.$store.dispatch('limpaCarrinho')
          this.isOpen = false
        }
      } catch (err) {
        console.error('erro no chamaVenda: ', err)
      }
    }
  }
}
</script>
