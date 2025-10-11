import coms from '@/components/modules'
import pageStyle from '@/components/modules/layout/designBoard/pageStyle.vue'
import { App } from 'vue'

export default (Vue: App) => {
  coms(Vue)
  Vue.component('page-style', pageStyle) // 背景属性已不在 modules/widgets 中，单独注册
  // Vue.use(Field).use(Divider).use(NavBar).use(Toast).use(Popup)
}
