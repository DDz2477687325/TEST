<template>
  <div class="home-page">
    <!-- 英雄区域 -->
    <section class="hero-section">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">
              <span class="greeting">你好，我是</span>
              <span class="name">{{ userInfo.name }}</span>
              <span class="role">{{ userInfo.title }}</span>
            </h1>
            <p class="hero-description">{{ userInfo.bio }}</p>
            <div class="hero-buttons">
              <router-link to="/projects" class="btn btn-primary">查看项目</router-link>
              <router-link to="/about" class="btn btn-secondary">关于我</router-link>
            </div>
          </div>
          <div class="hero-avatar">
            <div class="avatar-container">
              <img
                :src="userInfo.avatar"
                :alt="userInfo.name"
                class="avatar-image"
                @error="handleImageError"
              >
              <div class="avatar-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 技能展示 -->
    <section class="skills-section">
      <div class="container">
        <h2 class="section-title">技术技能</h2>
        <div class="skills-grid">
          <div
            v-for="skill in userInfo.skills"
            :key="skill"
            class="skill-item"
          >
            {{ skill }}
          </div>
        </div>
      </div>
    </section>

    <!-- 精选项目 -->
    <section class="projects-section">
      <div class="container">
        <h2 class="section-title">精选项目</h2>
        <div class="projects-grid">
          <div
            v-for="project in featuredProjects"
            :key="project.id"
            class="project-card"
            @click="openProject(project)"
          >
            <div class="project-image">
              <img
                :src="project.image"
                :alt="project.title"
                @error="handleImageError"
              >
              <div class="project-overlay">
                <span class="project-view">查看项目</span>
              </div>
            </div>
            <div class="project-info">
              <h3 class="project-title">{{ project.title }}</h3>
              <p class="project-description">{{ project.description }}</p>
              <div class="project-tech">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="tech-tag"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="section-actions">
          <router-link to="/projects" class="btn btn-outline">
            查看所有项目
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'
import { useProjectsStore } from '@/stores/projects'

const userStore = useUserStore()
const projectsStore = useProjectsStore()

// storeToRefs 保持响应式，直接解构会失去响应性
const { userInfo } = storeToRefs(userStore)
const { featuredProjects } = storeToRefs(projectsStore)

const openProject = (project) => {
  if (project.demoUrl && project.demoUrl !== '#') {
    window.open(project.demoUrl, '_blank')
  } else {
    alert(`${project.title} 的详情页面正在开发中...`)
  }
}

// 图片加载失败时显示备用图片
const handleImageError = (event) => {
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjMUExQTFBIi8+Cjx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iNDAiIGZpbGw9IiMwMEZGNDEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7imqE8L3RleHQ+Cjwvc3ZnPgo='
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 英雄区域 */
.hero-section {
  min-height: 80vh;
  display: flex;
  align-items: center;
  padding: 2rem 0;
}

/* Grid布局：左文字右头像 */
.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  width: 100%;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
}

.greeting {
  display: block;
  color: var(--tech-text-secondary);
  font-size: 1.5rem;
  font-weight: 400;
}

/* 姓名发光动画效果 */
.name {
  display: block;
  color: var(--tech-green);
  text-shadow: 0 0 20px var(--tech-green-glow);
  animation: nameGlow 3s ease-in-out infinite alternate;
}

.role {
  display: block;
  color: var(--tech-text-primary);
  font-size: 2rem;
}

@keyframes nameGlow {
  0% { text-shadow: 0 0 20px var(--tech-green-glow); }
  100% { text-shadow: 0 0 30px var(--tech-green-glow); }
}

.hero-description {
  font-size: 1.2rem;
  color: var(--tech-text-secondary);
  line-height: 1.6;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
}

/* 头像区域样式 */
.avatar-container {
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto;
}

.avatar-image {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--tech-green);
  position: relative;
  z-index: 2;
}

/* 头像发光效果 */
.avatar-glow {
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  border-radius: 50%;
  background: radial-gradient(circle, var(--tech-green-glow) 0%, transparent 70%);
  animation: avatarPulse 3s ease-in-out infinite;
  z-index: 1;
}

/* 头像脉冲动画 */
@keyframes avatarPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

/* 通用按钮样式 */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border: 2px solid var(--tech-green);
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

/* 按钮的滑动填充效果 */
.btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--tech-green);
  transition: left 0.3s ease;
  z-index: -1;
}

.btn:hover {
  color: var(--tech-black);
  box-shadow: 0 0 15px var(--tech-green-glow);
}

/* 悬停时，滑动填充效果 */
.btn:hover::before {
  left: 0;
}

.btn-primary {
  background: var(--tech-green);
  color: var(--tech-black);
}

.btn-secondary {
  background: transparent;
  color: var(--tech-green);
}

.btn-outline {
  background: transparent;
  color: var(--tech-green);
}

/* 区块标题 */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: var(--tech-text-primary);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: var(--tech-green);
}

/* 技能区域 */
.skills-section {
  padding: 4rem 0;
  background: linear-gradient(135deg, rgba(26, 26, 26, 0.8) 0%, rgba(13, 13, 13, 0.9) 100%);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
}

.skill-item {
  background: var(--tech-card);
  border: 1px solid var(--tech-border);
  padding: 1.5rem;
  text-align: center;
  font-weight: 600;
  color: var(--tech-green);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.skill-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--tech-green);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px var(--tech-green-glow);
}

.skill-item:hover::before {
  transform: scaleX(1);
}

/* 项目区域 */
.projects-section {
  padding: 4rem 0;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.project-card {
  background: var(--tech-card);
  border: 1px solid var(--tech-border);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--tech-green);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px var(--tech-green-glow);
}

.project-card:hover::before {
  transform: scaleX(1);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-view {
  color: var(--tech-green);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-card:hover .project-image img {
  transform: scale(1.1);
}

.project-info {
  padding: 1.5rem;
}

.project-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: var(--tech-text-primary);
  margin-bottom: 0.5rem;
}

.project-description {
  color: var(--tech-text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tech-tag {
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid var(--tech-green);
  color: var(--tech-green);
  padding: 0.25rem 0.75rem;
  font-size: 0.8rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.section-actions {
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .role {
    font-size: 1.5rem;
  }

  .avatar-container {
    width: 200px;
    height: 200px;
  }

  .hero-buttons {
    justify-content: center;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
