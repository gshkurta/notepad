<template>
    <div class="h-screen flex items-center justify-center">
        <!-- Success Message -->
        <div v-if="authStore.emailSubmited" class="w-full max-w-sm mx-auto space-y-4 text-center">
            <BadgeCheck class="text-emerald-500 mx-auto" :size="30" />
            <div class="space-y-1">
                <h1 class="text-xl font-bold">Email Submitted</h1>
                <p class="text-muted-foreground font-medium text-sm">Thank you! Please check your email (<b>{{ authStore.email }}</b>) for a quick login link to access your account.</p>
            </div>
        </div>
        <!-- Form -->
        <div v-else class="w-full max-w-sm mx-auto space-y-6">
            <div class="space-y-1">
                <h1 class="text-xl font-bold">Hello 👋</h1>
                <p class="text-muted-foreground font-medium text-sm">Please enter your email address below.<br />We will send you a quick login link to access your account.</p>
            </div>
            <AuthForm :loading="authStore.loading" @on-submit="authStore.handleLogin()" />
        </div>
    </div>
</template>

<script setup lang="ts">
/** Store */
import { useAuthStore } from '@/stores/auth';

/** Components */
import AuthForm from '@/components/auth/AuthForm.vue'
import { BadgeCheck } from 'lucide-vue-next';

const authStore = useAuthStore()
</script>
