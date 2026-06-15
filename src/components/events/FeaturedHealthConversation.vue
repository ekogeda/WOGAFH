<script setup>
import { computed } from "vue";

const props = defineProps({
	event: {
		type: Object,
		required: true,
	},
	detailsHref: {
		type: String,
		default: "#updates",
	},
});

const coverImage = computed(() => props.event?.gallery?.[0] || "/assets/images/placeholder.jpg");
</script>

<template>
	<section class="py-12 sm:py-16 bg-gradient-to-br from-purple-50 via-pink-50 to-white">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
				<div class="order-2 lg:order-1">
					<p
						class="inline-flex items-center rounded-full bg-purple-100 px-4 py-2 text-sm font-semibold text-purple-800"
					>
						Upcoming Health Conversation
					</p>

					<h2 class="mt-5 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
						{{ event.title }}
					</h2>

					<p class="mt-4 text-base sm:text-lg leading-8 text-gray-700">
						{{ event.description }}
					</p>

					<div class="mt-6 grid sm:grid-cols-3 gap-3">
						<div class="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-purple-100">
							<p class="text-xs font-semibold uppercase tracking-wide text-purple-700">Date</p>
							<p class="mt-1 text-sm font-semibold text-gray-900">{{ event.date }}</p>
						</div>
						<div class="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-purple-100">
							<p class="text-xs font-semibold uppercase tracking-wide text-purple-700">Time</p>
							<p class="mt-1 text-sm font-semibold text-gray-900">5:00 PM</p>
						</div>
						<div class="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-purple-100">
							<p class="text-xs font-semibold uppercase tracking-wide text-purple-700">Format</p>
							<p class="mt-1 text-sm font-semibold text-gray-900">Virtual Meeting</p>
						</div>
					</div>

					<div class="mt-6 rounded-2xl bg-white/80 p-5 shadow-sm ring-1 ring-purple-100">
						<p class="text-sm font-semibold text-gray-900">Featured discussants</p>
						<ul class="mt-3 space-y-2 text-sm leading-6 text-gray-700">
							<li>Dr. Gloria A. Bachmann, MD, MMS — Obstetrics, Gynecology and Medicine</li>
							<li>Dr. Bukola Asorona Quadri — Consultant Psychiatrist, LUTH</li>
						</ul>
					</div>

					<a
						:href="detailsHref"
						class="mt-8 inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
					>
						View Details
					</a>
				</div>

				<div class="order-1 lg:order-2">
					<div
						class="group overflow-hidden rounded-3xl bg-white p-3 shadow-xl ring-1 ring-purple-100 transition hover:-translate-y-1 hover:shadow-2xl"
					>
						<img
							:src="coverImage"
							:alt="`${event.title} event flyer`"
							class="h-full w-full rounded-2xl object-cover"
							loading="lazy"
							decoding="async"
						/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

