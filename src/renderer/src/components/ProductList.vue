<template>
  <ul>
    <li v-for="p in produtos" :key="p.id">
      <div class="list-item">
        <span>{{ p.id }}</span>
        <span>{{ p.produto }}</span>
        <span>{{ p.valorUnitario }}</span>
        <button @click="$store.dispatch('adicionarAoCarrinho', p)">Adicionar</button>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    produtos: { type: Array, required: true }
  }
}
</script>

<style scoped>
ul {
  width: 300px;
  height: 80px;
  list-style: none;
  background-color: aqua;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: auto;
}

.list-item {
  display: flex;
  justify-content: space-between;
}
</style>
