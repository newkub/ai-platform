<template>
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
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'

interface MenuItem {
  title: string
  path: string
  icon: string
}

const menuItems: MenuItem[] = [
  {
    title: 'Overview',
    path: '/images',
    icon: 'mdi:home'
  },
  {
    title: 'Gallery',
    path: '/images/gallery',
    icon: 'mdi:image-multiple'
  },
  {
    title: 'Upload',
    path: '/images/upload',
    icon: 'mdi:cloud-upload'
  }
]
</script>
