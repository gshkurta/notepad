<template>
    <div class="flex flex-col items-center gap-4">
        <Avatar size="lg">
            <AvatarImage :src="props.image" alt="User's profile image" />
            <AvatarFallback>{{ getInitials }}</AvatarFallback>
        </Avatar>
        <div class="text-center space-y-0.5">
            <div class="font-semibold text-lg">{{ props.name }}</div>
            <div class="text-muted-foreground font-medium">{{ props.email }}</div>
        </div>
        <Button variant="secondary" class="rounded-full" @click="onEdit()">
            Edit
        </Button>
    </div>
</template>

<script setup lang="ts">
/** Shadcn Components */
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button';
import { computed } from 'vue';

interface Props {
    image?: string
    name?: string
    email: string
}

const props = withDefaults(defineProps<Props>(), {
    image: '',
    name: '',
    email: ''
})

const emits = defineEmits<{
    (e: 'onEdit'): void
}>()

const getInitials = computed(() => {
    if (props.name !== '') {
        return props.name.split(' ')[0].split('')[0] + props.name.split(' ')[1].split('')[0]
    }
    else {
        return props.email.split('')[0].toUpperCase()
    }
})

const onEdit = () => {
    emits('onEdit')
}
</script>
