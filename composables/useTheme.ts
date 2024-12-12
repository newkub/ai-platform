import { useDark, useToggle } from '@vueuse/core'

export const useTheme = () => {
  const isDark = useDark({
    selector: ':root',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: '',
  })

  const toggleTheme = useToggle(isDark)

  return {
    isDark,
    toggleTheme,
  }
}