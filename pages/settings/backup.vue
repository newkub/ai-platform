<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-semibold">Backup & Restore</h2>
      <p class="text-neutral-600">Manage your data backups and restore points</p>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <div class="flex items-center gap-3 mb-4">
          <Icon icon="mdi:backup-restore" class="text-2xl text-primary-500" />
          <div>
            <h3 class="font-medium">Create Backup</h3>
            <p class="text-sm text-neutral-600">Create a new backup of your data</p>
          </div>
        </div>
        <button class="w-full px-4 py-2 bg-primary-500 text-white rounded-lg flex items-center justify-center gap-2">
          <Icon icon="mdi:plus" />
          Create New Backup
        </button>
      </div>

      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <div class="flex items-center gap-3 mb-4">
          <Icon icon="mdi:upload" class="text-2xl text-primary-500" />
          <div>
            <h3 class="font-medium">Restore Backup</h3>
            <p class="text-sm text-neutral-600">Restore data from a backup file</p>
          </div>
        </div>
        <button class="w-full px-4 py-2 border border-neutral-200 rounded-lg flex items-center justify-center gap-2">
          <Icon icon="mdi:folder-open" />
          Select Backup File
        </button>
      </div>
    </div>

    <!-- Backup History -->
    <div class="bg-white rounded-xl border border-neutral-200">
      <div class="p-4 border-b border-neutral-200">
        <div class="flex items-center justify-between">
          <h3 class="font-medium">Backup History</h3>
          <div class="flex items-center gap-2">
            <select class="p-2 rounded-lg border border-neutral-200 text-sm">
              <option>All Types</option>
              <option>Manual</option>
              <option>Automatic</option>
            </select>
            <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
              <Icon icon="mdi:refresh" />
            </button>
          </div>
        </div>
      </div>

      <div class="divide-y divide-neutral-200">
        <div v-for="backup in backups" :key="backup.id" class="p-4">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-3">
              <Icon 
                :icon="backup.type === 'manual' ? 'mdi:content-save' : 'mdi:clock'" 
                class="text-xl text-primary-500" 
              />
              <div>
                <div class="flex items-center gap-2">
                  <h4 class="font-medium">{{ backup.name }}</h4>
                  <span 
                    class="px-2 py-1 text-xs rounded-full"
                    :class="backup.type === 'manual' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'"
                  >
                    {{ backup.type === 'manual' ? 'Manual' : 'Automatic' }}
                  </span>
                </div>
                <div class="flex items-center gap-4 text-sm text-neutral-600 mt-1">
                  <span>Size: {{ backup.size }}</span>
                  <span>Created: {{ backup.created }}</span>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:download" />
              </button>
              <button class="p-2 text-neutral-600 hover:text-red-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:delete" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Automatic Backup Settings -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Automatic Backup Settings</h3>
      <div class="space-y-6">
        <div class="flex items-center justify-between">
          <div>
            <h4 class="font-medium">Enable Automatic Backups</h4>
            <p class="text-sm text-neutral-600">Create backups automatically on a schedule</p>
          </div>
          <label class="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" class="sr-only peer" checked>
            <div class="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500"></div>
          </label>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Backup Frequency</label>
          <select class="w-full p-2 rounded-lg border border-neutral-200">
            <option>Daily</option>
            <option>Weekly</option>
            <option>Monthly</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Retention Period</label>
          <select class="w-full p-2 rounded-lg border border-neutral-200">
            <option>Keep last 5 backups</option>
            <option>Keep last 10 backups</option>
            <option>Keep all backups</option>
          </select>
        </div>

        <div>
          <label class="block text-sm font-medium mb-2">Storage Location</label>
          <select class="w-full p-2 rounded-lg border border-neutral-200">
            <option>Local Storage</option>
            <option>Cloud Storage</option>
          </select>
        </div>

        <button class="px-4 py-2 bg-primary-500 text-white rounded-lg">
          Save Settings
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({
  layout: 'settings'
})

const backups = [
  {
    id: 1,
    name: 'Manual Backup',
    type: 'manual',
    size: '256 MB',
    created: 'Just now'
  },
  {
    id: 2,
    name: 'Daily Backup',
    type: 'auto',
    size: '245 MB',
    created: '1 day ago'
  },
  {
    id: 3,
    name: 'Weekly Backup',
    type: 'auto',
    size: '238 MB',
    created: '1 week ago'
  },
  {
    id: 4,
    name: 'Manual Backup',
    type: 'manual',
    size: '230 MB',
    created: '2 weeks ago'
  }
]
</script>
