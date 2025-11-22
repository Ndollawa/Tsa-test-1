import '../css/app.css';
// Import Sonner styles
import 'vue-sonner/style.css'

import { createInertiaApp } from '@inertiajs/vue3';
import { VueQueryPlugin } from '@tanstack/vue-query';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import type { DefineComponent } from 'vue';

import { MotionPlugin } from '@vueuse/motion';
import { createApp, h } from 'vue';
import { install } from 'vue3-recaptcha-v2';
import { queryClient } from './app/plugins';
import ModalPlugin from './app/plugins/modal.plugin';
import { initializeTheme } from './composables/useAppearance';
import { Toaster } from 'vue-sonner';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';
const RECAPTCHA_SITE_KEY = import.meta.env.VITE_RECAPTCHA_SITE_KEY;

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    resolve: (name) =>
        resolvePageComponent(
            `./pages/${name}.vue`,
            import.meta.glob<DefineComponent>('./pages/**/*.vue'),
        ),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(VueQueryPlugin, { queryClient })
            .use(MotionPlugin)
            .use(install, {
                sitekey: RECAPTCHA_SITE_KEY,
                cnDomains: false, // Optional, If used in China, set this value true
            })
            .use(ModalPlugin)
            .component('Toaster', Toaster)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});

// This will set light / dark mode on page load...
initializeTheme();
