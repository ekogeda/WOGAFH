<template>
  <header class="bg-primary text-white p-3 md:py-6">
    <div
      class="container max-w-7xl mx-auto flex flex-wrap justify-between items-center animate-fade-in"
    >
      <!-- Logo and Title with Fade-in Animation -->
      <router-link to="/">
        <div class="flex items-center space-x-4">
          <img
            src="../assets/logo.png"
            alt="Reproductive Health Foundation Logo"
            class="h-10 w-auto sm:h-12 transition-transform duration-500 transform hover:scale-110 rounded-full"
          />
          <h1
            title="Women Genital and Fertility Health Foundation"
            class="text-xl sm:text-3xl font-semibold transition-opacity duration-500 opacity-100 animate-slide-in-left"
          >
            WOGAFH
          </h1>
        </div>
      </router-link>

      <!-- Navigation with Slide-in Animation -->
      <nav>
        <ul class="hidden md:flex space-x-6 animate-slide-in-right">
          <li>
            <router-link to="/" class="hover:text-accent transition-colors duration-300"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/mission"
              class="hover:text-accent transition-colors duration-300"
              >Mission</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              class="hover:text-accent transition-colors duration-300"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              class="hover:text-accent transition-colors duration-300"
              >Contact</router-link
            >
          </li>
        </ul>

        <!-- Mobile Navigation (Hamburger Icon) -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="h-8 w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>

      <!-- Mobile Menu (Dropdown with Fade-in Animation) -->
      <div v-if="isMenuOpen" class="w-full mt-4 md:hidden animate-fade-in-down">
        <ul class="flex flex-col space-y-4">
          <li>
            <router-link
              to="/"
              @click="closeMenu"
              class="hover:text-accent transition-colors duration-300"
              >Home</router-link
            >
          </li>
          <li>
            <router-link
              to="/mission"
              @click="closeMenu"
              class="hover:text-accent transition-colors duration-300"
              >Mission</router-link
            >
          </li>
          <li>
            <router-link
              to="/about"
              @click="closeMenu"
              class="hover:text-accent transition-colors duration-300"
              >About Us</router-link
            >
          </li>
          <li>
            <router-link
              to="/contact"
              @click="closeMenu"
              class="hover:text-accent transition-colors duration-300"
              >Contact</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from "vue";

// Toggle state for mobile menu
const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInLeft {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Applying animations */
.animate-fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.6s ease-in-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.6s ease-in-out forwards;
}

.animate-fade-in-down {
  animation: fadeInDown 0.5s ease-in-out forwards;
}
</style>
