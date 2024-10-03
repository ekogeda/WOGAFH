<template>
  <figure class="w-full my-8">
    <img :src="src" :alt="alt" class="rounded-lg shadow-lg w-full h-auto object-cover" />
    <figcaption class="text-center text-sm text-gray-500 mt-2">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  src: String,
  alt: String,
  caption: String,
});
</script>
