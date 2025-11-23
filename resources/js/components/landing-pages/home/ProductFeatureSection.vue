<template>
  <section class="w-full flex justify-center gap-10 my-5 sm:my-10 md:my-20">
    <div
      class="flex flex-col items-center gap-16 max-w-5xl w-full container mx-auto"
      :class="reverse ? 'sm:flex-row-reverse' : 'sm:flex-row'"
    >

      <!-- IMAGE -->
      <div
        v-motion
         v-motion-visible="{ once: false }"
        :initial="{ opacity: 0, x: reverse ? 150 : -150 }"
        :visible="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70 } }"
        class="flex-1"
      >
        <img
          :src="image"
          alt=""
          class="w-full object-cover rounded-xs shadow-sm h-96"
        />
      </div>

      <!-- TEXT -->
      <div class="flex-1 space-y-4 mb-10">

        <!-- TITLE -->
        <div
         v-motion
         v-motion-visible="{ once: false }"
          :initial="{ opacity: 0, x: reverse ? -150 : 150 }"
          :visible="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, delay: 0.1 } }"
        >
          <h2
            class="text-2xl text-primary tracking-widest font-normal leading-snug"
            v-html="formattedTitle"
          />
        </div>

        <!-- SUBTITLE -->
        <div
          v-motion
         v-motion-visible="{ once: false }"
          :initial="{ opacity: 0, x: reverse ? -150 : 150 }"
          :visible="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, delay: 0.2 } }"
        >
          <p class="text-sm text-muted-foreground italic">{{ subtitle }}</p>
        </div>

        <!-- DESCRIPTION -->
        <div
          v-motion
         v-motion-visible="{ once: false }"
          :initial="{ opacity: 0, x: reverse ? -150 : 150 }"
          :visible="{ opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, delay: 0.3 } }"
        >
          <div class="mt-5 pl-4 border-l-2 border-muted-foreground space-y-2">
            <p
              v-for="(line, i) in formattedDescription"
              :key="i"
              class="text-sm md:text-base text-primary leading-relaxed"
            >
              {{ line }}
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  reverse: Boolean,
});

const formattedDescription = computed(() =>
  props.description?.split("\n")?.filter((x:string) => x.trim())
);

const formattedTitle = computed(() => {
  const words = props.title?.trim()?.split(" ") ?? [];
  if (words.length > 2) {
    return `${words[0]} ${words[1]}<br>${words.slice(2).join(" ")}`;
  }
  return props.title;
});
</script>
