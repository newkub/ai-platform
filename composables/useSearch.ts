import { ref, computed } from 'vue'

export function useSearch<T>(
  items: T[],
  searchPredicate: (item: T, query: string) => boolean
) {
  const searchQuery = ref('')
  
  const filteredItems = computed(() => {
    if (!searchQuery.value) return items
    return items.filter(item => searchPredicate(item, searchQuery.value.toLowerCase()))
  })

  return {
    searchQuery,
    filteredItems
  }
}
