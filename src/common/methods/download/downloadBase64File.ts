export default (base64Data: string, fileName: string) => {
  const link = document.createElement('a')
  link.href = base64Data
  link.download = fileName
  link.click()
}
