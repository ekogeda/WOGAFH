<script setup>
import { ref, computed } from "vue";

// Data for updates
const updates = ref([
  {
    id: 1,
    title: "Rightful Cleaning and Clothing of the Female Genitalia",
    description:
      "This sensitization outing focuses on educating women about proper hygiene and appropriate clothing choices to promote genital and overall reproductive health.",
    date: "November 18, 2024",
    images: [
      "/assets/images/outings/photo1.jpg",
      "/assets/images/outings/photo2.jpg",
      "/assets/images/outings/photo3.jpg",
      "/assets/images/outings/photo4.jpg",
      "/assets/images/outings/photo5.jpg",
      "/assets/images/outings/photo6.jpg",
      "/assets/images/outings/photo7.jpg",
      "/assets/images/outings/photo8.jpg",
      "/assets/images/outings/photo9.jpg",
      "/assets/images/outings/photo10.jpg",
      "/assets/images/outings/photo11.jpg",
      "/assets/images/outings/photo12.jpg",
      "/assets/images/outings/photo13.jpg",
    ],
    article: `
      <h3 class="text-2xl mt-4 mb-2">Rightful Cleaning and Clothing of the Female Genitalia</h3>
      <p class="mt-2 text-gray-700">
        Maintaining proper hygiene and appropriate clothing choices is essential for the overall health of women, particularly when it comes to their genital and reproductive health.
      </p>
      <h4 class="text-xl mt-4">Why Proper Hygiene Matters</h4>
      <p class="mt-2 text-gray-700">
        Proper hygiene prevents infections, maintains the vagina’s natural balance, and reduces odors and irritation. Follow these simple steps:
      </p>
      <ul class="list-disc pl-5 mt-2 text-gray-700">
        <li>Use mild soap or just clean water for external washing.</li>
        <li>Always wipe front to back after using the restroom.</li>
        <li>Dry the area thoroughly after washing or urinating.</li>
      </ul>
      <h4 class="text-xl mt-4">Appropriate Clothing Practices</h4>
      <p class="mt-2 text-gray-700">
        Choose breathable fabrics like cotton, avoid tight-fitting clothing for long periods, and change out of workout clothes promptly after exercising.
      </p>
      <h4 class="text-xl mt-4">Additional Tips for Genital Health</h4>
      <ul class="list-disc pl-5 mt-2 text-gray-700">
        <li>Hydrate and eat a balanced diet to support healthy bacteria.</li>
        <li>Visit a healthcare provider regularly for check-ups.</li>
        <li>Avoid using scented products or douches, as they can disrupt natural pH levels.</li>
      </ul>
      <p class="mt-4 text-gray-700">
        By following these practices, women can maintain optimal health and reduce the risk of infections or discomfort.
      </p>
    `,
  },
]);

// State to manage modal for image viewing
const selectedImage = ref(null);
const selectedIndex = ref(0);

// State to manage the expanded gallery
const expanded = ref(false);

// Computed property to get the current update's images
const currentImages = computed(
  () => updates.value[0]?.images || [] // Adjust to dynamically get images for a selected update
);

// Function to view an image in the modal
function viewImage(image, index) {
  selectedImage.value = image;
  selectedIndex.value = index;
}

// Navigate to the previous image
function prevImage() {
  if (selectedIndex.value > 0) {
    selectedIndex.value--;
    selectedImage.value = currentImages.value[selectedIndex.value];
  }
}

// Navigate to the next image
function nextImage() {
  if (selectedIndex.value < currentImages.value.length - 1) {
    selectedIndex.value++;
    selectedImage.value = currentImages.value[selectedIndex.value];
  }
}

// Toggle gallery expansion
function toggleGallery() {
  expanded.value = !expanded.value;
}
</script>

<template>
  <section class="px-3 py-10 md:py-16 bg-gray-100">
    <div class="container max-w-7xl mx-auto px-4">
      <h2 class="text-3xl md:text-4xl font-heading text-center mb-3">
        Foundation Updates
      </h2>
      <p class="text-gray-700 text-center">
        Stay informed about our latest outings and sensitization programs.
      </p>

      <div class="mt-10 space-y-6">
        <div
          v-for="update in updates"
          :key="update.id"
          class="p-5 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold text-gray-800">{{ update.title }}</h3>
          <p class="text-gray-700 mt-2">{{ update.description }}</p>
          <p class="text-sm text-gray-500 mt-1">Date: {{ update.date }}</p>

          <!-- Image Gallery -->
          <div class="mt-4">
            <h4 class="text-gray-800 font-medium mb-2">Gallery</h4>
            <div
              class="grid grid-cols-2 sm:grid-cols-3 gap-3"
              :class="{ 'max-h-56 overflow-hidden': !expanded }"
            >
              <img
                v-for="(image, index) in update.images"
                :key="index"
                :src="image"
                :alt="'Photo ' + (index + 1) + ' of ' + update.title"
                class="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80"
                @click="viewImage(image, index)"
              />
            </div>
            <button class="mt-3 text-blue-500 underline" @click="toggleGallery">
              {{ expanded ? "Show Less" : "View More" }}
            </button>
          </div>

          <!-- Article Section -->
          <div
            class="mt-6 p-4 bg-white border-l-4 border-pink-500 rounded-md shadow-sm"
            v-html="update.article"
          ></div>
        </div>
      </div>

      <!-- Modal for Viewing Images -->
      <div
        v-if="selectedImage"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <button
          class="absolute left-5 text-white text-2xl"
          @click="prevImage"
          :disabled="selectedIndex === 0"
        >
          &larr;
        </button>
        <img
          :src="selectedImage"
          alt="Selected"
          class="max-w-full max-h-full rounded-lg"
        />
        <button
          class="absolute right-5 text-white text-2xl"
          @click="nextImage"
          :disabled="selectedIndex === currentImages.length - 1"
        >
          &rarr;
        </button>
        <button
          class="absolute top-5 right-5 text-white text-2xl"
          @click="selectedImage = null"
        >
          &times;
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional styles for the modal and navigation buttons */
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
