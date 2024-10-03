<template>
  <section class="px-3 py-10 md:py-16">
    <div class="container mx-auto px-4 text-center">
      <h2 class="text-3xl md:text-4xl font-heading text-center mb-8">
        Latest Blog Posts
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div
          v-for="post in blogPosts"
          :key="post.id"
          class="bg-white shadow-lg px-5 py-6 rounded-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            :src="post.image"
            :alt="post.title"
            class="w-full h-48 object-cover mb-4 rounded-lg"
          />
          <h3 class="text-xl md:text-2xl font-600 mb-2">{{ post.title }}</h3>
          <p class="text-gray-700 mb-4">{{ post.excerpt }}</p>
          <router-link :to="`/blog/${post.id}`" class="text-blue-500 hover:underline"
            >Read More</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Importing images correctly
import doctorWorkImage from "../assets/blog/doctor-work.jpg";
import menstrualHealthImage from "../assets/blog/understanding_menstrual_health.jpg";
import mentalHealthImage from "../assets/blog/Nurturing-Reproductive-Mental-Health.jpg";

// Blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Menstrual Health",
    excerpt: "Learn the basics of menstrual health and how to take care of yourself...",
    image: menstrualHealthImage,
  },
  {
    id: 2,
    title: "Reproductive Health Advocacy",
    excerpt:
      "How we are fighting for women's reproductive rights and access to healthcare...",
    image: doctorWorkImage,
  },
  {
    id: 3,
    title: "Mental Health and Reproductive Health",
    excerpt:
      "Exploring the connection between mental well-being and reproductive health...",
    image: mentalHealthImage,
  },
];
</script>

<style scoped>
/* Custom styling */
.container {
  max-width: 1200px;
}

@media (min-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

.shadow-lg {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.hover\:shadow-2xl:hover {
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.15);
}
</style>
