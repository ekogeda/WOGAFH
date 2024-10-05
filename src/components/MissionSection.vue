<template>
  <section class="px-3 py-10 md:py-16 bg-white">
    <div class="container mx-auto px-4">
      <h2
        class="text-3xl md:text-4xl text-center mb-8"
        :class="[$route.name === 'Mission' ? 'font-bold' : 'font-heading']"
      >
        Our Mission
      </h2>
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <!-- Left Column -->
        <div class="flex justify-center">
          <img
            src="../assets/woman_reproductive_system.png"
            alt="Reproductive Health"
            class="w-full h-auto max-w-md rounded-lg shadow-md"
          />
        </div>

        <!-- Right Column -->
        <div class="text-base md:text-lg text-gray-700">
          <p class="mb-4 md:mb-6">
            We aim to develop and disseminate educational materials on female reproductive
            health including menstrual health, contraception, sexually transmitted
            infections, pregnancy, and menopause.
          </p>
          <p class="mb-4 md:mb-6">
            We advocate for policies that ensure equitable access to reproductive
            healthcare services for all women regardless of socioeconomic status.
          </p>
          <p class="mb-4 md:mb-6">
            Partnering with healthcare providers, we offer affordable or free reproductive
            health services, including screenings, treatments, and counseling.
          </p>
          <p class="mb-4 md:mb-6">
            Our programs empower women and girls to take control of their reproductive
            health through leadership and advocacy training, while addressing gender
            inequality and promoting the social, economic, and political empowerment of
            women.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Mission page-specific logic can go here
</script>

<style scoped>
/* Custom styles for Mission page */
</style>
