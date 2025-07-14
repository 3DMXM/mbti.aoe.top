<template>
  <div class="app-wrapper">
    <nav class="nav">
      <div class="container nav-content">
        <router-link to="/" class="nav-brand">MBTI测试</router-link>

        <!-- 移动端汉堡菜单按钮 -->
        <button class="mobile-menu-btn" @click="toggleMobileMenu" :class="{ active: isMobileMenuOpen }">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- 导航链接 -->
        <div class="nav-links" :class="{ 'mobile-open': isMobileMenuOpen }">
          <router-link to="/" class="nav-link" @click="closeMobileMenu">首页</router-link>
          <router-link to="/test" class="nav-link" @click="closeMobileMenu">开始测试</router-link>
          <router-link to="/about" class="nav-link" @click="closeMobileMenu">关于MBTI</router-link>
        </div>

        <!-- 移动端遮罩层 -->
        <div class="mobile-overlay" v-if="isMobileMenuOpen" @click="closeMobileMenu"></div>
      </div>
    </nav>
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="footer">
      <div class="container">
        <p>&copy; {{ currentYear }} MBTI测试 | 了解自己，发现潜能</p>
      </div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

const currentYear = computed(() => new Date().getFullYear())

// 移动端菜单状态
const isMobileMenuOpen = ref(false)

// 切换移动端菜单
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
  padding: 4rem 0;
}

.footer {
  background: rgba(0, 0, 0, 0.2);
  padding: 1.5rem 0;
  text-align: center;
  color: white;
  backdrop-filter: blur(10px);
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 1001;
}

.mobile-menu-btn span {
  width: 25px;
  height: 3px;
  background: white;
  margin: 3px 0;
  transition: 0.3s;
  border-radius: 1.5px;
}

.mobile-menu-btn.active span:nth-child(1) {
  transform: rotate(-45deg) translate(-6px, 6px);
}

.mobile-menu-btn.active span:nth-child(2) {
  opacity: 0;
}

.mobile-menu-btn.active span:nth-child(3) {
  transform: rotate(45deg) translate(-6px, -6px);
}

/* 移动端遮罩层 */
.mobile-overlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

/* 移动端响应式 */
@media (max-width: 768px) {
  .mobile-menu-btn {
    display: flex;
  }

  .mobile-overlay {
    display: block;
  }

  main {
    padding: 2rem 0;
  }
}
</style>
