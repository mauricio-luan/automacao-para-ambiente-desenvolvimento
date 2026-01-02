import { ipcMain } from 'electron'
import { createPayment /*, outras */ } from '../services/services'

export const registerIpcHandlers = () => {
  ipcMain.handle('payment:create-payment', async (_, payload) => {
    return await createPayment(payload)
  })
}
