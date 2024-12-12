<template>
  <component
    :is="as"
    class="text-neutral-base"
    :class="[
      size === 'xs' ? 'text-xs' :
      size === 'sm' ? 'text-sm' :
      size === 'base' ? 'text-base' :
      size === 'lg' ? 'text-lg' :
      size === 'xl' ? 'text-xl' :
      size === '2xl' ? 'text-2xl' :
      size === '3xl' ? 'text-3xl' :
      'text-base',
      weight === 'normal' ? 'font-normal' :
      weight === 'medium' ? 'font-medium' :
      weight === 'semibold' ? 'font-semibold' :
      weight === 'bold' ? 'font-bold' :
      'font-normal',
      variant === 'primary' ? 'text-primary-base' :
      variant === 'secondary' ? 'text-secondary-base' :
      variant === 'success' ? 'text-green-500' :
      variant === 'warning' ? 'text-yellow-500' :
      variant === 'error' ? 'text-red-500' :
      'text-neutral-base'
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl'
  weight?: 'normal' | 'medium' | 'semibold' | 'bold'
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'neutral'
}>(), {
  as: 'p',
  size: 'base',
  weight: 'normal',
  variant: 'neutral'
})
</script>
