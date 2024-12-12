import { ref, computed } from 'vue'

interface FilterOptions {
  searchFields: string[]
  categoryField?: string
  tags?: string
}

export const useFilter = <T extends Record<string, any>>(
  items: T[],
  options: FilterOptions
) => {
  const searchQuery = ref('')
  const selectedCategory = ref('top')

  const filteredItems = computed(() => {
    return items.filter(item => {
      // Search matching
      const matchesSearch = searchQuery.value === '' || options.searchFields.some(field => {
        const value = item[field]
        if (Array.isArray(value) && options.tags) {
          return value.some(tag => 
            tag.toLowerCase().includes(searchQuery.value.toLowerCase())
          )
        }
        return value.toLowerCase().includes(searchQuery.value.toLowerCase())
      })

      // Category matching
      const matchesCategory = !options.categoryField || 
        selectedCategory.value === 'top' || 
        item[options.categoryField] === selectedCategory.value

      return matchesSearch && matchesCategory
    })
  })

  return {
    searchQuery,
    selectedCategory,
    filteredItems
  }
}
