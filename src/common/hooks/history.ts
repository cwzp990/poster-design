import { onMounted } from 'vue'
// import WebWorker from '@/utils/plugins/webWorker'
import historyFactory from '@/utils/widgets/diffLayouts'
import { useHistoryStore, useWidgetStore } from '@/store'

const blackClass: string[] = ['operation-item', 'icon-undo', 'icon-redo']
const whiteKey: string[] = ['ArrowLeft', 'ArrowDown', 'ArrowRight', 'ArrowUp', 'Backspace', 'Delete', 'v']

const historyStore = useHistoryStore()
const widgetStore = useWidgetStore()
// const historyWorker = new WebWorker('history')
const diffLayouts = new historyFactory()

let processing = false
let historyTimer: any = null

function noPutHistory(target: any) {
  const classList = Array.from(target.classList)
  return classList.filter((v: any) => blackClass.includes(v)).length > 0
}

export default () => {
  // historyWorker.start(null, (changes: any) => {
  //   changes.patches.length > 0 && historyStore.changeHistory(changes)
  //   processing = false
  // })
  diffLayouts.onmessage((changes: any) => {
    changes.patches.length > 0 && historyStore.changeHistory(changes)
    processing = false
  })
  onMounted(() => {
    document.addEventListener(
      'mousedown',
      (e: any) => {
        if (noPutHistory(e.target)) return
        // historyWorker.send(!processing ? { op: 'diff', data: JSON.stringify(widgetStore.dLayouts) } : null)
        diffLayouts.postMessage(!processing ? { op: 'diff', data: JSON.stringify(widgetStore.dLayouts) } : null)
        processing = true
      },
      false,
    )
    document.addEventListener(
      'mouseup',
      (e: any) => {
        if (noPutHistory(e.target)) return
        clearTimeout(historyTimer)
        historyTimer = setTimeout(() => {
          // historyWorker.send({ op: 'done', data: JSON.stringify(widgetStore.dLayouts) })
          diffLayouts.postMessage({ op: 'done', data: JSON.stringify(widgetStore.dLayouts) })
        }, 150)
      },
      false,
    )
    document.addEventListener(
      'keydown',
      (e) => {
        if (!whiteKey.includes(e.key)) return
        // historyWorker.send(!processing ? { op: 'diff', data: JSON.stringify(widgetStore.dLayouts) } : null)
        diffLayouts.postMessage(!processing ? { op: 'diff', data: JSON.stringify(widgetStore.dLayouts) } : null)
        processing = true
      },
      false,
    )
    document.addEventListener(
      'keyup',
      (e) => {
        if (!whiteKey.includes(e.key)) return
        clearTimeout(historyTimer)
        historyTimer = setTimeout(() => {
          // historyWorker.send({ op: 'done', data: JSON.stringify(widgetStore.dLayouts) })
          diffLayouts.postMessage({ op: 'done', data: JSON.stringify(widgetStore.dLayouts) })
        }, 150)
      },
      false,
    )
  })
}
