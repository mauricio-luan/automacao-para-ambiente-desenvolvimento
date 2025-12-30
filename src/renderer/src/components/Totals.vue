<template>
  <!-- qtd total de produtos -->
  <h3>QTD</h3>
  <div>{{ qtdItens }}</div>

  <!-- valor total -->
  <h3>TOTAL</h3>
  <div>R$ {{ valorTotal.toFixed(2) }}</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({ qtdItens: 'quantidadeProdutosNoCarrinho', valorTotal: 'valorTotalNoCarrinho' })
  }
}
</script>
