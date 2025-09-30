<template>
  <div class="main-home">
    <!-- 헤더 -->
    <div class="main-header">
      <div class="main-title">{{ $t("mainHome.title") }}</div>
      <div class="main-subtitle">{{ $t("mainHome.subtitle") }}</div>
      <div class="language-selector-container">
        <LanguageSelector />
      </div>
    </div>

    <!-- 메뉴 카드들 -->
    <div class="menu-cards">
      <!-- 12간지로 보기 -->
      <div class="menu-card active" @click="goToZodiac">
        <div class="menu-content">
          <div class="menu-icon">🐭</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.zodiac.title") }}</div>
          </div>
        </div>
      </div>

      <!-- 별자리로 보기 (준비중) -->
      <div class="menu-card disabled">
        <div class="menu-content">
          <div class="menu-icon">⭐</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.constellation.title") }}</div>
          </div>
        </div>
        <div class="coming-soon">{{ $t("mainHome.comingSoon") }}</div>
      </div>

      <!-- 혈액형으로 보기 (준비중) -->
      <div class="menu-card disabled">
        <div class="menu-content">
          <div class="menu-icon">🩸</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.bloodType.title") }}</div>
          </div>
        </div>
        <div class="coming-soon">{{ $t("mainHome.comingSoon") }}</div>
      </div>

      <!-- MBTI로 보기 (준비중) -->
      <div class="menu-card disabled">
        <div class="menu-content">
          <div class="menu-icon">🔤</div>
          <div class="menu-text">
            <div class="menu-title">{{ $t("mainHome.mbti.title") }}</div>
          </div>
        </div>
        <div class="coming-soon">{{ $t("mainHome.comingSoon") }}</div>
      </div>
    </div>

    <!-- 개인정보보호방침 -->
    <div class="privacy-section">
      <button @click="showPrivacyPolicy" class="privacy-btn">
        {{ $t("mainHome.privacyPolicy") }}
      </button>
    </div>

    <!-- 개인정보보호방침 모달 -->
    <div v-if="showPrivacyModal" class="modal-overlay" @click="closePrivacyModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h3>{{ $t("mainHome.privacyTitle") }}</h3>
          <button @click="closePrivacyModal" class="close-btn">×</button>
        </div>
        <div class="modal-body">
          <p>{{ $t("mainHome.privacyContent") }}</p>
        </div>
        <div class="modal-footer">
          <button @click="closePrivacyModal" class="confirm-btn">
            {{ $t("mainHome.confirm") }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import LanguageSelector from "@/components/LanguageSelector.vue";

const router = useRouter();
const { t } = useI18n();
const showPrivacyModal = ref(false);

// 12간지 내 정보 선택으로 이동
const goToZodiac = () => {
  router.push("/zodiac/my-info");
};

// 개인정보보호방침 표시
const showPrivacyPolicy = () => {
  showPrivacyModal.value = true;
};

// 개인정보보호방침 닫기
const closePrivacyModal = () => {
  showPrivacyModal.value = false;
};
</script>
