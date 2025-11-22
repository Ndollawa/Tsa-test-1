<script setup lang="ts">
import type { HTMLAttributes } from "vue"
import { cn } from "@/lib/utils"

const props = defineProps<{
  class?: HTMLAttributes["class"]
}>()
</script>

<template>
  <span
    :class="cn(
      'text-neutral-500 flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*=\'size-\'])]:size-4 dark:text-neutral-400',
      props.class,
    )"
  >
    <slot />
  </span>
</template>
