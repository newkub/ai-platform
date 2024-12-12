<template>
  <div class="relative">
    <!-- Trigger -->
    <button 
      ref="triggerRef"
      class="btn-ghost"
      @click="toggle"
    >
      <slot name="trigger">
        <div class="flex items-center gap-2">
          <span>{{ selectedItem?.label || 'เลือกตัวเลือก' }}</span>
          <Icon 
            :icon="isOpen ? 'mdi:chevron-up' : 'mdi:chevron-down'"
            class="text-lg transition-transform"
          />
        </div>
      </slot>
    </button>

    <!-- Menu -->
    <div
      v-if="isOpen"
      ref="menuRef"
      class="absolute z-50 mt-2 w-56 origin-top-right"
      :class="[
        position === 'left' ? 'left-0' : 'right-0'
      ]"
    >
      <div class="card p-1">
        <slot>
          <button
            v-for="item in items"
            :key="item.value"
            class="nav-item w-full text-left"
            :class="item.disabled ? 'opacity-50 cursor-not-allowed' : ''"
            @click="handleSelect(item)"
          >
            <Icon 
              v-if="item.icon" 
              :icon="item.icon" 
              class="mr-2 text-lg"
            />
            <span>{{ item.label }}</span>
            <Icon 
              v-if="item.selected"
              icon="mdi:check"
              class="ml-auto text-primary-base"
            />
          </button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

interface DropdownItem {
  label: string
  value: string | number
  icon?: string
  disabled?: boolean
  selected?: boolean
}

const props = withDefaults(defineProps<{
  items?: DropdownItem[]
  position?: 'left' | 'right'
}>(), {
  position: 'right'
})

const emit = defineEmits<{
  (e: 'select', item: DropdownItem): void
}>()

const isOpen = ref(false)
const triggerRef = ref<HTMLElement>()
const menuRef = ref<HTMLElement>()
const selectedItem = ref<DropdownItem | null>(null)

const toggle = () => {
  isOpen.value = !isOpen.value
}

const handleSelect = (item: DropdownItem) => {
  if (item.disabled) return
  selectedItem.value = item
  emit('select', item)
  isOpen.value = false
}

onClickOutside(triggerRef, () => {
  isOpen.value = false
}, {
  ignore: [menuRef]
})
</script>
