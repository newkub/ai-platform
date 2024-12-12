import { defineConfig, presetUno, presetIcons,presetWebFonts,presetAttributify  } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify({  }),
    presetIcons({
      scale: 1.2,
      cdn: 'https://esm.sh/',
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',

      },
      collections: {
        custom: {
          circle: '<svg viewBox="0 0 120 120"><circle cx="60" cy="60" r="50"></circle></svg>',
        },
      }
    }),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'IBM Plex Sans Thai',
        mono: 'Fira Code',
        handwriting: 'Caveat'
      }
    })
  ],
  theme: {
    colors: {
      primary: {
        base: 'var(--primary-base)',
        hover: 'var(--primary-hover)',
        active: 'var(--primary-active)'
      },
      secondary: {
        base: 'var(--secondary-base)',
        hover: 'var(--secondary-hover)',
        active: 'var(--secondary-active)'
      },
    }
  },
  shortcuts: {
    // Layout
    'layout-container': 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    'layout-section': 'py-12 sm:py-16',
    'layout-grid': 'grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3',
    'layout-stack': 'flex flex-col space-y-4',
    'layout-row': 'flex flex-row space-x-4',

    // Typography
    'text-h1': 'text-4xl font-bold tracking-tight',
    'text-h2': 'text-3xl font-bold tracking-tight',
    'text-h3': 'text-2xl font-bold tracking-tight',
    'text-h4': 'text-xl font-bold tracking-tight',
    'text-body': 'text-base leading-relaxed',
    'text-small': 'text-sm leading-relaxed',
    'text-tiny': 'text-xs leading-relaxed',

    // Buttons
    'btn': 'inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
    'btn-primary': 'btn bg-primary-base hover:bg-primary-hover active:bg-primary-active text-white focus:ring-primary-base',
    'btn-secondary': 'btn bg-secondary-base hover:bg-secondary-hover active:bg-secondary-active text-white focus:ring-secondary-base',
    'btn-outline': 'btn border-2 border-neutral-base hover:bg-neutral-hover focus:ring-neutral-base',
    'btn-ghost': 'btn hover:bg-neutral-hover focus:ring-neutral-base',
    'btn-icon': 'btn p-2 rounded-full',
    'btn-lg': 'px-6 py-3 text-base',
    'btn-sm': 'px-3 py-1.5 text-xs',

    // Forms
    'form-label': 'block text-sm font-medium mb-1',
    'form-input': 'w-full rounded-lg border border-neutral-base px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-base focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed',
    'form-select': 'form-input appearance-none bg-no-repeat bg-right pr-10',
    'form-textarea': 'form-input min-h-[100px]',
    'form-checkbox': 'rounded border-neutral-base text-primary-base focus:ring-primary-base transition-colors',
    'form-radio': 'form-checkbox rounded-full',
    'form-group': 'space-y-2',
    'form-error': 'text-red-500 text-sm mt-1',

    // Cards
    'card': 'bg-white rounded-xl shadow-sm border border-neutral-base overflow-hidden',
    'card-hover': 'card hover:shadow-md transition-shadow',
    'card-header': 'px-6 py-4 border-b border-neutral-base',
    'card-body': 'p-6',
    'card-footer': 'px-6 py-4 border-t border-neutral-base',

    // Navigation
    'nav-container': 'flex items-center space-x-4',
    'nav-link': 'flex items-center text-neutral-base hover:text-neutral-hover transition-colors',
    'nav-item': 'flex items-center px-3 py-2 text-sm rounded-lg transition-colors hover:bg-neutral-hover active:bg-neutral-active',
    'nav-button': 'w-14 h-14 rounded-xl flex flex-col items-center justify-center gap-1 transition-colors hover:bg-neutral-hover active:bg-neutral-active',

    // Lists
    'list-none': 'list-none p-0',
    'list-disc': 'list-disc pl-5',
    'list-decimal': 'list-decimal pl-5',
    'list-item': 'mb-2',

    // Tables
    'table': 'w-full border-collapse',
    'table-header': 'bg-neutral-base text-left',
    'table-cell': 'px-4 py-2 border-b border-neutral-base',
    'table-row-hover': 'hover:bg-neutral-hover transition-colors',

    // Badges
    'badge': 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
    'badge-primary': 'badge bg-primary-base text-white',
    'badge-secondary': 'badge bg-secondary-base text-white',
    'badge-outline': 'badge border border-neutral-base',

    // Alerts
    'alert': 'p-4 rounded-lg border',
    'alert-info': 'alert border-primary-base bg-primary-base/10',
    'alert-success': 'alert border-green-500 bg-green-500/10',
    'alert-warning': 'alert border-yellow-500 bg-yellow-500/10',
    'alert-error': 'alert border-red-500 bg-red-500/10',

    // Overlays
    'overlay': 'fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm',
    'modal': 'fixed inset-0 flex items-center justify-center p-4',
    'modal-content': 'bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-auto',

    // Utils
    'clickable': 'cursor-pointer select-none',
    'truncate-1': 'truncate',
    'truncate-2': 'line-clamp-2',
    'truncate-3': 'line-clamp-3',
    'aspect-square': 'aspect-ratio-1/1',
    'aspect-video': 'aspect-ratio-16/9',
    'skeleton': 'animate-pulse bg-neutral-hover rounded',
    'btn-nav': 'flex flex-col items-center justify-center w-14 h-14 rounded-lg hover:bg-neutral-100 transition-colors'
  }
})
