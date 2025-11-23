<template>
    <section
        class="h-[60vh] min-[24rem]:h-[50vh] sm:h-[75vh] md:h-[60vh] lg:h-[70vh] xl:h-[85vh] 2xl:h-[100vh] min-[100rem]:h-[80vh] min-[120rem]:h-[70vh] bg-[url('/assets/images/hero-bg-face.png')] bg-[size:80%,450px] bg-[position:200px_top] md:bg-[url('/assets/images/hero-bg-face.png'),url('/assets/images/feather.png')] md:bg-[size:32%,460px] md:bg-[position:right_top,0px_280px] bg-no-repeat px-5 relative overflow-hidden"
    > <div className="sm:hidden absolute inset-0 top-0 bg-gradient-to-r from-transparent via-background/50 to-background/70" />
        <div class="mx-auto flex container flex-col w-full  h-full justify-center">
            <!-- LEFT CONTENT -->
            <div class="relative grid w-full grid-cols-1 py-auto md:pl-20">
            <div
                v-motion
                v-motion-visible="{ once: false }"
                :initial="{ opacity: 0, x: -120 }"
                :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 80,
                        duration: 0.4,
                        delay: 0,
                    },
                }"
            >
                <h1
                    class="mb-5 max-w-xl text-3xl md:text-5xl leading-tight font-normal tracking-widest text-primary"
                >
                    COLLAGEN IS <br />
                    THE FOUNTAIN <br />
                    OF YOUTH
                </h1>
            </div>
            <div
                v-motion
                v-motion-visible="{ once: false }"
                :initial="{ opacity: 0, x: -120 }"
                :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 60,
                        duration: 0.6,
                        delay: 0.12,
                    },
                }"
            >
                <p class="mb-20 text-base md:text-xl tracking-wide text-muted-foreground">
                    <VueTyping
                        :sentences="['WHAT’S YOUR INFLUENCE?']"
                        :minTypeSpeed="50"
                        :maxTypeSpeed="100"
                        :eraseSpeed="100"
                        :eraseDelay="1500"
                        :writeDelay="0"
                        caret=" |"
                        :loop="true"
                    />
                </p>
            </div>
            <!-- CONNECT BUTTON -->
            <div
                v-motion
                v-motion-visible="{ once: false }"
                :initial="{ opacity: 0, x: -120 }"
                :visible="{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 40,
                        duration: 0.8,
                        delay: 0.24,
                    },
                }"
            >
                <ConnectWithBenBtn />
            </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import VueTyping from '@dmncodes/vue-typing';
import ConnectWithBenBtn from './ConnectWithBenBtn.vue';
</script>

<style scoped>
.dmn-typing span.caret {
    color: inherit;
    animation: blink 1s infinite;
}

.dmn-typing span.typing {
    animation: none;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}
</style>
