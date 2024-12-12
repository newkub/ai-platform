<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold">GitHub Integration</h2>
        <p class="text-neutral-600">Connect and manage your GitHub repositories</p>
      </div>
      <button class="px-4 py-2 bg-green-500 text-white rounded-lg flex items-center gap-2">
        <Icon icon="mdi:check" />
        Connected
      </button>
    </div>

    <!-- Repository List -->
    <div class="bg-white rounded-xl border border-neutral-200">
      <div class="p-4 border-b border-neutral-200">
        <div class="flex items-center gap-4">
          <div class="relative flex-1">
            <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search repositories..."
              class="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200"
            />
          </div>
          <button class="px-4 py-2 bg-primary-500 text-white rounded-lg flex items-center gap-2">
            <Icon icon="mdi:sync" />
            Sync Now
          </button>
        </div>
      </div>

      <div class="divide-y divide-neutral-200">
        <div v-for="repo in repositories" :key="repo.id" class="p-4 hover:bg-neutral-50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <Icon :icon="repo.private ? 'mdi:lock' : 'mdi:source-repository'" class="text-xl text-primary-500" />
              <div>
                <h3 class="font-medium">{{ repo.name }}</h3>
                <p class="text-sm text-neutral-600">{{ repo.description }}</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="text-sm text-neutral-500">Last synced {{ repo.lastSync }}</span>
              <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:cog" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings -->
    <div class="bg-white rounded-xl border border-neutral-200 p-4">
      <h3 class="text-lg font-medium mb-4">Integration Settings</h3>
      <div class="space-y-4">
        <div>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="rounded text-primary-500" checked />
            <span>Auto-sync repositories</span>
          </label>
          <p class="text-sm text-neutral-500 ml-6">Automatically sync repositories every hour</p>
        </div>
        <div>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="rounded text-primary-500" checked />
            <span>Sync private repositories</span>
          </label>
          <p class="text-sm text-neutral-500 ml-6">Include private repositories in sync</p>
        </div>
        <div>
          <label class="flex items-center gap-2">
            <input type="checkbox" class="rounded text-primary-500" />
            <span>Sync issues and pull requests</span>
          </label>
          <p class="text-sm text-neutral-500 ml-6">Include issues and pull requests in sync</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const searchQuery = ref('')

const repositories = [
  {
    id: 1,
    name: 'project-alpha',
    description: 'Main project repository',
    private: true,
    lastSync: '5 minutes ago'
  },
  {
    id: 2,
    name: 'docs',
    description: 'Project documentation',
    private: false,
    lastSync: '1 hour ago'
  },
  {
    id: 3,
    name: 'api',
    description: 'API service repository',
    private: true,
    lastSync: '2 hours ago'
  },
  {
    id: 4,
    name: 'website',
    description: 'Company website repository',
    private: false,
    lastSync: '3 hours ago'
  }
]
</script>
