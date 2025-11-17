export type TMenuItemData = {
  left: number
  top: number
  list: TWidgetItemData[]
}

export const menuList: TMenuItemData = {
  left: 0,
  top: 0,
  list: [],
}

export type TWidgetItemData = {
  type: 'copy' | 'paste' | 'index-up' | 'index-down' | 'del' | 'ungroup'
  text: string
}

export const widgetMenu: TWidgetItemData[] = [
  {
    type: 'copy',
    text: '复制',
  },
  {
    type: 'paste',
    text: '粘贴',
  },
  {
    type: 'index-up',
    text: '上移一层',
  },
  {
    type: 'index-down',
    text: '下移一层',
  },
  {
    type: 'del',
    text: '删除',
  },
]

export const pageMenu: TWidgetItemData[] = [
  {
    type: 'paste',
    text: '粘贴',
  },
]
