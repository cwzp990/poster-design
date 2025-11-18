import fetch from '@/utils/axios'

export type TCommonUploadCb = (up: number, dp: number) => void

type TUploadProgressCbData = {
  loaded: number
  total: number
}

export type TUploadErrorResult = {type: "application/json"}

// 上传接口
export const upload = (file: File, cb: TCommonUploadCb) => {
  const formData = new FormData()
  formData.append('file', file)
  const extra = {
    responseType: 'blob',
    onUploadProgress: (progress: TUploadProgressCbData) => {
      cb(Math.floor((progress.loaded / progress.total) * 100), 0)
    },
    onDownloadProgress: (progress: TUploadProgressCbData) => {
      cb(100, Math.floor((progress.loaded / progress.total) * 100))
    },
  }
  return fetch<MediaSource | TUploadErrorResult>('https://res.palxp.cn/ai/upload', formData, 'post', {}, extra)
}
