<template>
    <Button
        @click="open"
        class="flex w-max items-center space-x-3 rounded-lg bg-primary px-8 py-2 text-primary-foreground"
    >
        <img src="/assets/images/users/ben.png" class="size-8 rounded-full" />
        <span class="font-medium">Connect with Ben</span>
    </Button>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { inject } from 'vue';

const modal = inject('modalState');
function open() {
    modal.registrationOpen = true;
}
</script>

<style scoped></style>
