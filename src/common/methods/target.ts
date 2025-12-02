// TODO: Group类型比较特殊，所以需要全量循环并判断是否为group
const arr = ['w-text', 'w-image', 'w-svg', 'w-group', 'w-qrcode']

export function getTarget(currentTarget: HTMLElement): Promise<HTMLElement | null> {
  let collector: string[] = []
  let groupTarger: HTMLElement | null = null
  let saveTarger: HTMLElement | null = null
  return new Promise((resolve) => {
    function findTarget(target: HTMLElement | null) {
      if (!target || target.id === 'page-design') {
        if (collector.length > 1) {
          resolve(groupTarger)
        } else {
          resolve(saveTarger ?? currentTarget)
        }
        return
      }
      const t = Array.from(target.classList)

      collector = collector.concat(
        t.filter((x) => {
          arr.includes(x) && (saveTarger = target)
          x === 'w-group' && (groupTarger = target)
          return arr.includes(x)
        }),
      )
      findTarget(target.parentElement)
    }
    findTarget(currentTarget)
  })
}

export function getFinalTarget(currentTarget: HTMLElement) {
  let collector: string[] = []
  // let groupTarger: HTMLElement | null = null
  // let saveTarger: HTMLElement | null = null
  return new Promise((resolve) => {
    function findTarget(target: HTMLElement | null) {
      if (!target || target.id === 'page-design') {
        resolve(target)
        return
      }
      const t = Array.from(target.classList)

      collector = collector.concat(
        t.filter((x) => {
          // arr.includes(x) && (saveTarger = target)
          // x === 'w-group' && (groupTarger = target)
          return arr.includes(x)
        }),
      )

      findTarget(target.parentElement)
    }
    findTarget(currentTarget)
  })
}
