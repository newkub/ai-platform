<template>
  <Dropdown
    with-search
    search-placeholder="Search models..."
    width="w-full"
    button-class="w-full p-3"
    @search="searchQuery = $event"
  >
    <template #trigger="{ isOpen }">
      <div class="flex items-center gap-2">
        <img 
          :src="selectedProvider?.avatar"
          class="w-5 h-5 rounded"
          :alt="selectedProvider?.name"
        />
        <span>{{ getModelName(modelValue) }}</span>
      </div>
      <Icon :icon="isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="text-lg" />
    </template>

    <div class="p-2">
      <div v-for="provider in filteredProviders" :key="provider.id" class="mb-2">
        <div class="flex items-center gap-2 p-1">
          <img
            :src="provider.avatar"
            class="w-5 h-5 rounded"
            :alt="provider.name"
          />
          <span class="text-sm font-medium">{{ provider.name }}</span>
        </div>

        <div class="space-y-1 ml-6">
          <button
            v-for="model in provider.models"
            :key="model.id"
            @click="selectModel(model.id)"
            class="w-full text-left px-3 py-1.5 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
            :class="modelValue === model.id ? 'bg-neutral-100' : ''"
          >
            {{ model.name }}
          </button>
        </div>
      </div>
    </div>
  </Dropdown>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import Dropdown from '../ui/Dropdown.vue'

const props = defineProps<{
  modelValue: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const {
  providers,
  searchQuery,
  filteredProviders,
  getModelName,
  getProviderByModel
} = useModelStore()

const selectedProvider = computed(() => 
  getProviderByModel(props.modelValue)
)

const selectModel = (modelId: string) => {
  emit('update:modelValue', modelId)
}
</script>

<style scoped>
.absolute {
  z-index: 50;
}
</style>