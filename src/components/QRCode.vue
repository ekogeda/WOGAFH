<script setup>
import { ref, onMounted } from "vue";
import QRCode from "qrcode";

const qrContent = ref("https://forms.gle/your-google-form-link"); // Replace with your Google Form link
const qrImage = ref("");

const generateQRCode = async () => {
  qrImage.value = await QRCode.toDataURL(qrContent.value, {
    errorCorrectionLevel: "H", // High error correction
    width: 300,
  });
};

onMounted(() => {
  generateQRCode();
});

const downloadQRCode = () => {
  const link = document.createElement("a");
  link.href = qrImage.value;
  link.download = "QRCode.png";
  link.click();
};
</script>

<template>
  <div class="text-center">
    <div>
      <img v-if="qrImage" :src="qrImage" alt="QR Code" class="inline-block" />
    </div>
    <button
      @click="downloadQRCode"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Download QR Code
    </button>
  </div>
</template>

<style scoped></style>
