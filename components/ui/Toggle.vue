<template>
  <div class="flex items-center justify-between">
    <span class="text-small text-neutral-base">{{ label }}</span>
    <button
      type="button"
      class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors"
      :class="modelValue ? 'bg-primary-base' : 'bg-neutral-base'"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <span
        class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform"
        :class="modelValue ? 'translate-x-6' : 'translate-x-1'"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  modelValue: boolean
}>()

defineEmits<{
  'update:modelValue': [value: boolean]
}>()
</script>