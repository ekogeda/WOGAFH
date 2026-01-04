<script setup>
import { ref, onMounted } from "vue";
import QRCode from "qrcode";

const googleFormLink = ref("https://forms.gle/example-google-form-link");
const qrCodeCanvas = ref(null);

onMounted(() => {
  if (qrCodeCanvas.value) {
    QRCode.toCanvas(qrCodeCanvas.value, googleFormLink.value, { width: 256 }, (error) => {
      if (error) console.error("Error generating QR code:", error);
    });
  }
});
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- <h2 class="text-lg font-semibold mb-4">Scan to Access Google Form</h2> -->
    <canvas ref="qrCodeCanvas" class="border border-gray-300"></canvas>
    <!-- <p class="text-sm text-gray-500 mt-2">{{ googleFormLink }}</p> -->
  </div>
</template>

<style scoped>
/* Add any styles here if needed */
</style>
