<template>
  <v-card
    class="bg-grey-darken-4 pa-2 mt-8"
    height="200"
    style="overflow-y: auto; font-family: monospace"
  >
    <div v-for="log in logs" :key="log" class="text-caption mb-1">
      <!-- <span class="text-grey-darken-1 mr-2">[{{ log.time }}]</span>
      <span :class="log.color">{{ log.text }}</span> -->
      <span>{{ log }}</span>
      <p>{{ log }}</p>
    </div>
  </v-card>
  <p>{{ logs }}</p>
</template>

<script>
import { mapGetters } from 'vuex/dist/vuex.cjs.js'

export default {
  data() {
    return {
      stopListening: null
      // logs: [
      //   { id: 1, time: '09:00:01', text: 'Iniciando ...', color: 'text-grey' },
      //   { id: 2, time: '09:00:02', text: 'Conexão estabelecida.', color: 'text-success' },
      //   { id: 3, time: '09:05:00', text: 'Erro ao ler cartão.', color: 'text-error' }
      // ]
    }
  },

  computed: {
    ...mapGetters(['logs'])
  },

  // mounted() {
  //   this.stopListening = window.api.log.logAdded((log) => this.$store.commit('adicionaAoLog', log))
  // },
  mounted() {
    console.log('Componente montado! Esperando logs...') // 1. Ver se montou

    this.stopListening = window.api.log.logAdded((log) => {
      console.log('🔥 CHEGOU NO VUE:', log) // 2. Ver se o Electron entregou
      this.$store.commit('adicionaAoLog', log)
    })
  },

  beforeUnmount() {
    if (this.stopListening) this.stopListening()
  }
}
</script>
