export type QrCodeLocalizationData = {
  dotColorTypes: {
    key: string
    value: string
  }[]
  dotTypes: {
    key: string
    value: string
  }[]
}

export default {
  dotColorTypes: [
    {
      key: 'single',
      value: '单色',
    },
    {
      key: 'gradient',
      value: '渐变色',
    },
  ],
  dotTypes: [
    {
      key: 'dots',
      value: '圆点风格',
    },
    {
      key: 'rounded',
      value: '圆润风格',
    },
    {
      key: 'classy',
      value: '经典风格',
    },
    {
      key: 'classy-rounded',
      value: '圆角风格',
    },
    {
      key: 'square',
      value: '方形风格',
    },
    {
      key: 'extra-rounded',
      value: '特殊风格',
    },
  ],
} as QrCodeLocalizationData
