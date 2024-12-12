<template>
  <div class="hidden lg:block bg-white rounded-xl shadow-sm overflow-hidden h-full p-4 overflow-y-auto scrollbar scrollbar-w-1 scrollbar-thumb-rounded scrollbar-thumb-gray-300 scrollbar-track-gray-100">
    <Tab :tabs="tabs" :default-tab="defaultTab" @update:tab="handleTabChange" />

    <!-- Model Selection -->
    <div v-show="currentTab === 'model'" class="space-y-6">
      <div>
        <h3 class="text-sm font-medium text-neutral-700 mb-2">Model</h3>
        <Dropdown
          :items="dropdownItems"
          @select="handleModelSelect"
        >
          <template #trigger>
            <div class="flex items-center gap-2">
              <img 
                :src="selectedProvider?.avatar"
                class="w-5 h-5 rounded"
                :alt="selectedProvider?.name"
              />
              <span>{{ getModelName(selectedModel) }}</span>
            </div>
          </template>
        </Dropdown>
      </div>

      <!-- Prompt Input -->
      <div>
        <h3 class="text-sm font-medium text-neutral-700 mb-2">Prompt</h3>
        <textarea
          v-model="prompt"
          rows="4"
          class="w-full p-2 border border-neutral-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Enter your prompt here..."
        ></textarea>
      </div>

      <!-- Temperature -->
      <div>
        <h3 class="text-sm font-medium text-neutral-700 mb-2">Temperature</h3>
        <Slider v-model="temperature" :min="0" :max="1" :step="0.1" />
      </div>

      <!-- Max Tokens -->
      <div>
        <h3 class="text-sm font-medium text-neutral-700 mb-2">Max Tokens</h3>
        <input
          v-model.number="maxTokens"
          type="number"
          min="1"
          max="4096"
          class="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>

      <!-- Stop Sequences -->
      <div>
        <h3 class="text-sm font-medium text-neutral-700 mb-2">Stop Sequences</h3>
        <input
          v-model="stopSequences"
          type="text"
          placeholder="Enter stop sequences separated by commas"
          class="w-full p-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
        />
      </div>
    </div>

    <!-- History Tab -->
    <div v-show="currentTab === 'history'" class="space-y-4">
      <div v-for="chat in chatHistory" :key="chat.id" class="p-3 rounded-lg hover:bg-neutral-50 cursor-pointer">
        <div class="flex items-center justify-between mb-1">
          <h4 class="font-medium">{{ chat.title }}</h4>
          <span class="text-sm text-neutral-500">{{ chat.date }}</span>
        </div>
        <p class="text-sm text-neutral-600 truncate">{{ chat.preview }}</p>
      </div>
    </div>

    <!-- Settings Tab -->
    <div v-show="currentTab === 'settings'" class="space-y-6">
      <div>
        <h3 class="text-sm font-medium text-neutral-700 mb-2">Theme</h3>
        <Dropdown
          :items="[
            { label: 'Light', value: 'light' },
            { label: 'Dark', value: 'dark' },
            { label: 'System', value: 'system' }
          ]"
          @select="handleThemeChange"
        />
      </div>
      <div>
        <h3 class="text-sm font-medium text-neutral-700 mb-2">Language</h3>
        <Dropdown
          :items="[
            { label: 'English', value: 'en' },
            { label: 'ไทย', value: 'th' }
          ]"
          @select="handleLanguageChange"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Dropdown from '../ui/Dropdown.vue'
import Slider from '../ui/Slider.vue'
import Tab from '../ui/Tab.vue'

interface Model {
  id: string
  name: string
}

interface Provider {
  id: string
  name: string
  avatar: string
  models: Model[]
}

interface ChatHistoryItem {
  id: string
  title: string
  preview: string
  date: string
}

const selectedModel = ref('claude-3-haiku')
const prompt = ref('')
const temperature = ref(0.7)
const maxTokens = ref(2048)
const stopSequences = ref('')
const currentTab = ref('model')
const defaultTab = 'model'

// Tab configuration
const tabs = [
  { id: 'model', name: 'Model', icon: 'mdi:robot' },
  { id: 'history', name: 'History', icon: 'mdi:history' },
  { id: 'settings', name: 'Settings', icon: 'mdi:cog' }
]

// Chat history data
const chatHistory = ref<ChatHistoryItem[]>([
  {
    id: '1',
    title: 'Project Discussion',
    preview: 'Let\'s discuss the new features for the upcoming release...',
    date: '2h ago'
  },
  {
    id: '2',
    title: 'Code Review',
    preview: 'Can you review this implementation of the authentication system?',
    date: '5h ago'
  }
])

const providers: Provider[] = [
  {
    id: 'anthropic',
    name: 'Anthropic',
    avatar: '/img/anthropic.png',
    models: [
      { id: 'claude-3-haiku', name: 'Claude 3 Haiku' },
      { id: 'claude-3-sonnet', name: 'Claude 3 Sonnet' },
      { id: 'claude-3-opus', name: 'Claude 3 Opus' }
    ]
  }
]

const selectedProvider = computed(() => 
  providers.find(provider => 
    provider.models.some(model => model.id === selectedModel.value)
  )
)

const dropdownItems = computed(() => {
  return providers.flatMap(provider => 
    provider.models.map(model => ({
      label: `${provider.name} - ${model.name}`,
      value: model.id,
      provider: provider
    }))
  )
})

function handleModelSelect(item: { value: string }) {
  selectedModel.value = item.value
}

function getModelName(id: string) {
  for (const provider of providers) {
    const model = provider.models.find(m => m.id === id)
    if (model) return model.name
  }
  return id
}

function handleTabChange(id: string) {
  currentTab.value = id
}

function handleThemeChange(item: { value: string }) {
  // Implement theme change logic
}

function handleLanguageChange(item: { value: string }) {
  // Implement language change logic
}
</script>