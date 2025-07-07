<template>
  <div class="projects-page">
    <div class="container">
      <h1 class="page-title">项目展示</h1>
      <div class="projects-grid">
        <div
          v-for="project in projects"
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
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useProjectsStore } from '@/stores/projects'

const projectsStore = useProjectsStore()
const { projects } = storeToRefs(projectsStore)

const openProject = (project) => {
  if (project.demoUrl && project.demoUrl !== '#') {
    window.open(project.demoUrl, '_blank')
  } else {
    alert(`${project.title} 的详情页面正在开发中...`)
  }
}

// 处理图片加载失败
const handleImageError = (event) => {
  // 如果图片加载失败，使用备用图片
  event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDQwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSI0MDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjMUExQTFBIi8+Cjx0ZXh0IHg9IjIwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMzAiIGZpbGw9IiMwMEZGNDEiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj7imqE8L3RleHQ+Cjwvc3ZnPgo='
}
</script>

<style scoped>
.projects-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  color: var(--tech-green);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--tech-card);
  border: 1px solid var(--tech-border);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 35px var(--tech-green-glow);
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
}
</style>
