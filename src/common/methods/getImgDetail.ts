export const getImage = (imgItem: string | File): Promise<HTMLImageElement> => {
  // 创建对象
  const img = new Image()

  // 改变图片的src
  const url = window.URL || window.webkitURL
  img.src = typeof imgItem === 'string' ? imgItem : url.createObjectURL(imgItem)

  return new Promise((resolve) => {
    // 判断是否有缓存
    if (img.complete) {
      resolve(img)
    } else {
      // 加载完成执行
      img.onload = function () {
        resolve(img)
      }
    }
  })
}
