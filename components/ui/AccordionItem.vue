<template>
  <div class="border-b border-neutral-base last:border-none">
    <button
      class="w-full flex items-center justify-between py-4 text-left transition-colors hover:text-primary-hover"
      @click="isOpen = !isOpen"
    >
      <slot name="title">
        <span class="text-body font-medium">{{ title }}</span>
      </slot>
      <Icon
        :icon="isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'"
        class="text-xl transition-transform"
        :class="isOpen ? 'rotate-180' : ''"
      />
    </button>
    
    <div
      v-show="isOpen"
      class="pb-4 text-small text-neutral-base"
    >
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

const props = defineProps<{
  title: string
  initialOpen?: boolean
}>()

const isOpen = ref(props.initialOpen || false)
</script>