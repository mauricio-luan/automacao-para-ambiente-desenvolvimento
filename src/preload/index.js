import { contextBridge, ipcRenderer } from 'electron'

const api = {
  payment: {
    create: async (payload) => await ipcRenderer.invoke('payment:create', payload)
  },
  log: {
    // handlers
    info: (msg) => ipcRenderer.send('log:write', { level: 'info', message: msg }),
    error: (msg) => ipcRenderer.send('log:write', { level: 'error', message: msg }),
    warn: (msg) => ipcRenderer.send('log:write', { level: 'warn', message: msg }),

    // listeners
    onLogAdded: (cb) => {
      const log = (_event, payload) => cb(payload)
      ipcRenderer.on('log:update', log)
      return () => ipcRenderer.removeListener('log:update', log)
    }
  }
}

contextBridge.exposeInMainWorld('api', api)
