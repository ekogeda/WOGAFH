<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { updates as updatesData } from "@/data/updates";

const updates = ref(updatesData);

// Modal state
const selectedItem = ref(null);
const selectedIndex = ref(0);
const selectedUpdate = ref(null); // Track which update is open
const expanded = ref(false);

const sortedUpdates = computed(() => {
	return [...updates.value].sort((a, b) => new Date(b.date) - new Date(a.date));
});

// Current gallery based on the selected update
const currentGallery = computed(() => selectedUpdate.value?.gallery || []);

// Check if item is a video
function isVideo(item) {
	return item.endsWith(".mp4") || item.endsWith(".webm") || item.endsWith(".ogg");
}

// Open modal for a specific update and item
function viewItem(item, index, update) {
	selectedItem.value = item;
	selectedIndex.value = index;
	selectedUpdate.value = update;
}

// Navigate modal
function prevItem() {
	if (selectedIndex.value > 0) {
		selectedIndex.value--;
		selectedItem.value = currentGallery.value[selectedIndex.value];
	}
}

function nextItem() {
	if (selectedIndex.value < currentGallery.value.length - 1) {
		selectedIndex.value++;
		selectedItem.value = currentGallery.value[selectedIndex.value];
	}
}

// Toggle gallery expansion
function toggleGallery() {
	expanded.value = !expanded.value;
}

const touchStartX = ref(0);
const touchEndX = ref(0);

function handleTouchStart(event) {
	touchStartX.value = event.changedTouches[0].screenX;
}

function handleTouchEnd(event) {
	touchEndX.value = event.changedTouches[0].screenX;
	handleSwipe();
}

function handleSwipe() {
	const distance = touchEndX.value - touchStartX.value;
	const minDistance = 50; // Minimum distance to be considered a swipe

	if (distance > minDistance) {
		// Swiped right → previous item
		prevItem();
	} else if (distance < -minDistance) {
		// Swiped left → next item
		nextItem();
	}
}

// Close modal function
function closeModal() {
	selectedItem.value = null;
	selectedUpdate.value = null;
	selectedIndex.value = 0;
}

// Handle Escape key
function handleKeydown(event) {
	if (event.key === "Escape") {
		closeModal();
	}
}

onMounted(() => {
	window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
	window.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
	<section class="px-3 py-10 md:py-16 bg-gray-100">
		<div class="container max-w-7xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-heading text-center mb-3">Foundation Updates</h2>
			<p class="text-gray-700 text-center">Stay informed about our latest outings and sensitization programs.</p>

			<div class="mt-10 space-y-6">
				<div
					v-for="update in sortedUpdates"
					:key="update.id"
					class="p-5 bg-gray-50 shadow-md rounded-lg hover:shadow-lg transition-shadow"
				>
					<h3 class="text-xl font-semibold text-gray-800">{{ update.title }}</h3>
					<p class="text-gray-700 mt-2">{{ update.description }}</p>
					<p class="text-sm text-gray-500 mt-1">Date: {{ update.date }}</p>

					<!-- Gallery -->
					<div class="mt-4">
						<h4 class="text-gray-800 font-medium mb-2">Gallery</h4>
						<div class="grid grid-cols-2 sm:grid-cols-3 gap-3" :class="{ 'max-h-56 overflow-hidden': !expanded }">
							<template v-for="(item, index) in update.gallery" :key="index">
								<!-- Image -->
								<img
									v-if="!isVideo(item)"
									:src="item"
									:alt="'Photo ' + (index + 1) + ' of ' + update.title"
									class="w-full h-40 object-cover rounded-lg cursor-pointer hover:opacity-80"
									@click="viewItem(item, index, update)"
								/>

								<!-- Video Preview -->
								<div
									v-else
									class="w-full h-40 bg-black rounded-lg cursor-pointer relative overflow-hidden"
									@click="viewItem(item, index, update)"
								>
									<video :src="item" class="w-full h-full object-cover" muted playsinline></video>
									<div
										class="absolute inset-0 flex items-center justify-center text-white text-3xl pointer-events-none"
									>
										▶
									</div>
								</div>
							</template>
						</div>
						<button class="mt-3 text-blue-500 underline" @click="toggleGallery">
							{{ expanded ? "Show Less" : "View More" }}
						</button>
					</div>

					<!-- Article Section -->
					<div class="mt-6 p-4 bg-white border-l-4 border-pink-500 rounded-md shadow-sm" v-html="update.article"></div>
				</div>
			</div>

			<!-- Modal for Viewing Items -->
			<div
				v-if="selectedItem"
				class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
				@touchstart="handleTouchStart"
				@touchend="handleTouchEnd"
			>
				<button class="absolute left-5 text-white text-2xl" @click="prevItem" :disabled="selectedIndex === 0">
					&larr;
				</button>

				<!-- Image or Video in Modal -->
				<template v-if="!isVideo(selectedItem)">
					<img :src="selectedItem" alt="Selected" class="max-w-full max-h-full rounded-lg" />
				</template>
				<template v-else>
					<video :src="selectedItem" class="max-w-full max-h-full rounded-lg" controls autoplay></video>
				</template>

				<button
					class="absolute right-5 text-white text-2xl"
					@click="nextItem"
					:disabled="selectedIndex === currentGallery.length - 1"
				>
					&rarr;
				</button>
				<button class="absolute top-5 right-5 text-white text-2xl" @click="selectedItem = null">&times;</button>
			</div>
		</div>
	</section>
</template>

<style scoped>
button:disabled {
	opacity: 0.5;
	cursor: not-allowed;
}
</style>
