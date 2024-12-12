<template>
  <div class="space-y-6">
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-xl font-semibold">Webhooks</h2>
        <p class="text-neutral-600">Manage your webhook endpoints and events</p>
      </div>
      <button class="px-4 py-2 bg-primary-500 text-white rounded-lg flex items-center gap-2">
        <Icon icon="mdi:plus" />
        Add Webhook
      </button>
    </div>

    <!-- Webhook List -->
    <div class="bg-white rounded-xl border border-neutral-200">
      <div class="p-4 border-b border-neutral-200">
        <div class="flex items-center gap-4">
          <div class="relative flex-1">
            <Icon icon="mdi:magnify" class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search webhooks..."
              class="w-full pl-10 pr-4 py-2 rounded-lg border border-neutral-200"
            />
          </div>
          <select v-model="statusFilter" class="p-2 rounded-lg border border-neutral-200">
            <option value="">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="failed">Failed</option>
          </select>
        </div>
      </div>

      <div class="divide-y divide-neutral-200">
        <div v-for="webhook in webhooks" :key="webhook.id" class="p-4">
          <div class="flex items-start justify-between">
            <div class="flex-1">
              <div class="flex items-center gap-3 mb-2">
                <h3 class="font-medium">{{ webhook.name }}</h3>
                <span 
                  class="px-2 py-1 text-xs rounded-full"
                  :class="{
                    'bg-green-100 text-green-700': webhook.status === 'active',
                    'bg-neutral-100 text-neutral-700': webhook.status === 'inactive',
                    'bg-red-100 text-red-700': webhook.status === 'failed'
                  }"
                >
                  {{ webhook.status }}
                </span>
              </div>
              <p class="text-sm text-neutral-600 mb-2">{{ webhook.url }}</p>
              <div class="flex items-center gap-4 text-sm text-neutral-500">
                <span>Last triggered: {{ webhook.lastTriggered }}</span>
                <span>Success rate: {{ webhook.successRate }}%</span>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button class="p-2 text-neutral-600 hover:text-primary-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:pencil" />
              </button>
              <button class="p-2 text-neutral-600 hover:text-red-600 rounded-lg border border-neutral-200">
                <Icon icon="mdi:delete" />
              </button>
            </div>
          </div>

          <div class="mt-4">
            <h4 class="text-sm font-medium mb-2">Events</h4>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="event in webhook.events" 
                :key="event"
                class="px-2 py-1 text-xs bg-neutral-100 text-neutral-700 rounded-full"
              >
                {{ event }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Documentation -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Documentation</h3>
      <div class="prose prose-neutral">
        <p>Webhooks allow external services to be notified when certain events happen in your application.</p>
        <h4>Example Payload</h4>
        <pre class="bg-neutral-50 p-4 rounded-lg text-sm">
{
  "event": "document.created",
  "timestamp": "2024-01-20T12:00:00Z",
  "data": {
    "id": "doc_123",
    "name": "Example Document",
    "type": "pdf"
  }
}</pre>
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
const statusFilter = ref('')

const webhooks = [
  {
    id: 1,
    name: 'Document Processing',
    url: 'https://api.example.com/webhooks/documents',
    status: 'active',
    lastTriggered: '5 minutes ago',
    successRate: 98,
    events: ['document.created', 'document.updated', 'document.deleted']
  },
  {
    id: 2,
    name: 'User Notifications',
    url: 'https://api.example.com/webhooks/notifications',
    status: 'active',
    lastTriggered: '1 hour ago',
    successRate: 100,
    events: ['user.signup', 'user.login']
  },
  {
    id: 3,
    name: 'Payment Processing',
    url: 'https://api.example.com/webhooks/payments',
    status: 'failed',
    lastTriggered: '2 hours ago',
    successRate: 45,
    events: ['payment.success', 'payment.failed']
  },
  {
    id: 4,
    name: 'Backup Service',
    url: 'https://api.example.com/webhooks/backup',
    status: 'inactive',
    lastTriggered: '1 day ago',
    successRate: 0,
    events: ['backup.started', 'backup.completed', 'backup.failed']
  }
]
</script>
