<template>
  <div class="max-w-3xl">
    <h1 class="text-2xl font-semibold mb-6">Keyboard Shortcuts</h1>
    
    <div class="space-y-6">
      <!-- Navigation -->
      <div class="p-6 bg-white rounded-lg border">
        <h2 class="text-lg font-medium mb-4">Navigation</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span>Open Command Palette</span>
            <div class="flex items-center gap-2">
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">⌘</kbd>
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">K</kbd>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span>Quick Switch Project</span>
            <div class="flex items-center gap-2">
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">⌘</kbd>
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">P</kbd>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span>Go to Settings</span>
            <div class="flex items-center gap-2">
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">⌘</kbd>
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">,</kbd>
            </div>
          </div>
        </div>
      </div>

      <!-- Editor -->
      <div class="p-6 bg-white rounded-lg border">
        <h2 class="text-lg font-medium mb-4">Editor</h2>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <span>Save Changes</span>
            <div class="flex items-center gap-2">
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">⌘</kbd>
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">S</kbd>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span>Find in File</span>
            <div class="flex items-center gap-2">
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">⌘</kbd>
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">F</kbd>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <span>Replace in File</span>
            <div class="flex items-center gap-2">
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">⌘</kbd>
              <kbd class="px-2 py-1 bg-neutral-100 rounded border">H</kbd>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'settings'
})
</script>
