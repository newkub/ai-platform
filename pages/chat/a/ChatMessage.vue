<template>
  <div 
    class="flex gap-4 p-4"
    :class="[
      message.role === 'user' ? 'bg-neutral-base/5' : 'bg-white',
      message.role === 'assistant' ? 'border-l-4 border-red-500 bg-red-50' : ''
    ]"
  >
    <!-- Avatar -->
    <ChatAvatar
      :src="message.role === 'user' ? 'user-avatar' : 'bot-avatar'"
      :name="message.role === 'user' ? 'User' : 'Assistant'"
      :variant="message.role === 'user' ? 'primary' : 'neutral'"
    />

    <!-- Content -->
    <div class="flex-1 space-y-2">
      <!-- Header -->
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Text2 weight="medium">
            {{ message.role === 'user' ? 'User' : 'Assistant' }}
          </Text2>
        </div>
        <Text2 
          size="xs" 
          variant="neutral"
        >
          {{ formatTime(new Date().getTime()) }}
        </Text2>
      </div>

      <!-- Message -->
      <div class="prose prose-neutral max-w-none">
        {{ message.content }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  messages: Array<{
    role: 'assistant' | 'user'
    content: string
  }>
}>()

const formatTime = (timestamp: number) => {
  return new Date(timestamp).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  })
}
</script>
