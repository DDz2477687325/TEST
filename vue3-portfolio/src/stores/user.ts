import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    name: '朱贵龙',
    title: '前端开发实习生',
    email: '2477687325@qq.com',
    location: '深圳市',
    bio: '2025届计算机科学与技术专业应届生，熟悉现代前端开发技术，持续学习并且喜欢前端。',
    skills: ['HTML/CSS/JS', 'Vue3', 'TypeScript', 'Node.js', 'Python', 'SQL'],
    avatar: '/images/avatar.jpeg'
  })

  // 使用展开运算符合并新旧数据
  const updateUserInfo = (newInfo: any) => {
    userInfo.value = { ...userInfo.value, ...newInfo }
  }

  return {
    userInfo,
    updateUserInfo
  }
})
