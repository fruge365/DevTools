<template>
  <div class="index-container">
    <n-card title="开发者工具箱" class="welcome-card">
      <div class="welcome-content">
        <h2>欢迎使用开发者工具箱</h2>
        <p>基于Vue3 + Vite + Naive UI构建的现代化开发工具集合</p>
        
        <n-grid :cols="3" :x-gap="20" :y-gap="20" class="feature-grid">
          <n-grid-item v-for="feature in features" :key="feature.id">
            <n-card hoverable class="feature-card">
              <div class="feature-content">
                <n-icon size="40" :color="feature.color">
                  <component :is="feature.icon" />
                </n-icon>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </n-card>
          </n-grid-item>
        </n-grid>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    id: 1,
    title: '前端工具',
    description: 'JSON格式化、颜色转换、Base64等',
    color: '#18a058'
  },
  {
    id: 2,
    title: '后端工具',
    description: 'SQL格式化、UUID生成、时间戳等',
    color: '#2080f0'
  },
  {
    id: 3,
    title: '热点资讯',
    description: '百度热搜、微博热搜实时更新',
    color: '#f0a020'
  }
])
</script>

<style scoped>
.index-container {
  padding: 0;
}

.welcome-card {
  border: none;
  box-shadow: none;
  background: transparent;
}

:deep(.n-card-header) {
  background: transparent;
  padding: 48px 0 24px 0;
  text-align: center;
  border: none;
}

:deep(.n-card-header .n-card-header__main) {
  font-size: 36px;
  font-weight: 300;
  color: #2c3e50;
  margin-bottom: 16px;
}

.welcome-content {
  text-align: center;
  padding: 0 24px 48px 24px;
}

.welcome-content h2 {
  margin-bottom: 16px;
  font-size: 36px;
  font-weight: 300;
  color: #2c3e50;
}

.welcome-content p {
  margin-bottom: 48px;
  color: #606266;
  font-size: 16px;
  line-height: 1.8;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.feature-grid {
  margin-top: 0;
}

.feature-card {
  height: 200px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background: #ffffff;
}

.feature-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  border-color: #409eff;
}

.feature-content {
  text-align: center;
  padding: 32px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.feature-content h3 {
  margin: 16px 0 8px 0;
  font-size: 18px;
  font-weight: 500;
  color: #303133;
}

.feature-content p {
  margin: 0;
  color: #606266;
  font-size: 14px;
  line-height: 1.5;
}
</style>
