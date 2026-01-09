import { contextBridge, ipcRenderer } from 'electron'

const api = {
  payment: {
    create: async (payload) => await ipcRenderer.invoke('payment:create-payment', payload)
  },
  log: {
    info: (msg) => ipcRenderer.send('log', { level: 'info', message: msg }),
    error: (msg) => ipcRenderer.send('log', { level: 'error', message: msg }),
    warn: (msg) => ipcRenderer.send('log', { level: 'warn', message: msg }),
    logAdded: (cb) => {
      const subscription = (_event, payload) => {
        console.log('🕵️ PRELOAD: Recebi do Main!', payload)
        cb(payload)
      }
      ipcRenderer.on('log:added', subscription)
      return () => ipcRenderer.removeListener('log:added', subscription)
    }
  }
}

contextBridge.exposeInMainWorld('api', api)
