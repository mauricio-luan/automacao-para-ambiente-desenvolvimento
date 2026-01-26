<template>
  <v-card class="pa-4" flat>
    <label for="integrationMode">Modo de integração</label>
    <v-switch
      id="integrationMode"
      v-model="mode"
      :label="mode"
      true-value="gateway"
      false-value="localhost"
    />
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      mode: null
    }
  },
  computed: {
    ...mapGetters(['integrationMode'])
  },
  watch: {
    mode(newMode) {
      this.$store.commit('setIntegrationMode', newMode)
    }
  },
  created() {
    this.mode = this.integrationMode
  }
}
</script>
