<template>
  <div class="layout-stack">
    <!-- Search input -->
    <div class="relative">
      <Icon 
        icon="mdi:magnify" 
        class="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-base"
      />
      <input 
        v-model="searchQuery"
        type="text"
        placeholder="Search settings..."
        class="form-input pl-10"
      />
    </div>

    <!-- Navigation -->
    <nav class="layout-stack">
      <div 
        v-for="section in filteredSections" 
        :key="section.id" 
        class="space-y-2"
      >
        <h3 class="text-small text-neutral-base px-3">
          {{ section.category }}
        </h3>
        
        <div class="space-y-1">
          <div v-for="item in section.items" :key="item.id">
            <!-- Main menu item -->
            <NuxtLink
              :to="`/settings/${item.id}`"
              class="nav-item"
              :class="$route.path === `/settings/${item.id}` ? 'bg-primary-base text-white' : ''"
            >
              <Icon :icon="item.icon" class="mr-3 text-lg" />
              <span>{{ item.name }}</span>
              <Icon 
                v-if="item.submenu"
                :icon="isSubmenuOpen[item.id] ? 'mdi:chevron-up' : 'mdi:chevron-down'"
                class="ml-auto text-lg clickable"
                @click.prevent="toggleSubmenu(item.id)"
              />
            </NuxtLink>

            <!-- Submenu -->
            <div 
              v-if="item.submenu"
              v-show="isSubmenuOpen[item.id]"
              class="ml-6 mt-1 space-y-1"
            >
              <NuxtLink
                v-for="subitem in item.submenu"
                :key="subitem.id"
                :to="`/settings/${subitem.id}`"
                class="nav-item"
                :class="$route.path === `/settings/${subitem.id}` ? 'bg-primary-base text-white' : ''"
              >
                <Icon :icon="subitem.icon" class="mr-3 text-lg" />
                <span>{{ subitem.name }}</span>
                <span 
                  v-if="subitem.status" 
                  class="badge-primary ml-auto"
                >
                  {{ subitem.status }}
                </span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, reactive, computed } from 'vue'

const searchQuery = ref('')
const isSubmenuOpen = reactive({})

const toggleSubmenu = (id: string) => {
  isSubmenuOpen[id] = !isSubmenuOpen[id]
}

const sections = [
  {
    id: 'general',
    category: 'General',
    items: [
      { id: 'profile', name: 'Profile', icon: 'mdi:account' },
      { id: 'appearance', name: 'Appearance', icon: 'mdi:palette' },
      { id: 'keyboard-shortcut', name: 'Keyboard Shortcuts', icon: 'mdi:keyboard' },
      { id: 'voice', name: 'Voice', icon: 'mdi:microphone' }
    ]
  },
  {
    id: 'integration',
    category: 'Integration',
    items: [
      { id: 'model', name: 'Models', icon: 'mdi:robot' },
      { id: 'services', name: 'Services', icon: 'mdi:apps' }
    ]
  },
  {
    id: 'developer',
    category: 'Developer',
    items: [
      { id: 'api-keys', name: 'API Keys', icon: 'mdi:key' },
      { id: 'api-access', name: 'API Access', icon: 'mdi:api' },
      { id: 'webhooks', name: 'Webhooks', icon: 'mdi:webhook' }
    ]
  },
  {
    id: 'system',
    category: 'System',
    items: [
      { id: 'security', name: 'Security', icon: 'mdi:shield' },
      { id: 'backup', name: 'Backup & Restore', icon: 'mdi:backup-restore' },
      { id: 'logs', name: 'System Logs', icon: 'mdi:text-box-search' }
    ]
  }
]

const filteredSections = computed(() => {
  if (!searchQuery.value) return sections

  return sections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      item.submenu?.some(subitem => subitem.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
    )
  })).filter(section => section.items.length > 0)
})
</script>