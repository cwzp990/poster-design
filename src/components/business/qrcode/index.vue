<template>
  <div ref="qrCodeDom" class="qrcode__wrap"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import QRCodeStyling, { Options } from 'qr-code-styling'
import { debounce } from 'throttle-debounce'
import { generateOption } from './method'

export type TQrcodeProps = {
  width?: number
  height?: number
  image?: string
  value?: string
  dotsOptions: Options['dotsOptions']
}

const props = withDefaults(defineProps<TQrcodeProps>(), {
  width: 300,
  height: 300,
  dotsOptions: () => ({
    color: '#41b583',
    type: 'rounded',
  })
})

let options: Options = {}
watch(
  () => [props.width, props.height, props.dotsOptions],
  () => {
    render()
  },
)

const render = debounce(300, false, async () => {
  options = generateOption(props)
  if (props.value) {
    options && qrCode.update(options)
    await nextTick()
    if (!qrCodeDom?.value?.firstChild) return
    (qrCodeDom.value.firstChild as HTMLElement).setAttribute('style', "width: 100%;") // 强制其适应缩放
  }
})

const qrCode = new QRCodeStyling(options)
const qrCodeDom = ref<HTMLElement>()

onMounted(() => {
  render()
  qrCode.append(qrCodeDom.value)
})

</script>
