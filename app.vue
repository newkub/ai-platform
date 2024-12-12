<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRouter } from '#app'

const router = useRouter()

onMounted(() => {
  try {
    if (router.currentRoute.value.path === '/') {
      navigateTo('/chat')
    }
  } catch (error) {
    console.error(error)
  }
})
</script>