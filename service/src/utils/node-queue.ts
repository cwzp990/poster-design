interface Queue {
  Fn: Function
  sign?: string | number
}

import { maxNum } from '../configs'
const queueList: any = [] // 任务队列
let curNum = 0 // 当前执行的任务数

function queueRun(business: Function, ...arg: any) {
  return new Promise(async (resolve) => {
    const Fn = async () => resolve(await business(...arg))
    const sign = { ...arg }[2]
    if (curNum >= maxNum) {
      queueList.push({ sign, Fn })
    } else {
      await run(Fn)
    }
  })
}

function run(Fn: Function) {
  curNum++
  Fn().then((res: any) => {
    curNum--
    if (queueList.length > 0) {
      const Task: Queue = queueList.shift()
      run(Task.Fn)
    }
    return res
  })
}

export { queueRun, queueList }
