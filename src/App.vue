<template>
  <div>
    <Header />
    <div>
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<style>
/* Custom styles if needed */
</style>
