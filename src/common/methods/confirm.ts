import { ElMessageBox, messageType } from 'element-plus'
export default (title: string = '提示', message: string = '', type: messageType = 'success', extra?: any) => {
  return new Promise((resolve: Function) => {
    ElMessageBox.confirm(message, title, Object.assign({
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type,
    }, extra))
      .then(() => {
        resolve(true)
      })
      .catch(() => {
        resolve(false)
      })
  })
}
