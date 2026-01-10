import { BrowserWindow, ipcMain } from 'electron'
import { createPayment } from '../services/services'
import { logger } from '../log/logger'

export function registerIpcHandlers() {
  ipcMain.handle('payment:create', async (_, payload) => {
    return await createPayment(payload)
  })

  ipcMain.on('log:write', (_, { level, message }) => {
    logger.log({ level, message })
  })

  logger.on('data', (logData) => {
    console.log(logData)
    BrowserWindow.getFocusedWindow().webContents.send('log:update', logData)
  })
}
