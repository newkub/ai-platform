<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-semibold">External Services</h2>
      <p class="text-neutral-600">Connect and manage your external service integrations</p>
    </div>

    <div class="grid grid-cols-1 gap-4">
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
              <button class="px-3 py-1.5 text-sm font-medium bg-green-100 text-green-700 rounded-lg">
                Connected
              </button>
            </div>
            <div class="flex items-center justify-between text-sm text-neutral-600">
              <span>Last synced: {{ service.lastSync }}</span>
              <NuxtLink :to="`/settings/integration/${service.id}`" class="text-primary-600 hover:underline">
                Manage
              </NuxtLink>
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
              <button class="px-3 py-1.5 text-sm font-medium bg-primary-500 text-white rounded-lg">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

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
  }
]
</script>
