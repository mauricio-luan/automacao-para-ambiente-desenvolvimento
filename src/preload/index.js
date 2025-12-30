import { contextBridge, ipcRenderer } from 'electron'

const api = {
  pagamento: async (payload) => await ipcRenderer.invoke('chama-venda', payload)
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
}
