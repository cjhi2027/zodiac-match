<template>
  <div class="terms-page">
    <div class="container">
      <h1 class="page-title">{{ $t("terms.title") }}</h1>
      
      <div class="content-section">
        <p class="intro">{{ $t("terms.intro") }}</p>
        <p class="last-updated">{{ $t("terms.lastUpdated") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.service.title") }}</h2>
        <p>{{ $t("terms.service.description") }}</p>
        <p>{{ $t("terms.service.nature") }}</p>
        <p>{{ $t("terms.service.disclaimer") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.acceptance.title") }}</h2>
        <p>{{ $t("terms.acceptance.description") }}</p>
        <p>{{ $t("terms.acceptance.conditions") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.user.title") }}</h2>
        <p>{{ $t("terms.user.description") }}</p>
        <ul>
          <li>{{ $t("terms.user.item1") }}</li>
          <li>{{ $t("terms.user.item2") }}</li>
          <li>{{ $t("terms.user.item3") }}</li>
          <li>{{ $t("terms.user.item4") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.content.title") }}</h2>
        <p>{{ $t("terms.content.description") }}</p>
        <p>{{ $t("terms.content.accuracy") }}</p>
        <p>{{ $t("terms.content.liability") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.advertising.title") }}</h2>
        <p>{{ $t("terms.advertising.description") }}</p>
        <p>{{ $t("terms.advertising.consent") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.privacy.title") }}</h2>
        <p>{{ $t("terms.privacy.description") }}</p>
        <p>{{ $t("terms.privacy.policy") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.liability.title") }}</h2>
        <p>{{ $t("terms.liability.description") }}</p>
        <p>{{ $t("terms.liability.limitation") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.modification.title") }}</h2>
        <p>{{ $t("terms.modification.description") }}</p>
        <p>{{ $t("terms.modification.notice") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("terms.contact.title") }}</h2>
        <p>{{ $t("terms.contact.description") }}</p>
        <p class="contact-email">{{ $t("terms.contact.email") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Terms of Service 페이지 컴포넌트
</script>

<style scoped>
.terms-page {
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
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.content-section h2 {
  font-size: 1.4rem;
  font-weight: bold;
  color: #e91e63;
  margin-bottom: 1rem;
}

.content-section p {
  font-size: 1rem;
  color: #333;
  margin-bottom: 1rem;
}

.intro {
  font-size: 1.1rem;
  font-weight: 500;
}

.last-updated {
  font-style: italic;
  color: #666;
  font-size: 0.9rem;
}

.content-section ul {
  margin: 1rem 0;
  padding-left: 1.5rem;
}

.content-section li {
  font-size: 1rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.contact-email {
  font-weight: bold;
  color: #e91e63;
  font-size: 1.1rem;
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
    font-size: 1.2rem;
  }
}
</style>
