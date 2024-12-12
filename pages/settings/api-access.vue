<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold">API Access</h2>
        <p class="text-neutral-600">Manage your API keys and access tokens</p>
      </div>
      <button class="px-4 py-2 bg-primary-500 text-white rounded-lg flex items-center gap-2">
        <Icon icon="mdi:plus" />
        Generate New Key
      </button>
    </div>

    <!-- API Keys -->
    <div class="bg-white rounded-xl border border-neutral-200">
      <div class="p-4 border-b border-neutral-200">
        <div class="flex items-center gap-4">
          <div class="relative flex-1">
            <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search API keys..."
              class="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200"
            />
          </div>
          <select v-model="typeFilter" class="p-2 rounded-lg border border-neutral-200">
            <option value="">All Types</option>
            <option value="read">Read Only</option>
            <option value="write">Read & Write</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      <div class="divide-y divide-neutral-200">
        <div v-for="key in apiKeys" :key="key.id" class="p-4">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="font-medium">{{ key.name }}</h3>
                <span 
                  class="px-2 py-1 text-xs rounded-full"
                  :class="{
                    'bg-blue-100 text-blue-700': key.type === 'read',
                    'bg-green-100 text-green-700': key.type === 'write',
                    'bg-purple-100 text-purple-700': key.type === 'admin'
                  }"
                >
                  {{ key.type }}
                </span>
              </div>
              <div class="flex items-center gap-2 mb-2">
                <code class="px-2 py-1 text-sm bg-neutral-100 rounded">{{ key.prefix }}...{{ key.suffix }}</code>
                <button class="text-primary-600 text-sm hover:underline">Show</button>
                <button class="text-primary-600 text-sm hover:underline">Copy</button>
              </div>
              <div class="flex items-center gap-4 text-sm text-neutral-500">
                <span>Created: {{ key.created }}</span>
                <span>Last used: {{ key.lastUsed }}</span>
                <span>Expires: {{ key.expires }}</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:refresh" />
              </button>
              <button class="p-2 text-neutral-600 hover:text-red-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:delete" />
              </button>
            </div>
          </div>

          <div class="mt-4">
            <h4 class="text-sm font-medium mb-2">Permissions</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="permission in key.permissions" 
                :key="permission"
                class="px-2 py-1 text-xs bg-neutral-100 text-neutral-700 rounded-full"
              >
                {{ permission }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Usage & Limits -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="bg-white rounded-xl border border-neutral-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium">API Calls</h3>
          <select class="text-sm border-none bg-transparent">
            <option>Last 24h</option>
            <option>Last 7d</option>
            <option>Last 30d</option>
          </select>
        </div>
        <div class="text-2xl font-semibold mb-2">234,567</div>
        <div class="text-sm text-neutral-600">
          <span class="text-green-600">↑ 12.3%</span> vs previous period
        </div>
      </div>

      <div class="bg-white rounded-xl border border-neutral-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium">Rate Limit</h3>
          <button class="text-sm text-primary-600 hover:underline">Upgrade</button>
        </div>
        <div class="text-2xl font-semibold mb-2">1,000/min</div>
        <div class="text-sm text-neutral-600">
          Current usage: 45%
        </div>
      </div>

      <div class="bg-white rounded-xl border border-neutral-200 p-4">
        <div class="flex items-center justify-between mb-4">
          <h3 class="font-medium">Active Keys</h3>
          <span class="text-sm text-neutral-600">of 10 max</span>
        </div>
        <div class="text-2xl font-semibold mb-2">4</div>
        <div class="text-sm text-neutral-600">
          Last key created 2 days ago
        </div>
      </div>
    </div>

    <!-- Documentation -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Quick Start</h3>
      <div class="prose prose-neutral">
        <p>Use your API key to authenticate requests. Here's an example using curl:</p>
        <pre class="bg-neutral-50 p-4 rounded-lg text-sm">
curl https://api.example.com/v1/documents \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"</pre>
        <p class="mt-4">
          <a href="#" class="text-primary-600 hover:underline">View full API documentation →</a>
        </p>
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
const typeFilter = ref('')

const apiKeys = [
  {
    id: 1,
    name: 'Production API Key',
    type: 'write',
    prefix: 'pk_live_',
    suffix: 'x4f2',
    created: '2024-01-01',
    lastUsed: '5 minutes ago',
    expires: 'Never',
    permissions: ['documents.read', 'documents.write', 'users.read']
  },
  {
    id: 2,
    name: 'Analytics Key',
    type: 'read',
    prefix: 'pk_read_',
    suffix: 'a9b3',
    created: '2024-01-15',
    lastUsed: '1 hour ago',
    expires: '2024-12-31',
    permissions: ['analytics.read', 'documents.read']
  },
  {
    id: 3,
    name: 'Admin Key',
    type: 'admin',
    prefix: 'pk_admin_',
    suffix: 'c7d8',
    created: '2023-12-01',
    lastUsed: '1 day ago',
    expires: 'Never',
    permissions: ['admin.*']
  },
  {
    id: 4,
    name: 'Test Key',
    type: 'write',
    prefix: 'pk_test_',
    suffix: 'e2f5',
    created: '2024-01-20',
    lastUsed: 'Never',
    expires: '2024-02-20',
    permissions: ['documents.read', 'documents.write']
  }
]
</script>
