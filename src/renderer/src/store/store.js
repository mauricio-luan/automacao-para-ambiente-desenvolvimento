import { createStore } from 'vuex'

const store = createStore({
  state: {
    carrinho: [],
    logs: []
  },

  mutations: {
    adicionarAoCarrinho(state, produto) {
      const produtoNoCarrinho = state.carrinho.find((p) => p.id === produto.id)

      produtoNoCarrinho
        ? produtoNoCarrinho.quantidade++
        : state.carrinho.push({ ...produto, quantidade: 1 })
    },

    removerDoCarrinho(state, produtoId) {
      const index = state.carrinho.findIndex((p) => p.id === produtoId)
      if (index != -1) state.carrinho.splice(index, 1)
    },

    decrementaProduto(state, produtoId) {
      const produto = state.carrinho.find((p) => p.id === produtoId)

      if (produto) {
        if (produto.quantidade > 1) produto.quantidade--
        else this.commit('removerDoCarrinho', produto.id)
      }
    },

    limpaCarrinho(state) {
      state.carrinho = []
    },

    adicionaAoLog(state, log) {
      state.logs.push(log)
    }
  },

  actions: {
    adicionarAoCarrinho(context, produto) {
      context.commit('adicionarAoCarrinho', produto)
    },

    removerDoCarrinho(context, produtoId) {
      context.commit('removerDoCarrinho', produtoId)
    },

    decrementaProduto(context, produtoId) {
      context.commit('decrementaProduto', produtoId)
    },

    limpaCarrinho(context) {
      context.commit('limpaCarrinho')
      window.api.log.info('Carrinho foi limpo')
    }
  },

  getters: {
    getTodosProdutos(state) {
      return state.carrinho
    },

    quantidadeProdutosNoCarrinho(state) {
      return state.carrinho.reduce((soma, produto) => {
        const total = soma + produto.quantidade
        return total
      }, 0)
    },

    valorTotalNoCarrinho(state) {
      return state.carrinho.reduce((soma, produto) => {
        const valorTotalPorProduto = produto.valorUnitario * produto.quantidade
        const total = soma + valorTotalPorProduto
        return total
      }, 0)
    },

    carrinhoEstaVazio(state) {
      return state.carrinho.length === 0
    },

    logs(state) {
      return state.logs
    }
    // { "timestamp": "2026-01-10T03:00:25.560Z", "level": "info", "message": "Carrinho foi limpo", "details": "{}" }
  }
})

export default store
