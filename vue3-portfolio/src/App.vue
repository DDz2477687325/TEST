<template>
  <!-- 整个网站的根容器 -->
  <div id="app">
    <!-- 导航栏组件，在所有页面都会显示 -->
    <TheNavigation />

    <!-- 主要内容区域 -->
    <main class="main-content">
      <!-- 路由视图：根据URL显示不同的页面组件 -->
      <!-- v-slot="{ Component }" 是Vue3的新语法，获取当前要显示的组件 -->
      <router-view v-slot="{ Component }">
        <!-- 页面切换动画：当路由变化时，页面会有过渡效果 -->
        <!-- mode="out-in" 表示先让旧页面消失，再让新页面出现 -->
        <transition name="page" mode="out-in">
          <!-- 动态组件：根据路由显示对应的页面 -->
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<script setup>
// 导入导航栏组件
// 这是Vue3的新语法，比以前的写法更简洁
import TheNavigation from './components/TheNavigation.vue'
</script>

<style>
/* 整个应用的根样式 */
#app {
  min-height: 100vh; /* 至少占满整个屏幕高度 */
}

/* 主内容区域样式 */
.main-content {
  padding-top: 70px; /* 给顶部留出导航栏的空间，因为导航栏是固定定位的 */
}

/* 页面切换动画效果 */
/* 这些CSS类名是Vue的transition组件自动添加的 */

/* 进入和离开时的过渡效果 */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease; /* 所有属性在0.3秒内平滑过渡 */
}

/* 新页面进入时的起始状态：透明且向下偏移 */
.page-enter-from {
  opacity: 0;           /* 完全透明 */
  transform: translateY(20px); /* 向下偏移20像素 */
}

/* 旧页面离开时的结束状态：透明且向上偏移 */
.page-leave-to {
  opacity: 0;           /* 完全透明 */
  transform: translateY(-20px); /* 向上偏移20像素 */
}
</style>
