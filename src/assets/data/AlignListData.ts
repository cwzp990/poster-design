export type AlignListData = {
  key: string
  icon: string
  tip: string
  value: string
}

export default [
  {
    key: 'align',
    icon: 'icon-align-left',
    tip: '左对齐',
    value: 'left',
  },
  {
    key: 'align',
    icon: 'icon-align-center-horiz',
    tip: '水平居中对齐',
    value: 'ch',
  },
  {
    key: 'align',
    icon: 'icon-align-right',
    tip: '右对齐',
    value: 'right',
  },
  {
    key: 'align',
    icon: 'icon-align-top',
    tip: '上对齐',
    value: 'top',
  },
  {
    key: 'align',
    icon: 'icon-align-center-verti',
    tip: '垂直居中对齐',
    value: 'cv',
  },
  {
    key: 'align',
    icon: 'icon-align-bottom',
    tip: '下对齐',
    value: 'bottom',
  },
] as AlignListData[]
