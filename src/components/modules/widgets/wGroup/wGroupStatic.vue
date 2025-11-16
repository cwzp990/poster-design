<template>
  <div
    :style="{
      position: 'absolute',
      left: (props.params.left || 0) - (props.parent?.left || 0) + 'px',
      top: (props.params.top || 0) - (props.parent.top || 0) + 'px',
      width: params.width + 'px',
      height: params.height + 'px',
      opacity: params.opacity,
    }"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
// 组合组件

export type TParamsData = {
  left: number
  top: number
  width: number
  height: number
  opacity: number
  rotate: number
  uuid: string
  lock: boolean
  fontSize: number
}

type TProps = {
  params?: Partial<TParamsData>
  parent?: Partial<Pick<TParamsData, "top" | "left">>
}
const props = withDefaults(defineProps<TProps>(), {
  params: () => ({}),
  parent: () => ({})
})

</script>

