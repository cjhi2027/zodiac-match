<template>
  <div class="terms-page">
    <div class="container">
      <h1 class="page-title">Terms of Service</h1>
      
      <div class="content-section">
        <p class="intro">These terms and conditions govern the use of the Love Index website (hereinafter "this site").</p>
        <p class="last-updated">Last updated: January 3, 2025</p>
      </div>

      <div class="content-section">
        <h2>1. Nature of Service</h2>
        <p>This site is an entertainment service that provides compatibility and personality tests for fun.</p>
        <p>The content provided is not based on scientific facts and should be used for reference only.</p>
        <p>It cannot be interpreted as legal, medical, or financial advice and should not be used as a basis for important life decisions.</p>
      </div>

      <div class="content-section">
        <h2>2. Agreement to Terms</h2>
        <p>By using this site, you are deemed to have agreed to these terms.</p>
        <p>If you do not agree to these terms, please discontinue use of the service.</p>
      </div>

      <div class="content-section">
        <h2>3. User Responsibilities</h2>
        <p>Users must use this site only for legal and healthy purposes.</p>
        <ul>
          <li>Take responsibility for all consequences arising from service use</li>
          <li>Do not infringe on others' rights or engage in illegal activities</li>
          <li>Do not interfere with the normal operation of the service</li>
          <li>Use the service in compliance with these terms</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>4. Content and Information</h2>
        <p>All information and content provided on this site is for reference only.</p>
        <p>We do not guarantee the accuracy or completeness of information and it may be changed at any time.</p>
        <p>We are not responsible for any damages caused by the provided information.</p>
      </div>

      <div class="content-section">
        <h2>5. Advertising and Partnerships</h2>
        <p>This site may display Google AdSense and partnership advertisements.</p>
        <p>Users agree that advertisements may be displayed when using the site.</p>
      </div>

      <div class="content-section">
        <h2>6. Privacy Protection</h2>
        <p>The collection, use, and protection of personal information follows a separate privacy policy.</p>
        <p>The privacy policy applies together with these terms.</p>
      </div>

      <div class="content-section">
        <h2>7. Limitation of Liability</h2>
        <p>The information provided on this site is for reference only, and we are not responsible for any damages caused by service use.</p>
        <p>We are not responsible for any indirect, incidental, or special damages.</p>
      </div>

      <div class="content-section">
        <h2>8. Modification of Terms</h2>
        <p>This site may modify these terms as needed.</p>
        <p>Changes will take effect immediately after being announced on the site.</p>
      </div>

      <div class="content-section">
        <h2>9. Contact</h2>
        <p>For inquiries regarding these terms, please contact us through the following contact information.</p>
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

// Terms of Service page component
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
