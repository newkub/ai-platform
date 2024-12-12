<template>
  <div class="flex h-screen bg-background">
    <!-- Main Sidebar -->
    <aside class="w-20 flex-shrink-0 fixed h-screen top-16 left-0">
      <AppSidebar />
    </aside>

    <!-- Main Content Container -->
    <main class="flex-1 ml-20">
      <div class="mx-auto max-w-[1920px]">
        <div class="max-w-screen-2xl mx-auto">
          <!-- Images Content Wrapper -->
          <div class="flex">
            <!-- Images Sidebar -->
            <aside class="w-64 flex-shrink-0">
              <div class="fixed w-64 h-[calc(100vh-4rem)] top-16 border-r border-neutral-200 overflow-y-auto">
                <div class="p-4">
                  <ImagesSidebar />
                </div>
              </div>
            </aside>

            <!-- Images Content -->
            <div class="flex-1 p-6">
              <slot>
                <NuxtPage />
              </slot>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppSidebar from '@/components/sidebar/AppSidebar.vue'
import ImagesSidebar from '@/components/sidebar/ImagesSidebar.vue'
</script>
