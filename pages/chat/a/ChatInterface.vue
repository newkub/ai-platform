<template>
  <div class="flex h-screen">
    <!-- Sidebar -->
    <ChatSidebar
      v-model:selectedChat="selectedChat"
      :chats="chats"
      @create="createChat"
      @delete="deleteChat"
    />

    <!-- Main Content -->
    <main class="flex-1 flex flex-col bg-neutral-50">
      <!-- Header -->
      <header class="flex-none border-b border-neutral-base bg-white p-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-4">
            <Text2 size="lg" weight="medium">
              {{ selectedChat?.title || 'New Chat' }}
            </Text2>
            <ModelSelector v-model="selectedModel" />
          </div>
          
          <div class="flex items-center gap-2">
            <button 
              v-for="action in headerActions"
              :key="action.id"
              class="btn-ghost"
              @click="action.onClick"
            >
              <Icon :icon="action.icon" class="text-xl" />
            </button>
          </div>
        </div>
      </header>

      <!-- Messages -->
      <div class="flex-1 overflow-y-auto">
        <div class="max-w-4xl mx-auto">
          <ChatMessage
            v-for="message in selectedChat?.messages"
            :key="message.id"
            :message="message"
            :user="user"
            :bot="bot"
          />
        </div>
      </div>

      <!-- Input -->
      <ChatInput
        v-model="input"
        :disabled="loading"
        @submit="sendMessage"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  timestamp: number
}

interface Chat {
  id: string
  title: string
  messages: Message[]
  model: string
  createdAt: number
}

interface HeaderAction {
  id: string
  icon: string
  onClick: () => void
}

// Mock data
const user = {
  name: 'You',
  avatar: '/user-avatar.jpg'
}

const bot = {
  name: 'Assistant',
  avatar: '/bot-avatar.jpg'
}

// State
const selectedChat = ref<Chat | null>(null)
const selectedModel = ref('gpt-4')
const input = ref('')
const loading = ref(false)
const chats = ref<Chat[]>([])

// Actions
const headerActions = [
  {
    id: 'clear',
    icon: 'mdi:delete',
    onClick: () => {
      if (!selectedChat.value) return
      selectedChat.value.messages = []
    }
  },
  {
    id: 'share',
    icon: 'mdi:share',
    onClick: () => {
      // Implement share
    }
  },
  {
    id: 'export',
    icon: 'mdi:download',
    onClick: () => {
      // Implement export
    }
  }
]

const createChat = () => {
  const newChat: Chat = {
    id: Date.now().toString(),
    title: 'New Chat',
    messages: [],
    model: selectedModel.value,
    createdAt: Date.now()
  }
  chats.value.unshift(newChat)
  selectedChat.value = newChat
}

const deleteChat = (chatId: string) => {
  const index = chats.value.findIndex(chat => chat.id === chatId)
  if (index === -1) return
  
  chats.value.splice(index, 1)
  if (selectedChat.value?.id === chatId) {
    selectedChat.value = chats.value[0] || null
  }
}

const sendMessage = async () => {
  if (!selectedChat.value || !input.value.trim()) return
  
  const userMessage: Message = {
    id: Date.now().toString(),
    role: 'user',
    content: input.value,
    timestamp: Date.now()
  }
  
  selectedChat.value.messages.push(userMessage)
  input.value = ''
  loading.value = true
  
  try {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    const botMessage: Message = {
      id: Date.now().toString(),
      role: 'assistant',
      content: 'This is a mock response.',
      timestamp: Date.now()
    }
    
    selectedChat.value.messages.push(botMessage)
  } catch (error) {
    console.error('Failed to send message:', error)
  } finally {
    loading.value = false
  }
}
</script>