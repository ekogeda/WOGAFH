<script setup>
import { ref } from "vue";

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
  },
]);

// State to manage modal for image viewing
const selectedImageIndex = ref(null);
const activeImages = ref(updates.value[0].images); // Active images for modal navigation

// Function to open modal at the selected image index
function viewImage(index) {
  selectedImageIndex.value = index;
}

// Function to navigate to the next image
function nextImage() {
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value = (selectedImageIndex.value + 1) % activeImages.value.length;
  }
}

// Function to navigate to the previous image
function prevImage() {
  if (selectedImageIndex.value !== null) {
    selectedImageIndex.value =
      (selectedImageIndex.value - 1 + activeImages.value.length) %
      activeImages.value.length;
  }
}

// State for "View More" functionality
const maxImagesToShow = ref(6);

// Function to load all images
function loadMoreImages() {
  maxImagesToShow.value = activeImages.value.length;
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
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <img
                v-for="(image, index) in update.images.slice(0, maxImagesToShow)"
                :key="index"
                :src="image"
                :alt="'Photo ' + (index + 1) + ' of ' + update.title"
                class="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80"
                @click="viewImage(index)"
              />
            </div>
            <!-- Load More Button -->
            <button
              v-if="maxImagesToShow < update.images.length"
              class="mt-4 text-blue-600 underline hover:text-blue-800"
              @click="loadMoreImages"
            >
              View More
            </button>
          </div>
        </div>
      </div>

      <!-- Modal for Viewing Images -->
      <div
        v-if="selectedImageIndex !== null"
        class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      >
        <!-- Modal Navigation -->
        <button class="absolute left-4 text-white text-3xl" @click="prevImage">
          &larr;
        </button>
        <img
          :src="activeImages[selectedImageIndex]"
          alt="Selected"
          class="max-w-full max-h-full rounded-lg"
        />
        <button class="absolute right-4 text-white text-3xl" @click="nextImage">
          &rarr;
        </button>
        <!-- Close Modal -->
        <button
          class="absolute top-4 right-4 text-white text-2xl"
          @click="selectedImageIndex = null"
        >
          &times;
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Optional styles for modal navigation buttons */
button {
  background: transparent;
  border: none;
  cursor: pointer;
}

button:focus {
  outline: none;
}
</style>
