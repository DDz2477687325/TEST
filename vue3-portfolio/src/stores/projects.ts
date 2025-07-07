import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  demoUrl?: string
  githubUrl?: string
  featured: boolean
}

export const useProjectsStore = defineStore('projects', () => {
  const projects = ref([
    {
      id: 1,
      title: '⚡ 科技风格个人名片',
      description: '采用绿色科技风格设计的个人名片页面，包含霓虹发光效果、脉冲动画和科技感交互。',
      image: '/images/avatar.jpeg',
      technologies: ['HTML5', 'CSS3', '科技风格', '响应式'],
      demoUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: '⚡ 科技风格图片展示',
      description: '绿色科技风格的作品展示页面，包含CSS Grid布局、炫酷模态框和动态背景特效。',
      image: '/images/avatar.jpeg',
      technologies: ['CSS Grid', 'JavaScript', '模态框', '科技风格'],
      demoUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: '⚡ Vue3个人作品集',
      description: '使用Vue3、TypeScript构建的现代化个人作品集网站，包含路由、状态管理等功能。',
      image: '/images/avatar.jpeg',
      technologies: ['Vue3', 'TypeScript', 'Pinia', 'Vue Router'],
      demoUrl: '#',
      featured: false
    }
  ])

  const featuredProjects = computed(() =>
    projects.value.filter(project => project.featured)
  )

  const projectCount = computed(() => projects.value.length)

  return {
    projects,
    featuredProjects,
    projectCount
  }
})
