<template>
  <div class="border-t border-neutral-base bg-white p-4">
    <div class="max-w-4xl mx-auto">
      <!-- Toolbar -->
      <div class="flex items-center gap-2 mb-4">
        <button
          v-for="tool in tools"
          :key="tool.id"
          class="btn-ghost"
          :class="{ 'text-primary-base': tool.active }"
          @click="tool.onClick"
        >
          <Icon :icon="tool.icon" class="text-xl" />
        </button>
      </div>

      <!-- Input Area -->
      <div class="relative">
        <textarea
          v-model="inputValue"
          rows="3"
          class="form-textarea pr-24"
          :placeholder="placeholder"
          @keydown.enter.prevent="handleEnter"
          @input="handleInput"
          @keydown="handleKeydown"
          @paste="handlePaste"
          :disabled="disabled"
        />

        <!-- Actions -->
        <div class="absolute bottom-3 right-3 flex items-center gap-2">
          <button
            v-for="action in actions"
            :key="action.id"
            class="btn-icon"
            :class="[
              action.variant === 'primary' ? 'btn-primary' : 'btn-ghost',
              { 'opacity-50 cursor-not-allowed': action.disabled }
            ]"
            :disabled="action.disabled"
            @click="action.onClick"
          >
            <Icon :icon="action.icon" class="text-xl" />
          </button>
        </div>
      </div>

      <!-- Context -->
      <div 
        v-if="context"
        class="mt-4 flex items-center gap-2 text-small text-neutral-base"
      >
        <Icon :icon="context.icon" class="text-lg" />
        <span>{{ context.text }}</span>
        <button 
          class="btn-ghost text-xs"
          @click="context.onClear"
        >
          Clear
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Tool {
  id: string
  icon: string
  active?: boolean
  onClick: () => void
}

interface Action {
  id: string
  icon: string
  variant?: 'primary' | 'ghost'
  disabled?: boolean
  onClick: () => void
}

interface Context {
  icon: string
  text: string
  onClear: () => void
}

const props = defineProps<{
  modelValue: string
  placeholder?: string
  tools?: Tool[]
  actions?: Action[]
  context?: Context
  disabled?: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
  'submit': []
  'send': [message: string]
}>()

const inputValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

const loading = ref(false)
const hasContent = ref(false)
const canSend = ref(false)

const handleEnter = (e: KeyboardEvent) => {
  if (e.shiftKey) return
  if (!canSend.value) return
  loading.value = true
  emit('send', inputValue.value.trim())
  inputValue.value = ''
  hasContent.value = false
  canSend.value = false
  loading.value = false
}

const handleInput = () => {
  hasContent.value = inputValue.value.trim().length > 0
  canSend.value = hasContent.value && !loading.value
}

const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault()
    handleEnter(e)
  }
}

const handlePaste = () => {
  // Handle paste
}

const handleFileUpload = () => {
  // Implement file upload
}

const handlePromptEnhance = () => {
  // Implement prompt enhance
}

const handlePreset = () => {
  // Implement preset
}

const handleVoiceInput = () => {
  // Implement voice input
}

const tools = ref([
  {
    id: 'file-upload',
    icon: 'mdi:file-upload',
    onClick: handleFileUpload
  },
  {
    id: 'prompt-enhance',
    icon: 'mdi:magic-wand',
    onClick: handlePromptEnhance
  },
  {
    id: 'preset',
    icon: 'mdi:bookmark-outline',
    onClick: handlePreset
  },
  {
    id: 'voice-input',
    icon: 'mdi:microphone',
    onClick: handleVoiceInput
  }
])

const actions = ref([
  {
    id: 'send',
    icon: 'mdi:send',
    variant: 'primary',
    disabled: !canSend,
    onClick: handleEnter
  }
])

const context = ref({
  icon: 'mdi:information',
  text: 'Type a message... (Enter to send, Shift + Enter for new line)',
  onClear: () => {}
})
</script>