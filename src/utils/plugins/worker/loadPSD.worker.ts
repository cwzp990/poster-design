// import Psd from '@webtoon/psd'

// onmessage = async (e) => {
//   const result = await e.data.arrayBuffer()
//   const rawPsdFile = Psd.parse(result)
//   console.log(111, rawPsdFile)

//   const { width, height } = rawPsdFile
//   const psdFile = { width, height }

//   const compositeBuffer = await rawPsdFile.composite()

//   self.postMessage({ psdFile, compositeBuffer })
// }

import { processPSD2Page } from '@/utils/plugins/psd'

onmessage = async (e) => {
  const data = await processPSD2Page(e.data)
  self.postMessage({ data })
}