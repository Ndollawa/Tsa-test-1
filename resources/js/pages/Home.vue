<script setup lang="ts">
import LandingFooter from '@/components/landing-pages/common/LandingFooter.vue';
import LandingNavbar from '@/components/landing-pages/common/LandingNavbar.vue';
import ConnectWithBenBtn from '@/components/landing-pages/home/ConnectWithBenBtn.vue';
import HeroSection from '@/components/landing-pages/home/HeroSection.vue';
import InfluencerCardSection from '@/components/landing-pages/home/InfluencerCardSection.vue';
import ProductFeatureSection from '@/components/landing-pages/home/ProductFeatureSection.vue';
import RegistrationModalSection from '@/components/landing-pages/home/RegistrationModalSection.vue';
import { Head } from '@inertiajs/vue3';
import { inject } from 'vue';
import { Toaster } from 'vue-sonner';

withDefaults(
    defineProps<{
        canRegister: boolean;
    }>(),
    {
        canRegister: true,
    },
);
const modal = inject('modalState');
</script>

<template>
    <Head title="Welcome">
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
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
    <div class="font-gotham min-h-screen w-full bg-background text-foreground">
        <LandingNavbar />
        <main class="grid grid-cols-1">
            <!-- MAIN HERO -->
            <HeroSection />
            <section class="min-h-[50vh] w-full py-10 px-5 sm:py-20">
                <div
                    class="mx-auto grid container grid-cols-1 place-items-center space-y-5 md:space-y-10"
                >
                    <!-- HEADING -->
                    <div
                        v-motion
                        v-motion-visible="{ once: false }"
                        :initial="{ opacity: 0, y: 40 }"
                        :visible="{
                            opacity: 1,
                            y: 0,
                            transition: { type: 'spring', stiffness: 70 },
                        }"
                    >
                        <h2 class="text-2xl md:text-4xl text-primary uppercase">
                            Congratulations
                        </h2>
                    </div>

                    <!-- PARAGRAPH 1 -->
                    <div
                        v-motion
                        v-motion-visible="{ once: false }"
                        :initial="{ opacity: 0, x: -150 }"
                        :visible="{
                            opacity: 1,
                            x: 0,
                            transition: { type: 'spring', stiffness: 70 },
                        }"
                        class=" w-full md:w-6/12 text-center"
                    >
                        <p class="text-sm md:text-xl text-center md:w-[85%] mx-auto text-muted-foreground">
                            You are among the very first to learn of NXM,
                            a superior luxury & lifestyle brand developed by some
                            of the greatest minds in the industry.
                        </p>
                    </div>

                    <!-- PARAGRAPH 2 -->
                    <div
                        v-motion
                        v-motion-visible="{ once: false }"
                        :initial="{ opacity: 0, x: 150 }"
                        :visible="{
                            opacity: 1,
                            x: 0,
                            transition: { type: 'spring', stiffness: 70 },
                        }"
                        class="w-full md:w-6/12 text-center"
                    >
                        <p class="text-sm md:text-xl text-center md:w-[85%] mx-auto text-muted-foreground">
                            Launching with a perfect trio of proprietary,
                            results-driven beauty products, NXM is primed to
                            cause major disruption in the direct-selling
                            industry with its hybrid, influencer marketing
                            platform and rewards system.
                        </p>
                    </div>
                </div>
            </section>

            <section class="bg-secondary p-10">
                <ProductFeatureSection
                    title="COLLAGEN PEPTIDE EXFOLIATING GEL"
                    subtitle=""
                    description="
    Instant results with visible remove of dead cells.
Clinically proven to activate the skin repair process.
Smooths wrinkles, improves tone & elasticity.
  "
                    image="/assets/images/products/a.png"
                    :reverse="true"
                />

                <ProductFeatureSection
                    title="BELLA COLLAGEN ELIXIR"
                    subtitle="Beauty from the Inside Out"
                    description="
   Helps the body product more collagen.
Backed by double blind clinical studies.
Healthier skin, hair, nails, joints & more.
  "
                    image="/assets/images/products/d.png"
                    :reverse="false"
                />
                <ProductFeatureSection
                    title="HYDRATING LIP PLUMPING OIL"
                    subtitle=""
                    description="
    Ultimate softness, hydration, & comfort.
A smooth and naturally-plump look.
Shine of a gloss with the benefits of a balm.
  "
                    image="/assets/images/products/b.png"
                    :reverse="true"
                />
            </section>
            <InfluencerCardSection
                :cards="[
                    {
                        name: 'Grace Perez',
                        username: 'graceperez',
                        image: '/assets/images/influencers/influencer-1.png',
                    },
                    {
                        name: 'Bella Marie',
                        username: 'bellamarie',
                        image: '/assets/images/influencers/influencer-2.png',
                    },
                    {
                        name: 'Gigi Haddid',
                        username: 'gigihadid',
                        image: '/assets/images/influencers/influencer-3.png',
                    },
                ]"
            />
            <section
                class="grid h-[30vh] grid-cols-1 place-items-center bg-secondary px-5"
            >
                <div
                    v-motion
                    v-motion-visible="{ once: false }"
                    :initial="{ opacity: 0, y: 40 }"
                    :visible="{
                        opacity: 1,
                        y: 0,
                        transition: {
                            type: 'spring',
                            stiffness: 70,
                            delay: 0.15,
                        },
                    }"
                    class="container mx-auto flex md:flex-row flex-col items-center justify-center gap-10"
                >
                    <h1
                        class="md:mr-10 md:max-w-md text-2xl md:text-4xl leading-snug font-normal tracking-widest text-primary text-center md:text-left"
                    >
                        WOULD YOU LIKE TO LEARN MORE?
                    </h1>
                    <ConnectWithBenBtn />
                </div>
            </section>
            <RegistrationModalSection
                :open="modal.registrationOpen"
                @close="modal.registrationOpen = false"
            />
        </main>
        <LandingFooter />
    </div>
</template>
