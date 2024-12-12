<template>
  <div>
    <h1 class="text-2xl font-semibold mb-6">Team Settings</h1>
    
    <div class="space-y-6">
      <!-- Team Information -->
      <div class="p-6 bg-white rounded-lg border">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-lg font-medium">Team Information</h2>
            <p class="text-neutral-600 mt-1">Manage your team details and members</p>
          </div>
          <button class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700">
            Save Changes
          </button>
        </div>

        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium mb-1">Team Name</label>
            <input
              v-model="team.name"
              type="text"
              class="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter team name"
            />
          </div>
          
          <div>
            <label class="block text-sm font-medium mb-1">Description</label>
            <textarea
              v-model="team.description"
              rows="3"
              class="w-full px-3 py-2 border rounded-lg resize-none"
              placeholder="Describe your team"
            />
          </div>
        </div>
      </div>

      <!-- Team Members -->
      <div class="p-6 bg-white rounded-lg border">
        <div class="flex justify-between items-start mb-6">
          <div>
            <h2 class="text-lg font-medium">Team Members</h2>
            <p class="text-neutral-600 mt-1">Manage team members and their roles</p>
          </div>
          <button class="px-4 py-2 border border-primary-600 text-primary-600 rounded-lg hover:bg-primary-50">
            Add Member
          </button>
        </div>

        <div class="space-y-4">
          <div v-for="member in team.members" :key="member.id" 
            class="flex items-center justify-between p-4 border rounded-lg">
            <div class="flex items-center gap-4">
              <img :src="member.avatar" :alt="member.name" class="w-10 h-10 rounded-full object-cover" />
              <div>
                <div class="font-medium">{{ member.name }}</div>
                <div class="text-sm text-neutral-600">{{ member.email }}</div>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <select 
                v-model="member.role"
                class="px-3 py-1.5 border rounded-lg text-sm"
              >
                <option value="admin">Admin</option>
                <option value="member">Member</option>
                <option value="viewer">Viewer</option>
              </select>
              <button class="text-error-600 hover:text-error-700">
                <Icon icon="mdi:trash" class="text-xl" />
              </button>
            </div>
          </div>
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

const team = reactive({
  name: 'My Team',
  description: '',
  members: [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'admin',
      avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'member',
      avatar: 'https://avatars.githubusercontent.com/u/2?v=4'
    },
    {
      id: 3,
      name: 'Bob Wilson',
      email: 'bob@example.com',
      role: 'viewer',
      avatar: 'https://avatars.githubusercontent.com/u/3?v=4'
    }
  ]
})
</script>
