<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">{{ $t("about.title") }}</h1>
      
      <div class="content-section">
        <h2>{{ $t("about.whatIs") }}</h2>
        <p>{{ $t("about.description") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.features") }}</h2>
        <ul class="feature-list">
          <li>{{ $t("about.feature1") }}</li>
          <li>{{ $t("about.feature2") }}</li>
          <li>{{ $t("about.feature3") }}</li>
          <li>{{ $t("about.feature4") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.purpose") }}</h2>
        <p>{{ $t("about.purposeDescription") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.future") }}</h2>
        <p>{{ $t("about.futureDescription") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("about.contact") }}</h2>
        <p>{{ $t("about.contactDescription") }}</p>
        <p class="contact-email">{{ $t("about.email") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// About 페이지 컴포넌트
</script>

<style scoped>
.about-page {
  min-height: calc(100vh - 4rem);
  padding: 2rem 1rem;
  background-color: #fffef5;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

.page-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #e91e63;
  text-align: center;
  margin-bottom: 2rem;
}

.content-section {
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 1rem;
}

.content-section p {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 1rem;
}

.feature-list {
  list-style: none;
  padding: 0;
}

.feature-list li {
  font-size: 1.1rem;
  color: #333;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.feature-list li::before {
  content: "✨";
  position: absolute;
  left: 0;
  top: 0;
}

.contact-email {
  font-weight: bold;
  color: #e91e63;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .content-section {
    padding: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .content-section h2 {
    font-size: 1.3rem;
  }
  
  .content-section p {
    font-size: 1rem;
  }
}
</style>
