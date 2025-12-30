import { createStore } from 'vuex'

const store = createStore({
  state: {
    carrinho: []
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
    }
  }
})

export default store
