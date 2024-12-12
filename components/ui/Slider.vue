<template>
  <div class="space-y-2">
    <div class="flex items-center justify-between">
      <label v-if="label" class="form-label">
        {{ label }}
      </label>
      <span class="text-small text-neutral-base">
        {{ modelValue }}{{ unit }}
      </span>
    </div>

    <div class="relative">
      <div class="h-2 bg-neutral-base/20 rounded-full">
        <div
          class="absolute h-2 bg-primary-base rounded-full"
          :style="{ width: percentage + '%' }"
        />
      </div>
      
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="modelValue"
        class="absolute inset-0 w-full h-2 opacity-0 cursor-pointer"
        @input="$emit('update:modelValue', Number($event.target.value))"
      />
      
      <div
        class="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg border-2 border-primary-base"
        :style="{ left: percentage + '%' }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  modelValue: number
  min?: number
  max?: number
  step?: number
  label?: string
  unit?: string
}>(), {
  min: 0,
  max: 100,
  step: 1,
  unit: ''
})

const percentage = computed(() => {
  return ((props.modelValue - props.min) / (props.max - props.min)) * 100
})

defineEmits<{
  'update:modelValue': [value: number]
}>()
</script>

<style scoped>
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 16px;
  height: 16px;
  background: #fff;
  border: 2px solid #4F46E5;
  border-radius: 50%;
  cursor: pointer;
}

input[type="range"]::-moz-range-thumb {
  width: 16px;
  height: 16px;
  background: #fff;
  border: 2px solid #4F46E5;
  border-radius: 50%;
  cursor: pointer;
}
</style>