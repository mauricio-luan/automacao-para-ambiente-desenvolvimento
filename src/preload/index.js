import { contextBridge, ipcRenderer } from 'electron'

const payment = {
  create: async (payload) => await ipcRenderer.invoke('payment:create-payment', payload)
}

contextBridge.exposeInMainWorld('payment', payment)
