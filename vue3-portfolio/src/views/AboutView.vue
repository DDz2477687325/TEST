<template>
  <div class="about-page">
    <div class="container">
      <h1 class="page-title">关于我</h1>
      <div class="about-content">
        <div class="about-text">
          <h2>个人简介</h2>
          <p>{{ userInfo.bio }}</p>

          <h2>技能特长</h2>
          <div class="skills-list">
            <div v-for="skill in userInfo.skills" :key="skill" class="skill-tag">
              {{ skill }}
            </div>
          </div>

          <h2>联系方式</h2>
          <div class="contact-info">
            <p><strong>邮箱：</strong>{{ userInfo.email }}</p>
            <p><strong>位置：</strong>{{ userInfo.location }}</p>
            <p><strong>状态：</strong>寻求前端开发实习机会</p>
            <p><strong>实习时长：</strong>3个月以上</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useUserStore } from '@/stores/user'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
</script>

<style scoped>
.about-page {
  min-height: 100vh;
  padding: 2rem 0;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
}

.page-title {
  color: var(--tech-green);
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 2rem;
}

.about-text h2 {
  color: var(--tech-text-primary);
  font-size: 1.5rem;
  margin: 2rem 0 1rem 0;
  border-left: 3px solid var(--tech-green);
  padding-left: 1rem;
}

.about-text p {
  color: var(--tech-text-secondary);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.skills-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.skill-tag {
  background: rgba(0, 255, 65, 0.1);
  border: 1px solid var(--tech-green);
  color: var(--tech-green);
  padding: 0.5rem 1rem;
  font-weight: 500;
}

.contact-info p {
  margin: 0.5rem 0;
}
</style>
