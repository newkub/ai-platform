<template>
  <div class="max-w-3xl">
    <h1 class="text-2xl font-semibold mb-6">AI Models</h1>
    
    <div class="space-y-6">
      <!-- Model Selection -->
      <div class="p-6 bg-white rounded-lg border">
        <h2 class="text-lg font-medium mb-4">Default Model</h2>
        <div class="space-y-4">
          <div v-for="model in models" :key="model.id" class="flex items-center gap-4">
            <input 
              type="radio" 
              :id="model.id"
              v-model="selectedModel"
              :value="model.id"
              class="w-4 h-4 text-primary-600"
            />
            <label :for="model.id" class="flex-1">
              <div class="font-medium">{{ model.name }}</div>
              <div class="text-sm text-neutral-600">{{ model.description }}</div>
            </label>
            <div class="text-sm text-neutral-600">{{ model.tokens }} tokens</div>
          </div>
        </div>
      </div>

      <!-- Model Settings -->
      <div class="p-6 bg-white rounded-lg border">
        <h2 class="text-lg font-medium mb-4">Model Settings</h2>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Temperature</label>
            <input 
              type="range" 
              v-model="settings.temperature"
              min="0"
              max="2"
              step="0.1"
              class="w-full"
            />
            <div class="flex justify-between text-sm text-neutral-600">
              <span>More Focused (0)</span>
              <span>{{ settings.temperature }}</span>
              <span>More Creative (2)</span>
            </div>
          </div>

          <div>
            <label class="block text-sm font-medium mb-1">Max Tokens</label>
            <input 
              type="number" 
              v-model="settings.maxTokens"
              class="w-full px-3 py-2 border rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'settings'
})

const selectedModel = ref('gpt-4')
const settings = ref({
  temperature: 0.7,
  maxTokens: 2048
})

const models = [
  {
    id: 'gpt-4',
    name: 'GPT-4',
    description: 'Most capable model, best for complex tasks',
    tokens: '8,192'
  },
  {
    id: 'gpt-3.5-turbo',
    name: 'GPT-3.5 Turbo',
    description: 'Fast and efficient for most tasks',
    tokens: '4,096'
  },
  {
    id: 'claude-2',
    name: 'Claude 2',
    description: 'Advanced model with strong reasoning capabilities',
    tokens: '100,000'
  }
]
</script>
