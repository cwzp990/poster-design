// import store from '@/store'
import { useWidgetStore } from '@/store'
import { toRaw } from 'vue'
export default () => {
  const widgetStore = useWidgetStore()
  const collector = new Set<string>()
  const fonts: Record<string, any> = {}
  const { dWidgets: widgets } = widgetStore
  for (let i = 0; i < widgets.length; i++) {
    const { type, fontClass } = widgets[i]
    if (type === 'w-text') {
      fontClass && collector.add(fontClass.id)
      fontClass && (fonts[fontClass.id] = toRaw(fontClass))
    }
  }
  return Array.from(collector).map((id: string) => fonts[id])
}
