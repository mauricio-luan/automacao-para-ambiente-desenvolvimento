<!-- este componente será somente a lista de produtos do carrinho -->
<template>
  <p>lista de produtos</p>
  <ul>
    <li v-for="p in products" :key="p.id">
      {{ p }}

      <button @click="$store.dispatch('removerDoCarrinho', p.id)">Remover</button>
      <button @click="$store.dispatch('decrementaProduto', p.id)">-</button>
    </li>
  </ul>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.getTodosProdutos
    }
  }
}
</script>
