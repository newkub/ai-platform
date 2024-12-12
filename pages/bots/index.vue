<template>
  <div>
    <h1 class="text-2xl font-semibold mb-2">AI Bots</h1>
    <p class="text-neutral-600 mb-6">Explore and create AI-powered bots for various tasks</p>
    
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'bots'
})
</script>
