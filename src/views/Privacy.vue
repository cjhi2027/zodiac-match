<template>
  <div class="privacy-page">
    <div class="container">
      <h1 class="page-title">{{ $t("privacy.title") }}</h1>
      
      <div class="content-section">
        <p class="intro">{{ $t("privacy.intro") }}</p>
        <p class="last-updated">{{ $t("privacy.lastUpdated") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.collection.title") }}</h2>
        <p>{{ $t("privacy.collection.description") }}</p>
        <ul>
          <li>{{ $t("privacy.collection.item1") }}</li>
          <li>{{ $t("privacy.collection.item2") }}</li>
          <li>{{ $t("privacy.collection.item3") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.usage.title") }}</h2>
        <p>{{ $t("privacy.usage.description") }}</p>
        <ul>
          <li>{{ $t("privacy.usage.item1") }}</li>
          <li>{{ $t("privacy.usage.item2") }}</li>
          <li>{{ $t("privacy.usage.item3") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.cookies.title") }}</h2>
        <p>{{ $t("privacy.cookies.description") }}</p>
        <p>{{ $t("privacy.cookies.thirdParty") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.sharing.title") }}</h2>
        <p>{{ $t("privacy.sharing.description") }}</p>
        <p>{{ $t("privacy.sharing.exceptions") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.security.title") }}</h2>
        <p>{{ $t("privacy.security.description") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.rights.title") }}</h2>
        <p>{{ $t("privacy.rights.description") }}</p>
        <ul>
          <li>{{ $t("privacy.rights.item1") }}</li>
          <li>{{ $t("privacy.rights.item2") }}</li>
          <li>{{ $t("privacy.rights.item3") }}</li>
        </ul>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.changes.title") }}</h2>
        <p>{{ $t("privacy.changes.description") }}</p>
      </div>

      <div class="content-section">
        <h2>{{ $t("privacy.contact.title") }}</h2>
        <p>{{ $t("privacy.contact.description") }}</p>
        <p class="contact-email">{{ $t("privacy.contact.email") }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Privacy Policy 페이지 컴포넌트
</script>

<style scoped>
.privacy-page {
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
