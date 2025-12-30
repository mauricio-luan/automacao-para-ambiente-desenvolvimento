import { ipcMain } from 'electron'
import { chamaVenda /*, outras */ } from '../services/services'

export const registerIpcHandlers = () => {
  ipcMain.handle('chama-venda', async (_, payload) => {
    return await chamaVenda(payload)
  })
}
