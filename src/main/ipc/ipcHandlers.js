import { ipcMain, dialog } from 'electron'
import { chamaVenda /*, outras */ } from '../services/services'

export const registerIpcHandlers = () => {
  // PADRAO DE OURO PARA NUNCA ESQUECER MAURICIOOOOOOOOOOOO
  // Os handles servem como controllers. Eles apenas recebem as requisicoes e devolvem as respostas por meio das funcoes services.
  ipcMain.handle('chama-venda', async (_, payload) => {
    const response = await chamaVenda(payload)
    if (response.statusTransaction === 'APPROVED') {
      dialog.showMessageBoxSync({
        type: 'info',
        title: 'Aprovado',
        message: 'Transação aprovada'
      })
    }
    return response
  })
}
