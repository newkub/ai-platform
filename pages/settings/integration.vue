<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-semibold">Integration</h2>
      <p class="text-neutral-600">Connect and manage external services</p>
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
                <p class="text-sm text-neutral-600">{{ service.description }}</p>
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
              Last synced: {{ service.lastSync }}
            </div>
            <button class="text-primary-600 hover:underline">View Details</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Available Services -->
    <div class="space-y-4">
      <h3 class="text-lg font-medium">Available Services</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="service in availableServices" :key="service.id"
          class="p-4 bg-white rounded-xl border border-neutral-200">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
              <Icon :icon="service.icon" class="text-2xl text-primary-500" />
              <div>
                <h3 class="font-medium">{{ service.name }}</h3>
                <p class="text-sm text-neutral-600">{{ service.description }}</p>
              </div>
            </div>
            <button class="px-4 py-2 bg-primary-500 text-white rounded-lg">
              Connect
            </button>
          </div>
          <div class="flex items-center gap-2 text-sm text-neutral-600">
            <Icon icon="mdi:shield-check" class="text-lg" />
            <span>Verified integration</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Custom Integration -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <div class="flex items-center justify-between mb-6">
        <div>
          <h3 class="text-lg font-medium">Custom Integration</h3>
          <p class="text-neutral-600">Build your own integration using our API</p>
        </div>
        <button class="px-4 py-2 border border-neutral-200 rounded-lg flex items-center gap-2">
          <Icon icon="mdi:book-open-page-variant" />
          View Documentation
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="p-4 rounded-lg border border-neutral-200">
          <div class="flex items-center gap-2 mb-2">
            <Icon icon="mdi:api" class="text-xl text-primary-500" />
            <h4 class="font-medium">REST API</h4>
          </div>
          <p class="text-sm text-neutral-600">
            Access our REST API endpoints for data integration
          </p>
        </div>
        <div class="p-4 rounded-lg border border-neutral-200">
          <div class="flex items-center gap-2 mb-2">
            <Icon icon="mdi:webhook" class="text-xl text-primary-500" />
            <h4 class="font-medium">Webhooks</h4>
          </div>
          <p class="text-sm text-neutral-600">
            Get real-time updates via webhook notifications
          </p>
        </div>
        <div class="p-4 rounded-lg border border-neutral-200">
          <div class="flex items-center gap-2 mb-2">
            <Icon icon="mdi:code-json" class="text-xl text-primary-500" />
            <h4 class="font-medium">SDK</h4>
          </div>
          <p class="text-sm text-neutral-600">
            Use our SDK for easier integration
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

definePageMeta({
  layout: 'settings'
})

const connectedServices = [
  {
    id: 'github',
    name: 'GitHub',
    icon: 'mdi:github',
    description: 'Access and manage GitHub repositories',
    lastSync: '5 minutes ago'
  },
  {
    id: 'slack',
    name: 'Slack',
    icon: 'mdi:slack',
    description: 'Send notifications and updates to Slack',
    lastSync: '1 hour ago'
  }
]

const availableServices = [
  {
    id: 'gitlab',
    name: 'GitLab',
    icon: 'mdi:gitlab',
    description: 'Access and manage GitLab repositories'
  },
  {
    id: 'bitbucket',
    name: 'Bitbucket',
    icon: 'mdi:bitbucket',
    description: 'Access and manage Bitbucket repositories'
  },
  {
    id: 'discord',
    name: 'Discord',
    icon: 'mdi:discord',
    description: 'Send notifications and updates to Discord'
  },
  {
    id: 'jira',
    name: 'Jira',
    icon: 'mdi:jira',
    description: 'Sync issues and tasks with Jira'
  }
]
</script>
