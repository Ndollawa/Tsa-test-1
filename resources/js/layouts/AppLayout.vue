<script setup lang="ts">
import { Button } from '@/components/ui/button';
import AppLayout from '@/layouts/app/AppSidebarLayout.vue';
import type { BreadcrumbItemType } from '@/types';
import { toast, Toaster } from 'vue-sonner';

interface Props {
    breadcrumbs?: BreadcrumbItemType[];
}

withDefaults(defineProps<Props>(), {
    breadcrumbs: () => [],
});
toast('hello')
</script>

<template>
    <AppLayout :breadcrumbs="breadcrumbs">
        <Toaster
            rich-colors
            close-button
            position="top-right"
            :duration="6000"
            :toast-options="{
                style: {
                    'z-index': 99999,
                },
            }"
        />
        
        <slot />
    </AppLayout>
</template>
