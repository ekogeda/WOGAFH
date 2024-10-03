<template>
  <header class="text-center py-8">
    <h1 class="text-4xl font-bold">{{ title }}</h1>
    <p class="mt-4 text-gray-600">{{ date }}</p>
  </header>
</template>

<script setup>
defineProps({
  title: String,
  date: String,
});
</script>
