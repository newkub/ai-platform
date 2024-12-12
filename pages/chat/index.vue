<template>
   <div class="container mx-auto px-4 py-4 h-[calc(100vh-2rem)] flex flex-col">
      <Text2
        title="Chat Studio"
        description="Chat with AI models and explore different conversation styles"
        class="mb-4"
      />
      <div class="flex flex-row lg:flex-row gap-4 mt-4 flex-1 min-h-0">
        <ChatInterface class="basis-2/3" />
        <ChatSidebar class="basis-1/3" />
      </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Text2 from '~/components/ui/Text2.vue'
import ChatInterface from '~~/pages/chat/a/ChatInterface.vue'
import ChatSidebar from '~/components/chat/ChatSidebar.vue'

</script>