import { ipcMain } from 'electron'
import { createPayment } from '../services/services'
import { logger } from '../log/logger'

export const registerIpcHandlers = () => {
  ipcMain.handle('payment:create-payment', async (_, payload) => {
    return await createPayment(payload)
  })

  ipcMain.on('log', (event, payload) => {
    const { level, message, ...metadata } = payload
    logger.log({ level, message })

    console.log('📡 MAIN: Tentando devolver pra tela...', message)

    event.sender.send('log:added', {
      timestamp: new Date().toISOString(),
      level,
      message,
      details: metadata ? JSON.stringify(metadata) : ''
    })
  })
}
