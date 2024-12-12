<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold">Services</h2>
        <p class="text-neutral-600">Connect and manage external services</p>
      </div>
      <div class="flex items-center gap-2">
        <div class="relative">
          <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search services..."
            class="pl-10 pr-4 py-2 rounded-lg border border-neutral-200"
          />
        </div>
        <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
          <Icon icon="mdi:refresh" />
        </button>
      </div>
    </div>

    <!-- Connected Services -->
    <div class="space-y-4">
      <h3 class="text-lg font-medium">Connected Services</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="service in connectedServices" :key="service.id"
          class="p-4 bg-white rounded-xl border border-neutral-200">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <Icon :icon="service.icon" class="text-2xl text-primary-500" />
              <div>
                <h3 class="font-medium">{{ service.name }}</h3>
                <p class="text-sm text-neutral-600">{{ service.connectedAs }}</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full">Connected</span>
              <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:cog" />
              </button>
            </div>
          </div>
          <div class="flex items-center justify-between text-sm">
            <div class="text-neutral-600">
              {{ service.status }}
            </div>
            <button class="text-primary-600 hover:underline">Manage</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Available Services -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <h3 class="text-lg font-medium">Available Services</h3>
        <div class="flex items-center gap-2">
          <select v-model="categoryFilter" class="p-2 rounded-lg border border-neutral-200 text-sm">
            <option value="">All Categories</option>
            <option value="storage">Storage</option>
            <option value="project">Project Management</option>
            <option value="communication">Communication</option>
            <option value="version-control">Version Control</option>
          </select>
        </div>
      </div>

      <!-- Storage Services -->
      <div v-show="!categoryFilter || categoryFilter === 'storage'" class="space-y-4">
        <h4 class="text-sm font-medium text-neutral-500">Storage</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="service in storageServices" :key="service.id"
            class="p-4 bg-white rounded-xl border border-neutral-200">
            <div class="flex items-center gap-3 mb-4">
              <Icon :icon="service.icon" class="text-2xl text-primary-500" />
              <div>
                <h3 class="font-medium">{{ service.name }}</h3>
                <p class="text-sm text-neutral-600">{{ service.description }}</p>
              </div>
            </div>
            <button class="w-full px-4 py-2 bg-primary-500 text-white rounded-lg">
              Connect
            </button>
          </div>
        </div>
      </div>

      <!-- Project Management -->
      <div v-show="!categoryFilter || categoryFilter === 'project'" class="space-y-4">
        <h4 class="text-sm font-medium text-neutral-500">Project Management</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="service in projectServices" :key="service.id"
            class="p-4 bg-white rounded-xl border border-neutral-200">
            <div class="flex items-center gap-3 mb-4">
              <Icon :icon="service.icon" class="text-2xl text-primary-500" />
              <div>
                <h3 class="font-medium">{{ service.name }}</h3>
                <p class="text-sm text-neutral-600">{{ service.description }}</p>
              </div>
            </div>
            <button class="w-full px-4 py-2 bg-primary-500 text-white rounded-lg">
              Connect
            </button>
          </div>
        </div>
      </div>

      <!-- Communication -->
      <div v-show="!categoryFilter || categoryFilter === 'communication'" class="space-y-4">
        <h4 class="text-sm font-medium text-neutral-500">Communication</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="service in communicationServices" :key="service.id"
            class="p-4 bg-white rounded-xl border border-neutral-200">
            <div class="flex items-center gap-3 mb-4">
              <Icon :icon="service.icon" class="text-2xl text-primary-500" />
              <div>
                <h3 class="font-medium">{{ service.name }}</h3>
                <p class="text-sm text-neutral-600">{{ service.description }}</p>
              </div>
            </div>
            <button class="w-full px-4 py-2 bg-primary-500 text-white rounded-lg">
              Connect
            </button>
          </div>
        </div>
      </div>

      <!-- Version Control -->
      <div v-show="!categoryFilter || categoryFilter === 'version-control'" class="space-y-4">
        <h4 class="text-sm font-medium text-neutral-500">Version Control</h4>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="service in versionControlServices" :key="service.id"
            class="p-4 bg-white rounded-xl border border-neutral-200">
            <div class="flex items-center gap-3 mb-4">
              <Icon :icon="service.icon" class="text-2xl text-primary-500" />
              <div>
                <h3 class="font-medium">{{ service.name }}</h3>
                <p class="text-sm text-neutral-600">{{ service.description }}</p>
              </div>
            </div>
            <button class="w-full px-4 py-2 bg-primary-500 text-white rounded-lg">
              Connect
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

const searchQuery = ref('')
const categoryFilter = ref('')

const connectedServices = [
  {
    id: 'onedrive',
    name: 'OneDrive',
    icon: 'mdi:microsoft-onedrive',
    connectedAs: 'john.doe@company.com',
    status: 'Storage used: 45.2 GB / 1 TB'
  },
  {
    id: 'clickup',
    name: 'ClickUp',
    icon: 'simple-icons:clickup',
    connectedAs: 'Development Team',
    status: 'Active workspace: Project Alpha'
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: 'mdi:slack',
    connectedAs: 'Development Channel',
    status: 'Connected to #dev-team'
  }
]

const storageServices = [
  {
    id: 'google-drive',
    name: 'Google Drive',
    icon: 'mdi:google-drive',
    description: 'Cloud storage and file sharing'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    icon: 'mdi:dropbox',
    description: 'File hosting and synchronization'
  },
  {
    id: 'box',
    name: 'Box',
    icon: 'simple-icons:box',
    description: 'Enterprise content management'
  }
]

const projectServices = [
  {
    id: 'jira',
    name: 'Jira',
    icon: 'simple-icons:jira',
    description: 'Issue and project tracking'
  },
  {
    id: 'trello',
    name: 'Trello',
    icon: 'mdi:trello',
    description: 'Visual project management'
  },
  {
    id: 'asana',
    name: 'Asana',
    icon: 'simple-icons:asana',
    description: 'Work management platform'
  }
]

const communicationServices = [
  {
    id: 'discord',
    name: 'Discord',
    icon: 'mdi:discord',
    description: 'Voice and text chat platform'
  },
  {
    id: 'teams',
    name: 'Microsoft Teams',
    icon: 'mdi:microsoft-teams',
    description: 'Business communication platform'
  },
  {
    id: 'telegram',
    name: 'Telegram',
    icon: 'mdi:telegram',
    description: 'Cloud-based messaging'
  }
]

const versionControlServices = [
  {
    id: 'github',
    name: 'GitHub',
    icon: 'mdi:github',
    description: 'Code hosting and collaboration'
  },
  {
    id: 'gitlab',
    name: 'GitLab',
    icon: 'mdi:gitlab',
    description: 'DevOps platform'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    icon: 'mdi:bitbucket',
    description: 'Git code management'
  }
]
</script>
