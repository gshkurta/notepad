import { supabase } from '@/supabase'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('auth', () => {

    const loading = ref<boolean>(false)
    const emailSubmited = ref<boolean>(false)

    const email = ref<string>('')

    const handleLogin = async () => {
        try {
            loading.value = true
            const { error } = await supabase.auth.signInWithOtp({
                email: email.value
            })
            if (error) throw error
            emailSubmited.value = true
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message)
            }
        }
        finally {
            loading.value = false
        }
    }

    return { loading, emailSubmited, email, handleLogin }
})
