import { reactive } from 'vue';

const state = reactive({
    registrationOpen: false,
});

export function useModalState() {
    return state;
}

export default {
    install(app: any) {
        app.provide('modalState', state);
        app.config.globalProperties.$modal = {
            openRegistration: () => (state.registrationOpen = true),
            closeRegistration: () => (state.registrationOpen = false),
        };
    },
};
