<template>
  <section class="prose lg:prose-lg space-y-6">
    <div v-for="(section, index) in sections" :key="index" class="space-y-3">
      <h2 class="text-xl md:text-2xl font-semibold">{{ section.heading }}</h2>
      <div v-html="section.body" class="leading-relaxed space-y-3" />
    </div>
  </section>
</template>

<script setup>
defineProps({
  sections: Array,
});
</script>
