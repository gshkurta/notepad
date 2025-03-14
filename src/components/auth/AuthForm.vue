<template>
    <form @submit="onSubmit" class="space-y-4">
        <FormField v-slot="{ componentField }" name="email">
            <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input v-model="authStore.email" type="text" placeholder="john@doe.com" v-bind="componentField" />
                </FormControl>
                <FormMessage />
            </FormItem>
        </FormField>
        <Button type="submit" class="w-full rounded-md h-10">
            <LoaderCircle v-if="props.loading" class="w-4 h-4 mr-2 animate-spin" />
            {{ props.loading ? 'Sending...' : 'Send email' }}
        </Button>
    </form>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

/** Stores */
import { useAuthStore } from '@/stores/auth'

/** Shandcn Components */
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoaderCircle } from 'lucide-vue-next'

interface Props {
    loading: boolean
}

const props = withDefaults(defineProps<Props>(), {
    loading: false
})

const emits = defineEmits<{
    (e: 'onSubmit'): void
}>()

const authStore = useAuthStore()

const formSchema = toTypedSchema(z.object({
    email: z.string().email()
}))

const form = useForm({
    validationSchema: formSchema
})

const onSubmit = form.handleSubmit(async (values) => {
    console.log('Form submitted: ', values.email)
    emits('onSubmit')
})
</script>
