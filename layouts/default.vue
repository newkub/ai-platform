<template>
  <div class="min-h-screen bg-background font-sans flex">
    <!-- Main Sidebar -->
    <aside class="w-20 flex-shrink-0 fixed h-screen top-16 left-0">
      <AppSidebar />
    </aside>

    <!-- Main Content -->
    <main class="flex-1 ml-20">
      <div class="mx-auto max-w-[1920px]">
        <div class="max-w-screen-2xl mx-auto p-6">
          <slot />
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/sidebar/AppSidebar.vue'
</script>