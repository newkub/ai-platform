<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">Settings</h1>
    
    <div class="grid grid-cols-2 gap-6">
      <div v-for="section in settingsSections" :key="section.title" class="space-y-4">
        <h2 class="text-lg font-medium">{{ section.title }}</h2>
        <div class="grid gap-4">
          <NuxtLink 
            v-for="item in section.items"
            :key="item.path"
            :to="item.path"
            class="p-4 border rounded-lg hover:border-primary-500 transition-colors"
          >
            <div class="flex items-center gap-3 mb-2">
              <Icon :icon="item.icon" class="text-xl text-primary-500" />
              <h3 class="font-medium">{{ item.title }}</h3>
            </div>
            <p class="text-sm text-neutral-600">{{ item.description }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface SettingsItem {
  title: string
  path: string
  icon: string
  description: string
}

interface SettingsSection {
  title: string
  items: SettingsItem[]
}

const settingsSections: SettingsSection[] = [
  {
    title: 'General Settings',
    items: [
      {
        title: 'Profile',
        path: '/settings/profile',
        icon: 'mdi:account',
        description: 'Manage your personal information and preferences'
      },
      {
        title: 'Appearance',
        path: '/settings/appearance',
        icon: 'mdi:palette',
        description: 'Customize the look and feel of your application'
      },
      {
        title: 'Keyboard Shortcuts',
        path: '/settings/keyboard-shortcut',
        icon: 'mdi:keyboard',
        description: 'Configure keyboard shortcuts for faster navigation'
      }
    ]
  },
  {
    title: 'AI & Integration',
    items: [
      {
        title: 'Models',
        path: '/settings/model',
        icon: 'mdi:robot',
        description: 'Configure AI model settings and preferences'
      },
      {
        title: 'API Keys',
        path: '/settings/api-keys',
        icon: 'mdi:key',
        description: 'Manage your API keys for integrations'
      },
      {
        title: 'Voice',
        path: '/settings/voice',
        icon: 'mdi:microphone',
        description: 'Configure voice input and output settings'
      }
    ]
  }
]

definePageMeta({
  layout: 'settings'
})
</script>