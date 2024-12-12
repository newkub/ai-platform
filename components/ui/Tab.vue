<template>
  <div class="layout-stack">
    <nav class="flex items-center gap-2 border-b border-neutral-base">
      <button 
        v-for="tab in tabs" 
        :key="tab.id"
        class="btn px-4 py-2 -mb-px border-b-2"
        :class="[
          isActiveTab(tab.id)
            ? 'border-primary-base text-primary-base'
            : 'border-transparent text-neutral-base hover:text-primary-hover hover:border-primary-hover'
        ]"
        @click="handleTabClick(tab)"
      >
        <div class="flex items-center gap-2">
          <Icon v-if="tab.icon" :icon="tab.icon" class="text-lg" />
          {{ tab.name }}
        </div>
      </button>
    </nav>
    
    <div class="mt-4">
      <component 
        v-for="tab in tabs"
        :key="tab.id"
        v-show="isActiveTab(tab.id)"
        :is="tab.component"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref, computed } from 'vue'

interface TabItem {
  id: string
  name: string
  icon?: string
  hash?: string
  component?: any
}

const props = defineProps<{
  tabs: TabItem[]
  defaultTab?: string
}>()

const emit = defineEmits<{
  (e: 'update:tab', id: string): void
}>()

const activeTab = ref(props.defaultTab || props.tabs[0]?.id || '')

const isActiveTab = (id: string) => activeTab.value === id

const handleTabClick = (tab: TabItem) => {
  activeTab.value = tab.id
  emit('update:tab', tab.id)
  if (tab.hash) {
    window.location.hash = tab.hash
  }
}
</script>
