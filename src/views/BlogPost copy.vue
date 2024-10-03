<template>
  <div class="container mx-auto p-4 sm:p-6 lg:p-8 max-w-3xl">
    <!-- Blog Header -->
    <header class="text-center py-6 sm:py-8 lg:py-10">
      <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold">{{ post.title }}</h1>
      <p class="mt-2 sm:mt-4 text-gray-600 text-sm sm:text-base">{{ post.date }}</p>
    </header>

    <!-- Blog Content -->
    <main>
      <article class="prose leading-relaxed space-y-6">
        <!-- Image at the top -->
        <figure class="w-full my-6 sm:my-8">
          <!-- Image for Understanding Menstrual Health -->
          <img
            v-if="post.id === 1"
            src="../assets/blog/educational_illustration_showing_a_woman's_rep1.jpg"
            alt="Menstrual Health Illustration"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />

          <!-- Image for How to Manage STIs -->
          <img
            v-if="post.id === 2"
            src="../assets/blog/manage_stis.jpg"
            alt="How to Manage STIs Illustration"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />

          <!-- Image for Contraception Options -->
          <img
            v-if="post.id === 3"
            src="../assets/blog/contraception_options.jpg"
            alt="Contraception Options Illustration"
            class="rounded-lg shadow-lg w-full h-auto object-cover"
          />

          <figcaption class="text-center text-xs sm:text-sm text-gray-500 mt-2">
            <!-- Captions for each post -->
            <span v-if="post.id === 1">Educational illustration on menstrual health</span>
            <span v-if="post.id === 2"
              >Guidance on managing sexually transmitted infections (STIs)</span
            >
            <span v-if="post.id === 3">Understanding contraception options</span>
          </figcaption>
        </figure>

        <!-- Article Content -->
        <section>
          <header>
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-semibold mb-3">
              {{ post.title }}
            </h2>
          </header>
          <!-- Display content using v-html to parse HTML in post.content -->
          <div v-html="post.content" class="leading-relaxed space-y-3" />
        </section>
      </article>
    </main>

    <!-- Blog Footer -->
    <footer class="mt-8 text-center">
      <router-link to="/blog" class="text-blue-600 hover:underline">
        Back to Blog
      </router-link>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const post = ref({ title: "", date: "", content: "" });

onMounted(() => {
  // Simulating a fetch from an API
  const postId = route.params.id;
  const posts = [
    {
      id: 1,
      title: "Understanding Menstrual Health",
      date: "September 15, 2024",
      content: `
      <p>Menstrual health is an essential aspect of overall well-being, yet it is often overlooked or misunderstood. Menstruation is a natural biological process experienced by people with female reproductive systems, typically occurring once a month. Understanding menstrual cycles, symptoms, and potential irregularities is crucial in promoting reproductive health.</p>
      <p>A menstrual cycle lasts about 28 days on average, but it can range from 21 to 35 days. It's influenced by hormonal changes, lifestyle, and environmental factors. Recognizing symptoms such as cramps, mood swings, and bloating, as well as more serious issues like heavy bleeding or missed periods, is important for identifying potential health concerns.</p>
      <p>Education and open conversations around menstrual health help reduce stigma and empower individuals to seek appropriate care when needed. It's vital to maintain a healthy lifestyle, including a balanced diet, exercise, and stress management, to support menstrual health.</p>
      `,
    },
    {
      id: 2,
      title: "How to Manage STIs",
      date: "September 16, 2024",
      content: `
      <p>Sexually transmitted infections (STIs) are a serious public health issue, but they can be managed effectively with the right information and care. Prevention and early detection are key to managing STIs and reducing their spread.</p>
      <p>Safe sex practices, such as using condoms and regular testing, are crucial in preventing STIs. If diagnosed with an STI, early treatment is important to avoid long-term complications. Many STIs are treatable with antibiotics or antiviral medications, but some, like HIV, require lifelong management.</p>
      <p>Education is vital for reducing stigma and encouraging individuals to take action to protect their sexual health. Communication with sexual partners, routine medical check-ups, and practicing safe sex are essential steps in STI management.</p>
      `,
    },
    {
      id: 3,
      title: "Contraception Options",
      date: "September 17, 2024",
      content: `
      <p>Contraception, or birth control, provides individuals with the ability to manage their reproductive health and family planning. There are a wide range of contraception options available, each with its own benefits and potential side effects.</p>
      <p>Hormonal methods, such as the pill, patch, or hormonal IUD, work by regulating hormones to prevent pregnancy. Non-hormonal options include condoms, copper IUDs, and fertility awareness methods. The choice of contraception depends on individual health, convenience, and personal preference.</p>
      <p>It's important to consult a healthcare provider to discuss which method is most suitable. Access to reliable contraception is essential for promoting reproductive health, preventing unintended pregnancies, and empowering individuals to make informed choices about their bodies.</p>
      `,
    },
  ];

  post.value = posts.find((p) => p.id === parseInt(postId));
});
</script>

<style scoped>
/* TailwindCSS classes already cover most of the design */
</style>
