<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold">System Logs</h2>
        <p class="text-neutral-600">View and analyze system activity logs</p>
      </div>
      <div class="flex items-center gap-2">
        <button class="px-4 py-2 border border-neutral-200 rounded-lg flex items-center gap-2">
          <Icon icon="mdi:download" />
          Export Logs
        </button>
        <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
          <Icon icon="mdi:refresh" />
        </button>
      </div>
    </div>

    <!-- Log Filters -->
    <div class="bg-white rounded-xl border border-neutral-200 p-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div class="relative">
          <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search logs..."
            class="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200"
          />
        </div>
        <select v-model="levelFilter" class="p-2 rounded-lg border border-neutral-200">
          <option value="">All Levels</option>
          <option value="error">Error</option>
          <option value="warning">Warning</option>
          <option value="info">Info</option>
          <option value="debug">Debug</option>
        </select>
        <select v-model="moduleFilter" class="p-2 rounded-lg border border-neutral-200">
          <option value="">All Modules</option>
          <option value="auth">Authentication</option>
          <option value="api">API</option>
          <option value="system">System</option>
          <option value="user">User</option>
        </select>
        <select v-model="timeFilter" class="p-2 rounded-lg border border-neutral-200">
          <option value="1h">Last Hour</option>
          <option value="24h">Last 24 Hours</option>
          <option value="7d">Last 7 Days</option>
          <option value="30d">Last 30 Days</option>
        </select>
      </div>
    </div>

    <!-- Log Viewer -->
    <div class="bg-white rounded-xl border border-neutral-200">
      <div class="divide-y divide-neutral-200">
        <div v-for="log in logs" :key="log.id" class="p-4 hover:bg-neutral-50">
          <div class="flex items-start gap-3">
            <Icon 
              :icon="getLogIcon(log.level)" 
              class="text-xl mt-1"
              :class="getLogIconColor(log.level)"
            />
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1">
                <span 
                  class="px-2 py-1 text-xs rounded-full"
                  :class="getLogLevelClass(log.level)"
                >
                  {{ log.level }}
                </span>
                <span class="text-sm text-neutral-500">{{ log.module }}</span>
                <span class="text-sm text-neutral-500">{{ log.timestamp }}</span>
              </div>
              <p class="text-sm text-neutral-700">{{ log.message }}</p>
              <div v-if="log.details" class="mt-2">
                <pre class="text-xs bg-neutral-50 p-2 rounded">{{ log.details }}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="p-4 border-t border-neutral-200">
        <div class="flex items-center justify-between">
          <div class="text-sm text-neutral-600">
            Showing 1-10 of 256 logs
          </div>
          <div class="flex items-center gap-2">
            <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
              <Icon icon="mdi:chevron-left" />
            </button>
            <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
              <Icon icon="mdi:chevron-right" />
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Log Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white rounded-xl border border-neutral-200 p-4">
        <div class="flex items-center gap-2 mb-2">
          <Icon icon="mdi:alert-circle" class="text-red-500" />
          <h3 class="font-medium">Errors</h3>
        </div>
        <div class="text-2xl font-semibold">23</div>
        <div class="text-sm text-neutral-600">
          <span class="text-red-600">↑ 5%</span> vs previous period
        </div>
      </div>

      <div class="bg-white rounded-xl border border-neutral-200 p-4">
        <div class="flex items-center gap-2 mb-2">
          <Icon icon="mdi:alert" class="text-yellow-500" />
          <h3 class="font-medium">Warnings</h3>
        </div>
        <div class="text-2xl font-semibold">45</div>
        <div class="text-sm text-neutral-600">
          <span class="text-green-600">↓ 12%</span> vs previous period
        </div>
      </div>

      <div class="bg-white rounded-xl border border-neutral-200 p-4">
        <div class="flex items-center gap-2 mb-2">
          <Icon icon="mdi:information" class="text-blue-500" />
          <h3 class="font-medium">Info Logs</h3>
        </div>
        <div class="text-2xl font-semibold">1,234</div>
        <div class="text-sm text-neutral-600">
          <span class="text-green-600">↑ 8%</span> vs previous period
        </div>
      </div>

      <div class="bg-white rounded-xl border border-neutral-200 p-4">
        <div class="flex items-center gap-2 mb-2">
          <Icon icon="mdi:bug" class="text-purple-500" />
          <h3 class="font-medium">Debug Logs</h3>
        </div>
        <div class="text-2xl font-semibold">567</div>
        <div class="text-sm text-neutral-600">
          <span class="text-neutral-600">No change</span> vs previous period
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
const levelFilter = ref('')
const moduleFilter = ref('')
const timeFilter = ref('24h')

const logs = [
  {
    id: 1,
    level: 'error',
    module: 'Authentication',
    timestamp: '2 minutes ago',
    message: 'Failed login attempt',
    details: 'IP: 192.168.1.1\nUser: john.doe\nReason: Invalid credentials'
  },
  {
    id: 2,
    level: 'warning',
    module: 'API',
    timestamp: '15 minutes ago',
    message: 'High API usage detected',
    details: 'Endpoint: /api/v1/documents\nRequests: 1000/min'
  },
  {
    id: 3,
    level: 'info',
    module: 'System',
    timestamp: '1 hour ago',
    message: 'System backup completed successfully'
  },
  {
    id: 4,
    level: 'debug',
    module: 'User',
    timestamp: '2 hours ago',
    message: 'User preferences updated'
  },
  {
    id: 5,
    level: 'error',
    module: 'API',
    timestamp: '3 hours ago',
    message: 'Database connection failed',
    details: 'Error: Connection timeout\nDatabase: users_db'
  }
]

function getLogIcon(level: string) {
  switch (level) {
    case 'error': return 'mdi:alert-circle'
    case 'warning': return 'mdi:alert'
    case 'info': return 'mdi:information'
    case 'debug': return 'mdi:bug'
    default: return 'mdi:information'
  }
}

function getLogIconColor(level: string) {
  switch (level) {
    case 'error': return 'text-red-500'
    case 'warning': return 'text-yellow-500'
    case 'info': return 'text-blue-500'
    case 'debug': return 'text-purple-500'
    default: return 'text-neutral-500'
  }
}

function getLogLevelClass(level: string) {
  switch (level) {
    case 'error': return 'bg-red-100 text-red-700'
    case 'warning': return 'bg-yellow-100 text-yellow-700'
    case 'info': return 'bg-blue-100 text-blue-700'
    case 'debug': return 'bg-purple-100 text-purple-700'
    default: return 'bg-neutral-100 text-neutral-700'
  }
}
</script>
