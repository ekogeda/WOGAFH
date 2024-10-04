<template>
  <section class="py-16">
    <div class="container px-4 mx-auto space-y-4">
      <header class="text-center">
        <h1 class="text-4xl font-bold">Our Blog</h1>
        <p class="mt-4 text-lg">
          Stay updated with our latest articles on female reproductive and mental health.
        </p>
      </header>

      <section class="py-8 max-w-7xl mx-auto">
        <ul class="space-y-6">
          <li v-for="post in blogPosts" :key="post.id" class="border-b pb-4">
            <h2 class="text-2xl font-semibold">{{ post.title }}</h2>
            <p class="mt-2 text-gray-600">{{ post.excerpt }}</p>
            <router-link
              :to="'/blog/' + post.id"
              class="text-blue-600 hover:underline mt-4 inline-block"
            >
              Read more
            </router-link>
          </li>
        </ul>
      </section>
    </div>
  </section>
</template>

<script setup>
const blogPosts = [
  {
    id: 1,
    title: "Understanding Menstrual Health",
    excerpt: "earn the basics of menstrual health and how to take care of yourself...",
  },
  {
    id: 2,
    title: "Reproductive Health Advocacy",
    excerpt:
      "How we are fighting for women's reproductive rights and access to healthcare...",
  },
  {
    id: 3,
    title: "Mental Health and Reproductive Health",
    excerpt:
      "Exploring the connection between mental well-being and reproductive health...",
  },
  {
    id: 4,
    title: "How to Manage STIs",
    excerpt: "Learn about managing and preventing STIs...",
  },
  {
    id: 5,
    title: "Contraception Options",
    excerpt: "Discover various contraceptive options...",
  },
];
</script>

<style scoped></style>
