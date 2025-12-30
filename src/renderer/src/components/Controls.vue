<template>
  <div>
    <button @click="pagar">Pagar</button>
  </div>
</template>

<script>
export default {
  methods: {
    async pagar() {
      const valorTotal = this.$store.getters.valorTotalNoCarrinho

      try {
        const response = await window.api.pagamento(valorTotal)

        console.log(response)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>
<!-- 
beleza, agora o fluxo é o seguinte:

1 - o botao chama a api do preload
2 - a api do preload invoca o canal de venda no main
3 - o main recebe a chamada do renderer e executa a funcao service
4 - a funcao service faz a requisicao pra payer e retorna uma promisse
5 - o main recebe a resposta da promisse e envia para o renderer (tratado ou nao?)


-->
