<template>
  <v-card
    class="bg-grey-darken-4 pa-2 mt-8"
    height="200"
    style="overflow-y: auto; font-family: monospace"
  >
    <div v-for="log in logs" :key="log.id" class="text-caption mb-1">
      <span class="text-grey-darken-1 mr-2">[{{ log.time }}]</span>
      <span :class="log.color">{{ log.text }}</span>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // vou implementar o log real e aqui só puxar
      logs: [
        { id: 1, time: '09:00:01', text: 'Iniciando ...', color: 'text-grey' },
        { id: 2, time: '09:00:02', text: 'Conexão estabelecida.', color: 'text-success' },
        { id: 3, time: '09:05:00', text: 'Erro ao ler cartão.', color: 'text-error' }
      ]
    }
  }
}
</script>
