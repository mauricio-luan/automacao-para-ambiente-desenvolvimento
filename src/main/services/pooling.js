import axios from 'axios'

export const pooling = async () => {
  let limiteTentativas = 20
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  try {
    for (let tentativas = 0; tentativas < limiteTentativas; tentativas++) {
      try {
        const response = await axios.get('http://localhost:6060/Client/response')

        if (response.status === 200) {
          return response.data
        }
        if (response.status === 202) {
          console.log('Aguardando retorno Payer... (Status 202)')
        }
      } catch (innerError) {
        console.warn('Erro ou sem operação:', innerError.message)
      }

      await sleep(3000)
    }

    throw new Error('Timeout: Limite de tentativas excedido.')
  } catch (error) {
    console.error('Falha no pooling:', error)
    return false
  }
}
