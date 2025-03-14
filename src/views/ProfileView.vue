<template>
    <div class="min-h-screen">
        <div class="h-16"></div> <!-- TODO: Remove this when the header is placed -->
        <div class="w-full max-w-xl mx-auto py-6">
            <!-- Profile Details -->
            <ProfileDetails :email="authStore.email" :name="userStore.name" :image="userStore.image" />
        </div>
    </div>
</template>

<script setup lang="ts">
/** Components  */
import ProfileDetails from '@/components/profile/ProfileDetails.vue';
import { useAuthStore } from '@/stores/auth';

/** Stores */
import { useUserStore } from '@/stores/user';

const authStore = useAuthStore()
const userStore = useUserStore()
</script>
