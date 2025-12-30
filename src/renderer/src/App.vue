<template>
  <ProductList :produtos="produtos"></ProductList>

  <Carrinho></Carrinho>

  <Totals></Totals>

  <Controls></Controls>
</template>

<script>
import Carrinho from './components/Carrinho.vue'
import ProductList from './components/ProductList.vue'
import Totals from './components/Totals.vue'
import Controls from './components/Controls.vue'

export default {
  components: { Carrinho, Controls, ProductList, Totals },

  data() {
    return {
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
        },
        {
          id: 5,
          produto: 'Café 500g',
          valorUnitario: 15.9
        }
      ]
    }
  }
}
</script>
