<template>
  <div class="max-w-3xl">
    <h1 class="text-2xl font-semibold mb-6">API Keys</h1>
    
    <div class="space-y-6">
      <!-- OpenAI API Key -->
      <div class="p-6 bg-white rounded-lg border">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h2 class="text-lg font-medium">OpenAI API Key</h2>
            <p class="text-neutral-600 mt-1">Required for ChatGPT and GPT-4 models</p>
          </div>
          <button class="text-primary-600 hover:text-primary-700">
            Regenerate
          </button>
        </div>
        <div class="flex gap-3">
          <input 
            type="password"
            v-model="apiKeys.openai"
            class="flex-1 px-3 py-2 border rounded-lg"
            placeholder="sk-..."
          />
          <button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Save
          </button>
        </div>
      </div>

      <!-- Anthropic API Key -->
      <div class="p-6 bg-white rounded-lg border">
        <div class="flex justify-between items-start mb-4">
          <div>
            <h2 class="text-lg font-medium">Anthropic API Key</h2>
            <p class="text-neutral-600 mt-1">Required for Claude models</p>
          </div>
          <button class="text-primary-600 hover:text-primary-700">
            Regenerate
          </button>
        </div>
        <div class="flex gap-3">
          <input 
            type="password"
            v-model="apiKeys.anthropic"
            class="flex-1 px-3 py-2 border rounded-lg"
            placeholder="sk-ant-..."
          />
          <button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'settings'
})

const apiKeys = ref({
  openai: '',
  anthropic: ''
})
</script>
