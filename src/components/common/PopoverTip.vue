<template>
  <el-popover ref="popover" :placement="position" :title="title" :width="width" trigger="hover" :content="content">
    <template #reference>
      <slot />
    </template>
  </el-popover>
</template>

<script lang="ts" setup>
type TProps = {
  title: string
  width: number
  content: string
  position?: "bottom" | "auto" | "auto-start" | "auto-end" | "top" | "right" | "left" | "top-start" | "top-end" | "bottom-start" | "bottom-end" | "right-start" | "right-end" | "left-start" | "left-end"
  offset?: number
}

const { title, width, content, position } = withDefaults(defineProps<TProps>(), {
  title: '',
  width: 0,
  content: '',
  position: 'bottom'
})
</script>
