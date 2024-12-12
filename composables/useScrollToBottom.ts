import { ref, onMounted, nextTick } from 'vue'

export function useScrollToBottom() {
  const containerRef = ref<HTMLElement | null>(null)

  const scrollToBottom = async () => {
    await nextTick()
    if (containerRef.value) {
      containerRef.value.scrollTop = containerRef.value.scrollHeight
    }
  }

  onMounted(() => {
    scrollToBottom()
  })

  return {
    containerRef,
    scrollToBottom
  }
}
