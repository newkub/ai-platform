<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-xl font-semibold">Security</h2>
      <p class="text-neutral-600">Manage your account security settings</p>
    </div>

    <!-- Password -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Password</h3>
      <div class="space-y-4 max-w-xl">
        <div>
          <label class="block text-sm font-medium mb-2">Current Password</label>
          <input 
            type="password" 
            class="w-full p-2 rounded-lg border border-neutral-200"
            placeholder="Enter current password"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">New Password</label>
          <input 
            type="password" 
            class="w-full p-2 rounded-lg border border-neutral-200"
            placeholder="Enter new password"
          />
        </div>
        <div>
          <label class="block text-sm font-medium mb-2">Confirm New Password</label>
          <input 
            type="password" 
            class="w-full p-2 rounded-lg border border-neutral-200"
            placeholder="Confirm new password"
          />
        </div>
        <button class="px-4 py-2 bg-primary-500 text-white rounded-lg">
          Update Password
        </button>
      </div>
    </div>

    <!-- Two-Factor Authentication -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <div class="flex items-center justify-between mb-4">
        <div>
          <h3 class="text-lg font-medium">Two-Factor Authentication</h3>
          <p class="text-neutral-600">Add an extra layer of security to your account</p>
        </div>
        <button class="px-4 py-2 bg-primary-500 text-white rounded-lg">
          Enable 2FA
        </button>
      </div>
      <div class="p-4 bg-neutral-50 rounded-lg">
        <div class="flex items-center gap-3">
          <Icon icon="mdi:shield-check" class="text-xl text-primary-500" />
          <p class="text-sm text-neutral-600">
            Two-factor authentication is currently disabled. Enable it to add an extra layer of security.
          </p>
        </div>
      </div>
    </div>

    <!-- Active Sessions -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Active Sessions</h3>
      <div class="space-y-4">
        <div v-for="session in sessions" :key="session.id"
          class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
          <div class="flex items-center gap-3">
            <Icon :icon="session.deviceIcon" class="text-xl text-primary-500" />
            <div>
              <h4 class="font-medium">{{ session.device }}</h4>
              <p class="text-sm text-neutral-600">{{ session.location }} · {{ session.lastActive }}</p>
            </div>
          </div>
          <button 
            class="px-3 py-1.5 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            v-if="!session.current"
          >
            End Session
          </button>
          <span 
            class="px-2 py-1 text-xs bg-green-100 text-green-700 rounded-full"
            v-else
          >
            Current Session
          </span>
        </div>
      </div>
    </div>

    <!-- Login History -->
    <div class="bg-white rounded-xl border border-neutral-200 p-6">
      <h3 class="text-lg font-medium mb-4">Login History</h3>
      <div class="space-y-4">
        <div v-for="login in loginHistory" :key="login.id"
          class="flex items-center justify-between p-4 border border-neutral-200 rounded-lg">
          <div class="flex items-center gap-3">
            <Icon 
              :icon="login.success ? 'mdi:check-circle' : 'mdi:alert-circle'" 
              class="text-xl"
              :class="login.success ? 'text-green-500' : 'text-red-500'"
            />
            <div>
              <div class="flex items-center gap-2">
                <h4 class="font-medium">{{ login.location }}</h4>
                <span 
                  class="px-2 py-1 text-xs rounded-full"
                  :class="login.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'"
                >
                  {{ login.success ? 'Success' : 'Failed' }}
                </span>
              </div>
              <p class="text-sm text-neutral-600">
                {{ login.device }} · {{ login.timestamp }}
              </p>
            </div>
          </div>
          <Icon :icon="login.deviceIcon" class="text-xl text-neutral-500" />
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

const sessions = [
  {
    id: 1,
    device: 'Windows PC - Chrome',
    deviceIcon: 'mdi:laptop',
    location: 'Bangkok, Thailand',
    lastActive: 'Currently active',
    current: true
  },
  {
    id: 2,
    device: 'iPhone 13 - Safari',
    deviceIcon: 'mdi:cellphone',
    location: 'Bangkok, Thailand',
    lastActive: '2 hours ago',
    current: false
  },
  {
    id: 3,
    device: 'iPad Pro - Safari',
    deviceIcon: 'mdi:tablet',
    location: 'Bangkok, Thailand',
    lastActive: '1 day ago',
    current: false
  }
]

const loginHistory = [
  {
    id: 1,
    location: 'Bangkok, Thailand',
    device: 'Windows PC - Chrome',
    deviceIcon: 'mdi:laptop',
    timestamp: 'Just now',
    success: true
  },
  {
    id: 2,
    location: 'Bangkok, Thailand',
    device: 'iPhone 13 - Safari',
    deviceIcon: 'mdi:cellphone',
    timestamp: '2 hours ago',
    success: true
  },
  {
    id: 3,
    location: 'Unknown Location',
    device: 'Unknown Device',
    deviceIcon: 'mdi:help-circle',
    timestamp: '1 day ago',
    success: false
  }
]
</script>
