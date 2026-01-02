<template>
  <v-app>
    <v-main>
      <v-container fluid>
        <v-row>
          <v-col cols="6">
            <h2>Lista de produtos</h2>
            <ProductList :produtos="produtos" />
            <Log />
          </v-col>

          <v-col cols="6">
            <h2>Carrinho</h2>
            <Carrinho />
            <Totals />

            <v-row>
              <v-col cols="12">
                <Controls @handle-option="handleSubmitPayment"></Controls>
              </v-col>
            </v-row>
          </v-col>
        </v-row>

        <!-- <v-row class="mt-10">
          <v-col cols="12">
            <Controls v-model:is-open="isOpen" @chama-venda="chamaVenda"></Controls>
          </v-col>
        </v-row> -->
      </v-container>
    </v-main>

    <Rodape />
  </v-app>
</template>

<script>
import Carrinho from './components/Carrinho.vue'
import Controls from './components/Controls.vue'
import Log from './components/Log.vue'
import ProductList from './components/ProductList.vue'
import Rodape from './components/Rodape.vue'
import Totals from './components/Totals.vue'

export default {
  components: { Carrinho, Controls, Log, ProductList, Rodape, Totals },

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
          valorUnitario: 12.3
        },
        {
          id: 6,
          produto: 'Leite UHT 1L',
          valorUnitario: 5.4
        }
      ]
    }
  }
}
</script>
