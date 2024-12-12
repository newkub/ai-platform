<template>
  <nav class="nav-container">
    <slot>
      <button 
        v-for="item in items" 
        :key="item.id"
        :to="item.to"
        class="nav-item"
        :class="[
          modelValue === item.id ? 'bg-primary-base text-white' : '',
          item.disabled ? 'opacity-50 cursor-not-allowed' : ''
        ]"
        @click="$emit('update:modelValue', item.id)"
      >
        <slot name="item" :item="item">
          {{ item.name }}
        </slot>
      </button>
    </slot>
  </nav>
</template>

<script setup lang="ts">
interface Item {
  id: string | number
  name: string
  [key: string]: any
}

defineProps<{
  modelValue: string | number
  items: Item[]
}>()

defineEmits<{
  'update:modelValue': [value: string | number]
}>()
</script>
