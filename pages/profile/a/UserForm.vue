<template>
  <form @submit.prevent="handleSubmit" class="space-y-6">
    <!-- Name -->
    <div>
      <label class="label">Name</label>
      <input
        v-model="formData.name"
        type="text"
        class="input w-full"
        required
      />
    </div>

    <!-- Email -->
    <div>
      <label class="label">Email</label>
      <input
        v-model="formData.email"
        type="email"
        class="input w-full"
        required
      />
    </div>

    <!-- Role -->
    <div>
      <label class="label">Role</label>
      <select
        v-model="formData.role"
        class="select w-full"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
        <option value="moderator">Moderator</option>
      </select>
    </div>

    <!-- Status -->
    <div>
      <label class="label">Status</label>
      <div class="flex items-center gap-4">
        <label class="flex items-center gap-2">
          <input
            type="radio"
            v-model="formData.status"
            value="active"
            class="radio"
          />
          <span>Active</span>
        </label>
        <label class="flex items-center gap-2">
          <input
            type="radio"
            v-model="formData.status"
            value="inactive"
            class="radio"
          />
          <span>Inactive</span>
        </label>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex items-center justify-end gap-3">
      <button
        type="button"
        class="btn text-neutral-600 hover:bg-neutral-100"
        @click="$emit('cancel')"
      >
        Cancel
      </button>
      <button
        type="submit"
        class="btn bg-primary-500 text-white hover:bg-primary-600"
      >
        {{ user ? 'Update User' : 'Add User' }}
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
interface User {
  id: string
  name: string
  email: string
  status: 'active' | 'inactive'
  role: string
}

const props = defineProps<{
  user?: User
}>()

const emit = defineEmits<{
  submit: [user: Omit<User, 'id'>]
  cancel: []
}>()

const formData = ref({
  name: props.user?.name ?? '',
  email: props.user?.email ?? '',
  role: props.user?.role ?? 'user',
  status: props.user?.status ?? 'active'
})

const handleSubmit = () => {
  emit('submit', { ...formData.value })
}
</script>