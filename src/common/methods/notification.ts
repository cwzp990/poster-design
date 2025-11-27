import { ElNotification } from 'element-plus'

interface ElNotifi {
  type?: 'success' | 'warning' | 'info' | 'error' | ''
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'
}

export default (title: string, message: string = '', extra?: ElNotifi) => {
  ElNotification({
    title,
    message,
    ...extra,
  })
}
