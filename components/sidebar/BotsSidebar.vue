<template>
  <aside class="w-64 h-screen border-r border-neutral-base flex flex-col">
    <!-- Header -->
    <div class="flex-none p-4 border-b border-neutral-base">
      <button class="btn-primary w-full">
        <Icon icon="mdi:plus" class="mr-2" />
        Create Bot
      </button>
    </div>

    <!-- Navigation -->
    <nav class="flex-1 overflow-y-auto p-4">
      <nav class="space-y-2">
        <NuxtLink
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="nav-item"
        >
          <Icon :icon="item.icon" class="text-xl text-primary-500" />
          {{ item.title }}
        </NuxtLink>
      </nav>

      <!-- My Bots -->
      <div>
        <Text2 size="sm" class="px-3 mb-2">My Bots</Text2>
        <div class="space-y-1">
          <NuxtLink
            v-for="bot in myBots"
            :key="bot.id"
            :to="`/bots/${bot.id}`"
            class="nav-item"
            :class="$route.params.id === bot.id ? 'bg-primary-base text-white' : ''"
          >
            <Icon :icon="bot.icon" class="text-xl" />
            <span class="ml-3">{{ bot.name }}</span>
            <Badge
              v-if="bot.status"
              :variant="bot.status"
              class="ml-auto"
            >
              {{ bot.statusText }}
            </Badge>
          </NuxtLink>
        </div>
      </div>

      <!-- Categories -->
      <div>
        <Text2 size="sm" class="px-3 mb-2">Categories</Text2>
        <div class="space-y-1">
          <NuxtLink
            v-for="category in categories"
            :key="category.id"
            :to="`/bots/category/${category.id}`"
            class="nav-item"
            :class="$route.params.category === category.id ? 'bg-primary-base text-white' : ''"
          >
            <Icon :icon="category.icon" class="text-xl" />
            <span class="ml-3">{{ category.name }}</span>
            <span class="ml-auto text-sm text-neutral-base">
              {{ category.count }}
            </span>
          </NuxtLink>
        </div>
      </div>
    </nav>

    <!-- Footer -->
    <div class="flex-none p-4 border-t border-neutral-base">
      <button class="btn-ghost w-full">
        <Icon icon="mdi:cog" class="mr-2" />
        Bot Settings
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface Bot {
  id: string
  name: string
  icon: string
  status?: 'online' | 'offline' | 'error'
  statusText?: string
}

interface Category {
  id: string
  name: string
  icon: string
  count: number
}

interface MenuItem {
  title: string
  path: string
  icon: string
}

// Mock data
const myBots: Bot[] = [
  {
    id: '1',
    name: 'Image Bot',
    icon: 'mdi:image',
    status: 'online',
    statusText: 'Online'
  },
  {
    id: '2',
    name: 'Code Bot',
    icon: 'mdi:code-braces',
    status: 'offline',
    statusText: 'Offline'
  }
]

const categories: Category[] = [
  {
    id: 'productivity',
    name: 'Productivity',
    icon: 'mdi:lightning-bolt',
    count: 12
  },
  {
    id: 'creative',
    name: 'Creative',
    icon: 'mdi:palette',
    count: 8
  },
  {
    id: 'development',
    name: 'Development',
    icon: 'mdi:code-tags',
    count: 15
  }
]

const menuItems: MenuItem[] = [
  {
    title: 'Overview',
    path: '/bots',
    icon: 'mdi:home'
  },
  {
    title: 'Bot List',
    path: '/bots/list',
    icon: 'mdi:robot'
  },
  {
    title: 'Create Bot',
    path: '/bots/create',
    icon: 'mdi:plus'
  }
]
</script>
