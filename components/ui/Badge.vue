<template>
  <span
    class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium"
    :class="[
      variant === 'primary' ? 'bg-primary-base text-white' :
      variant === 'secondary' ? 'bg-secondary-base text-white' :
      variant === 'success' ? 'bg-green-500 text-white' :
      variant === 'warning' ? 'bg-yellow-500 text-white' :
      variant === 'error' ? 'bg-red-500 text-white' :
      variant === 'outline' ? 'border border-neutral-base text-neutral-base' :
      'bg-neutral-base text-white'
    ]"
  >
    <Icon 
      v-if="icon"
      :icon="icon"
      class="mr-1 text-sm"
    />
    <slot />
  </span>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'outline' | 'neutral'
  icon?: string
}>(), {
  variant: 'neutral'
})
</script>