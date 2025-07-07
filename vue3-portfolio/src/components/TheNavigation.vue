<template>
  <nav class="navigation">
    <div class="nav-container">
       <div class="nav-logo">
        <router-link to="/" class="logo-link">
          <span class="logo-icon">⚡</span>
          <span class="logo-text">我的练习集</span>
        </router-link>
       </div>

       <!-- :class 动态类名绑定，控制手机端菜单显示/隐藏 -->
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

       <!-- 手机端汉堡菜单按钮 -->
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

// 控制手机端菜单开关状态
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
  backdrop-filter: blur(10px);  /* 背景模糊效果 */
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

/* LOGO链接样式 */
.logo-link {
  display: flex;      /* 弹性布局 */
  align-items: center; /* 垂直居中 */
  gap: 8px;          /* 图标和文字之间的间距 */
  text-decoration: none; /* 去掉下划线 */
  color: inherit;     /* 继承父元素颜色 */
}

/* LOGO图标样式 */
.logo-icon {
  font-size: 1.5rem;  /* 字体大小 */
  color: var(--tech-green); /* 使用CSS变量定义的绿色 */
}

/* LOGO文字样式 */
.logo-text {
  font-size: 1.2rem;  /* 字体大小 */
  font-weight: 700;   /* 字体粗细（700是粗体） */
  color: var(--tech-text-primary); /* 主要文字颜色（白色） */
  letter-spacing: 1px; /* 字母间距，让文字更有设计感 */
}

/* 导航菜单容器 */
.nav-menu {
  display: flex;      /* 弹性布局，让菜单项横向排列 */
  list-style: none;   /* 去掉列表的小圆点 */
  gap: 2rem;         /* 菜单项之间的间距 */
}

/* 导航链接样式 */
.nav-link {
  color: var(--tech-text-secondary); /* 次要文字颜色（灰色） */
  text-decoration: none;  /* 去掉下划线 */
  padding: 8px 16px;     /* 内边距，增加点击区域 */
  transition: color 0.3s ease; /* 颜色变化的过渡动画 */
  font-weight: 500;      /* 字体粗细 */
  text-transform: uppercase; /* 转换为大写字母 */
  letter-spacing: 0.5px; /* 字母间距 */
  position: relative;    /* 相对定位，为下划线动画做准备 */
}

/* 导航链接的下划线动画效果 */
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

/* 鼠标悬停和当前页面的链接样式 */
.nav-link:hover,
.nav-link.router-link-active {  /* router-link-active 是Vue路由自动添加的当前页面类名 */
  color: var(--tech-green);     /* 变成绿色 */
}

/* 鼠标悬停和当前页面时，下划线出现 */
.nav-link:hover::after,
.nav-link.router-link-active::after {
  width: 80%;
}

/* 手机端汉堡菜单按钮 */
.nav-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

/* 汉堡菜单的三条线 */
.nav-toggle-line {
  width: 25px;
  height: 3px;
  background: var(--tech-green);
  margin: 3px 0;
  transition: all 0.3s ease;
}

/* 响应式设计：当屏幕宽度小于768px时（手机和平板） */
@media (max-width: 768px) {
  /* 显示汉堡菜单按钮 */
  .nav-toggle {
    display: flex;  /* 在手机端显示汉堡按钮 */
  }

  /* 手机端菜单样式 */
  .nav-menu {
    position: fixed;    /* 固定定位 */
    top: 70px;         /* 在导航栏下方 */
    left: 0;           /* 贴着左边 */
    right: 0;          /* 贴着右边 */
    background: var(--tech-black); /* 深色背景 */
    flex-direction: column;         /* 垂直排列菜单项 */
    padding: 2rem;     /* 内边距 */
    transform: translateY(-100%);   /* 初始状态：向上移动100%（隐藏） */
    opacity: 0;        /* 初始状态：完全透明 */
    visibility: hidden; /* 初始状态：不可见 */
    transition: all 0.3s ease;     /* 所有属性的过渡动画 */
  }

  /* 菜单打开时的样式 */
  .nav-menu-open {
    transform: translateY(0); /* 移动到正常位置 */
    opacity: 1;              /* 完全不透明 */
    visibility: visible;     /* 可见 */
  }

  .nav-item {
    margin: 0.5rem 0;
  }
}
</style>
