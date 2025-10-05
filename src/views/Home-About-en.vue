<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">About Love Index</h1>
      
      <div class="content-section">
        <h2>What is Love Index?</h2>
        <p>Love Index is a free web service that allows couples to check their compatibility in a fun way using various elements such as zodiac signs, Chinese zodiac, blood type, and MBTI.</p>
      </div>

      <div class="content-section">
        <h2>Key Features</h2>
        <ul class="feature-list">
          <li>Zodiac, blood type, constellation, MBTI compatibility analysis</li>
          <li>Detailed compatibility explanations and advice</li>
          <li>Date recommendations and gift ideas</li>
          <li>Multi-language support (Korean, English)</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>Service Purpose</h2>
        <p>Love Index aims to help couples understand each other better, provide fun conversation topics, and strengthen their relationships.</p>
      </div>

      <div class="content-section">
        <h2>Future Plans</h2>
        <p>We plan to add more compatibility elements and analysis methods to provide users with a richer experience.</p>
      </div>

      <div class="content-section">
        <h2>Contact Us</h2>
        <p>If you have any questions or suggestions about our service, please feel free to contact us anytime.</p>
        <p class="contact-email">
          <a href="mailto:syhi5093@gmail.com">syhi5093@gmail.com</a>
        </p>
      </div>
    </div>
  </div>
  
  <!-- Back button -->
  <div v-if="showButton" class="navigation-buttons">
    <button @click="goBack" class="nav-btn bottom-btn slide-up">
      Go Back
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const showButton = ref(false);

// About page component
onMounted(() => {
  // Add body-home class when entering the page
  document.body.classList.add('body-home');
  
  // Show button after 1 second
  setTimeout(() => {
    showButton.value = true;
  }, 1000);
});

onUnmounted(() => {
  // Remove body-home class when leaving the page
  document.body.classList.remove('body-home');
});

// Go back function
const goBack = () => {
  router.back();
};
</script>
