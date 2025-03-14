import { supabase } from '@/supabase'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { onMounted } from 'vue'

export const useUserStore = defineStore('user', () => {

    const session = ref()

    const loading = ref<boolean>(false)

    const image = ref<string>('')
    const name = ref<string>('')
    const email = ref<string>('')

    onMounted(() => {
        supabase.auth.getSession().then(({ data }) => {
            session.value = data.session
        })

        supabase.auth.onAuthStateChange((_, _session) => {
            session.value = _session
        })
    })

    const getProfile = async () => {
        try {
            loading.value = true
            const { user } = session.value
            const { data, error, status } = await supabase
                .from('profiles')
                .select(`username, website, avatar_url`)
                .eq('id', user.id)
                .single()

            if (error && status !== 406) throw error

            if (data) {
                image.value = data.avatar_url
                name.value = data.username
            }
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

    const updateProfile = async () => {
        try {
            loading.value = true
            const { user } = session.value

            const updates = {
                id: user.id,
                username: name.value,
                avatar_url: image.value,
                updated_at: new Date()
            }

            const { error } = await supabase.from('profiles').upsert(updates)

            if (error) throw error
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

    return { loading, image, name, email, getProfile, updateProfile }
})
