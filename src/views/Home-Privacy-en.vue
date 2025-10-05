<template>
  <div class="privacy-page">
    <div class="container">
      <h1 class="page-title">Privacy Policy</h1>
      
      <div class="content-section">
        <p class="intro">Love Index (hereinafter "this site") respects users' personal information and strives to protect it safely.</p>
        <p class="last-updated">Last updated: January 3, 2025</p>
      </div>

      <div class="content-section">
        <h2>1. Information We Collect</h2>
        <p>This site only uses information that users directly input.</p>
        <ul>
          <li>Basic information for compatibility analysis such as zodiac, constellation, blood type, MBTI</li>
          <li>Browser cookies and session data</li>
          <li>Anonymous usage statistics through Google Analytics</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>2. Purpose of Information Use</h2>
        <p>Collected information is used only for the following purposes.</p>
        <ul>
          <li>Providing compatibility analysis results</li>
          <li>Service improvement and user experience enhancement</li>
          <li>Advertising provision and service operation</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>3. Cookies and Log Data</h2>
        <p>This site may use third-party services such as Google Analytics and Google AdSense, and cookies and log data may be collected in this process.</p>
        <p>This is used only for the purpose of service improvement and advertising provision.</p>
      </div>

      <div class="content-section">
        <h2>4. Third-Party Sharing of Personal Information</h2>
        <p>This site does not sell, share, or rent personal information to third parties except when required by law.</p>
        <p>However, anonymized data may be used for advertising services such as Google AdSense.</p>
      </div>

      <div class="content-section">
        <h2>5. Security</h2>
        <p>We apply appropriate security measures to protect users' personal information. All data transmission is encrypted through HTTPS.</p>
      </div>

      <div class="content-section">
        <h2>6. User Rights</h2>
        <p>Users have the following rights regarding their personal information.</p>
        <ul>
          <li>Request to view personal information processing status</li>
          <li>Request to suspend personal information processing</li>
          <li>Request to delete personal information</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>7. Policy Changes</h2>
        <p>This privacy policy may be changed as needed, and changes will take effect immediately after being announced on the site.</p>
      </div>

      <div class="content-section">
        <h2>8. Contact</h2>
        <p>For inquiries regarding personal information, please contact us through the following contact information.</p>
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

// Privacy Policy page component
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
