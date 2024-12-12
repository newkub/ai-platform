<template>
  <div 
    class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
    :class="role === 'assistant' ? 'bg-primary-100' : 'bg-neutral-100'"
  >
    <img 
      v-if="role === 'assistant'"
      :src="getProviderAvatar"
      class="w-6 h-6 rounded"
      alt="Assistant"
    />
    <div v-else class="w-8 h-8 flex-shrink-0">
      <div
        class="w-full h-full rounded-lg flex items-center justify-center"
        :class="avatarClasses"
      >
        <Icon :icon="iconName" class="text-xl" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { Icon } from '@iconify/vue'

const props = defineProps<{
  role: 'user' | 'assistant'
  model?: string
}>()

const getProviderAvatar = computed(() => {
  if (props.model?.includes('claude')) {
    return 'https://avatars.githubusercontent.com/u/49760167?s=200&v=4'
  }
  return 'https://avatars.githubusercontent.com/u/142387426?s=200&v=4'
})

const isAssistant = computed(() => props.role === 'assistant')
const iconName = computed(() => isAssistant.value ? 'mdi:robot' : 'mdi:account')
const avatarClasses = computed(() => ({
  'bg-primary-50 text-primary-600': isAssistant.value,
  'bg-neutral-100 text-neutral-600': !isAssistant.value
}))
</script>