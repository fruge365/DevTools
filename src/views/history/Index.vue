<template>
  <div class="history-container">
    <n-card title="更新日志" class="main-card">
      <n-timeline>
        <n-timeline-item
          v-for="log in updateLogs"
          :key="log.version"
          :type="log.type"
          :title="log.version"
          :time="log.date"
        >
          <div class="log-content">
            <div class="log-description">{{ log.description }}</div>
            <ul class="change-list">
              <li v-for="item in log.changes" :key="item" class="change-item">
                {{ item }}
              </li>
            </ul>
          </div>
        </n-timeline-item>
      </n-timeline>
    </n-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const updateLogs = ref([
  {
    version: 'v3.0.0',
    date: '2024-01-15',
    type: 'success',
    description: '重大版本升级，全面拥抱Vue3生态',
    changes: [
      '🚀 升级到Vue3 + Composition API',
      '⚡ 使用Vite替换Vue CLI，构建速度提升300%',
      '🎨 使用Naive UI替换Element UI，界面更现代化',
      '📦 使用Pinia替换Vuex，状态管理更简洁',
      '🔧 重构所有组件，使用<script setup>语法',
      '📱 优化移动端适配',
      '🛠️ 新增多个实用开发工具',
      '🔍 优化热搜数据获取逻辑'
    ]
  },
  {
    version: 'v2.1.17',
    date: '2023-12-01',
    type: 'info',
    description: '功能增强和体验优化',
    changes: [
      '🔥 新增热点排行功能',
      '📊 支持百度热搜、贴吧热议等多个榜单',
      '🎯 优化前端工具集，新增JSON格式化等工具',
      '🐛 修复已知bug，提升系统稳定性',
      '💫 优化页面加载动画效果',
      '📈 提升用户体验和界面响应速度'
    ]
  },
  {
    version: 'v2.1.0',
    date: '2023-10-15',
    type: 'warning',
    description: '架构重构和功能扩展',
    changes: [
      '🏗️ 重构代码结构，提升可维护性',
      '🛠️ 新增后端工具集合',
      '🎨 优化界面设计，采用卡片式布局',
      '📱 增加响应式支持，适配多种设备',
      '🔧 优化构建配置，减少包体积',
      '📚 完善文档和注释'
    ]
  },
  {
    version: 'v2.0.0',
    date: '2023-08-20',
    type: 'error',
    description: '项目初始版本发布',
    changes: [
      '🎉 项目正式上线',
      '💻 基于Vue2 + Element UI构建',
      '🌐 提供前端常用工具集合',
      '📋 支持常用正则表达式',
      '🔗 整合开发常用网站链接',
      '📝 提供留言反馈功能'
    ]
  }
])
</script>

<style scoped>
.history-container {
  padding: 20px;
}

.main-card {
  max-width: 1000px;
  margin: 0 auto;
}

.log-content {
  margin-top: 8px;
}

.log-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
  font-style: italic;
}

.change-list {
  margin: 0;
  padding-left: 0;
  list-style: none;
}

.change-item {
  margin-bottom: 8px;
  padding: 8px 12px;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 3px solid #2080f0;
  color: #333;
  font-size: 14px;
  line-height: 1.5;
  transition: all 0.3s ease;
}

.change-item:hover {
  background: #e8f4fd;
  transform: translateX(4px);
}

:deep(.n-timeline-item-content) {
  padding-bottom: 24px;
}

:deep(.n-timeline-item-meta) {
  font-size: 12px;
  color: #999;
}
</style>