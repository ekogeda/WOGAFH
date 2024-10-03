<template>
  <section class="px-3 py-10 md:py-16 bg-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-heading text-center mb-8">Our Services</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Educational Programs -->
        <div
          class="bg-white shadow-lg p-6 rounded-lg transform transition duration-300 hover:scale-105"
        >
          <div class="flex flex-col lg:flex-row lg:items-center lg:gap-4 mb-4">
            <div class="">
              <Icon icon="mdi:graduation-cap" width="35" height="35" />
            </div>
            <h3 class="text-2xl font-600">Educational Programs</h3>
          </div>
          <p class="text-gray-700">
            We offer educational resources on reproductive health to empower women.
          </p>
        </div>

        <!-- Healthcare Support -->
        <div
          class="bg-white shadow-lg p-6 rounded-lg transform transition duration-300 hover:scale-105"
        >
          <div class="flex flex-col lg:flex-row lg:items-center lg:gap-4 mb-4">
            <div class="">
              <Icon icon="mdi:heart-plus-outline" width="35" height="35" />
            </div>
            <h3 class="text-2xl font-600">Healthcare Support</h3>
          </div>
          <p class="text-gray-700">
            Partnering with providers to ensure access to screenings, treatments, and
            counseling.
          </p>
        </div>

        <!-- Advocacy & Rights -->
        <div
          class="bg-white shadow-lg p-6 rounded-lg transform transition duration-300 hover:scale-105"
        >
          <div class="flex flex-col lg:flex-row lg:items-center lg:gap-4 mb-4">
            <div class="">
              <Icon icon="mdi:scale-balance" width="35" height="35" />
            </div>
            <h3 class="text-2xl font-600">Advocacy & Rights</h3>
          </div>
          <p class="text-gray-700">
            Championing the reproductive rights of women and girls everywhere.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
/* You can add custom styles here if necessary */
</style>
