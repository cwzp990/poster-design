import { ElLoading } from 'element-plus'
export default (text: string = 'loading') => {
  const loading = ElLoading.service({
    lock: true,
    text,
    spinner: 'el-icon-loading',
    background: 'rgba(0, 0, 0, 0.7)',
  })
  return loading
  // loading.close()
}
