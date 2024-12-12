<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-semibold">Appearance</h2>
      <p class="text-neutral-600">Customize the look and feel of your application</p>
    </div>

    <!-- Theme Settings -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Theme</h3>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          v-for="theme in themes" 
          :key="theme.id"
          class="p-4 rounded-xl border-2 cursor-pointer transition-colors"
          :class="[
            selectedTheme === theme.id 
              ? 'border-primary-500 bg-primary-50'
              : 'border-neutral-200 hover:border-neutral-300'
          ]"
          @click="selectedTheme = theme.id"
        >
          <div class="flex items-center gap-3 mb-2">
            <Icon :icon="theme.icon" class="text-xl text-primary-500" />
            <span class="font-medium">{{ theme.name }}</span>
          </div>
          <p class="text-sm text-neutral-600">{{ theme.description }}</p>
        </div>
      </div>
    </div>

    <!-- Layout Settings -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Layout</h3>
      <div class="space-y-6">
        <!-- Sidebar Width -->
        <div>
          <label class="block text-sm font-medium mb-2">Sidebar Width</label>
          <div class="flex items-center gap-4">
            <input 
              type="range" 
              min="200" 
              max="400" 
              step="10"
              v-model="sidebarWidth"
              class="flex-1"
            />
            <span class="text-sm text-neutral-600">{{ sidebarWidth }}px</span>
          </div>
        </div>

        <!-- Content Density -->
        <div>
          <label class="block text-sm font-medium mb-2">Content Density</label>
          <div class="flex gap-4">
            <button 
              v-for="density in densities"
              :key="density.id"
              class="flex-1 p-3 rounded-lg border-2 text-sm transition-colors"
              :class="[
                selectedDensity === density.id
                  ? 'border-primary-500 bg-primary-50'
                  : 'border-neutral-200 hover:border-neutral-300'
              ]"
              @click="selectedDensity = density.id"
            >
              {{ density.name }}
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Font Settings -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Typography</h3>
      <div class="space-y-6">
        <!-- Font Family -->
        <div>
          <label class="block text-sm font-medium mb-2">Font Family</label>
          <select v-model="selectedFont" class="w-full p-2 rounded-lg border border-neutral-200">
            <option v-for="font in fonts" :key="font.id" :value="font.id">
              {{ font.name }}
            </option>
          </select>
        </div>

        <!-- Font Size -->
        <div>
          <label class="block text-sm font-medium mb-2">Base Font Size</label>
          <div class="flex items-center gap-4">
            <input 
              type="range" 
              min="12" 
              max="20" 
              step="1"
              v-model="fontSize"
              class="flex-1"
            />
            <span class="text-sm text-neutral-600">{{ fontSize }}px</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Preview -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Preview</h3>
      <div class="p-4 rounded-lg border border-neutral-200">
        <div class="space-y-4">
          <h4 class="text-lg font-medium">Sample Heading</h4>
          <p class="text-neutral-600">
            This is a preview of how your content will look with the selected settings.
            You can see the font family, size, and overall density of the content.
          </p>
          <div class="flex items-center gap-2">
            <button class="px-4 py-2 bg-primary-500 text-white rounded-lg">
              Primary Button
            </button>
            <button class="px-4 py-2 border border-neutral-200 rounded-lg">
              Secondary Button
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'


definePageMeta({
  layout: 'settings'
})

const selectedTheme = ref('light')
const sidebarWidth = ref(240)
const selectedDensity = ref('comfortable')
const selectedFont = ref('inter')
const fontSize = ref(14)

const themes = [
  {
    id: 'light',
    name: 'Light',
    icon: 'mdi:white-balance-sunny',
    description: 'Clean and bright theme for better readability'
  },
  {
    id: 'dark',
    name: 'Dark',
    icon: 'mdi:moon-waning-crescent',
    description: 'Easy on the eyes in low-light conditions'
  },
  {
    id: 'system',
    name: 'System',
    icon: 'mdi:desktop-mac',
    description: 'Follows your system preferences'
  }
]

const densities = [
  { id: 'compact', name: 'Compact' },
  { id: 'comfortable', name: 'Comfortable' },
  { id: 'spacious', name: 'Spacious' }
]

const fonts = [
  { id: 'inter', name: 'Inter' },
  { id: 'roboto', name: 'Roboto' },
  { id: 'sf-pro', name: 'SF Pro' },
  { id: 'system', name: 'System Default' }
]
</script>