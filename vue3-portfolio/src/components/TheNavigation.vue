<template>
  <nav class="navigation">
    <div class="nav-container">
      <!-- LOGO -->
       <div class="nav-logo">
        <router-link to="/" class="logo-link">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">我的练习集</span>
        </router-link>
       </div>


       <ul class="nav-menu" :class="{'nav-menu-open': isMenuOpen}">
        <li class="nav-item">
          <router-link to="/" class="nav-link" @click="closeMenu">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about" class="nav-link" @click="closeMenu">关于我</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link" @click="closeMenu">项目展示</router-link>
        </li>
       </ul>

       <button class="nav-toggle" @click="toggleMenu">
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
        <span class="nav-toggle-line"></span>
       </button>
    </div>
  </nav>
</template>


<script setup>
import { ref } from 'vue'

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(13, 13, 13, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--tech-green);
  z-index: 1000;
  height: 70px;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.logo-link {
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: inherit;
}

.logo-icon {
  font-size: 1.5rem;
  color: var(--tech-green);
}

.logo-text {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--tech-text-primary);
  letter-spacing: 1px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 2rem;
}

.nav-link {
  color: var(--tech-text-secondary);
  text-decoration: none;
  padding: 8px 16px;
  transition: color 0.3s ease;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 2px;
  background: var(--tech-green);
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: var(--tech-green);
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}

.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.nav-toggle-line {
  width: 25px;
  height: 3px;
  background: var(--tech-green);
  margin: 3px 0;
  transition: all 0.3s ease;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .nav-toggle {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--tech-black);
    flex-direction: column;
    padding: 2rem;
    transform: translateY(-100%);
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  .nav-menu-open {
    transform: translateY(0);
    opacity: 1;
    visibility: visible;
  }

  .nav-item {
    margin: 0.5rem 0;
  }
}
</style>