<template>
  <section class="w-full py-10 md:py-24 px-5 md:px-10 lg:px-32">

    <!-- HEADER -->
    <div class="text-center mb-16">
      <div
         v-motion
         v-motion-visible="{ once: false }"
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 70 }
        }"
      >
        <h2 class="text-2xl md:text-3xl font-normal tracking-wide text-primary">
          WHAT’S YOUR INFLUENCE?
        </h2>
      </div>

      <div
         v-motion
         v-motion-visible="{ once: false }"
        :initial="{ opacity: 0, y: 40 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: { type: 'spring', stiffness: 70, delay: 0.15 }
        }"
      >
        <p class="text-sm md:text-base text-muted-foreground mt-3 leading-relaxed">
          Is this you? Could this be you? <br />
          Are you ready to be an influencer?
        </p>
      </div>
    </div>

    <!-- CARDS -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
      <div
        v-for="(card, i) in cards"
        :key="i"
         v-motion
         v-motion-visible="{ once: false }"
        :initial="{ opacity: 0, y: 60 }"
        :visible="{
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            stiffness: 70,
            delay: 0.2 + i * 0.15
          }
        }"
        class="shadow-lg rounded-2xl overflow-hidden bg-white group hover:cursor-pointer relative"
      >
        <img :src="card.image" class="w-full h-96 group-hover:scale-105 object-cover max-w-full transition ease-in-out duration-500" />

        <div class="flex items-center gap-4 px-6 py-5 border-t">
          <img
            :src="card.image"
            class="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <p class="font-semibold text-gray-700">{{ card.name }}</p>
            <p class="text-sm text-gray-500">@{{ card.username }}</p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script setup lang="ts">
defineProps({
  cards: {
    type: Array<{
      name: string
      username: string
      image: string
    }>,
    default: () => []
  }
})
</script>
