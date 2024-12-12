<template>
  <div>
    <h1 class="text-2xl font-semibold mb-2">Knowledge Base</h1>
    <p class="text-neutral-600 mb-6">Manage and organize your knowledge resources</p>
    
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { navigateTo } from '#app'

definePageMeta({
  layout: 'knowledge'
})

onMounted(() => {
  if (useRoute().path === '/knowledge') {
    navigateTo('/knowledge/my-knowledge')
  }
})
</script>
