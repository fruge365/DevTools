<template>
  <div class="frontend-container">
    <n-grid :cols="2" :x-gap="20">
      <!-- 左侧工具区域 -->
      <n-grid-item>
        <n-card title="前端开发工具" class="tool-section">
          <n-grid :cols="2" :x-gap="16" :y-gap="16">
            <n-grid-item v-for="tool in frontendTools" :key="tool.id">
              <n-card 
                hoverable 
                class="tool-card"
                @click="handleToolClick(tool)"
              >
                <div class="tool-content">
                  <div class="tool-icon">{{ tool.icon }}</div>
                  <h4>{{ tool.name }}</h4>
                  <p>{{ tool.description }}</p>
                </div>
              </n-card>
            </n-grid-item>
          </n-grid>
        </n-card>
      </n-grid-item>

      <!-- 右侧常用网站 -->
      <n-grid-item>
        <n-card title="前端常用网站" class="website-section">
          <div v-for="category in websiteCategories" :key="category.id" class="category">
            <div class="category-header">
              <img :src="category.ico" :alt="category.name" class="category-icon" />
              <span class="category-name">{{ category.name }}</span>
            </div>
            <div class="website-grid">
              <n-card 
                v-for="site in category.children" 
                :key="site.name"
                hoverable 
                class="website-card"
                @click="openWebsite(site.url)"
              >
                <div class="website-content">
                  <img :src="site.ico" :alt="site.name" class="website-icon" />
                  <div class="website-info">
                    <span class="website-name">{{ site.name }}</span>
                    <span class="website-desc">{{ site.title }}</span>
                  </div>
                  <n-icon class="arrow-icon">
                    <ArrowForward />
                  </n-icon>
                </div>
              </n-card>
            </div>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'
import { ArrowForward } from '@vicons/ionicons5'

const message = useMessage()

const frontendTools = ref([
  {
    id: 1,
    name: 'JSON格式化',
    description: 'JSON数据格式化和验证',
    icon: '🔧',
    action: 'json-format'
  },
  {
    id: 2,
    name: '颜色转换',
    description: 'RGB、HEX、HSL颜色转换',
    icon: '🎨',
    action: 'color-convert'
  },
  {
    id: 3,
    name: 'Base64编解码',
    description: 'Base64编码解码工具',
    icon: '📝',
    action: 'base64'
  },
  {
    id: 4,
    name: 'MD5加密',
    description: 'MD5哈希加密工具',
    icon: '🔐',
    action: 'md5'
  },
  {
    id: 5,
    name: 'URL编解码',
    description: 'URL编码解码工具',
    icon: '🌐',
    action: 'url-encode'
  },
  {
    id: 6,
    name: '正则表达式',
    description: '正则表达式测试工具',
    icon: '📋',
    action: 'regex'
  }
])

const websiteCategories = ref([
  {
    id: 'frontend',
    name: '前端框架',
    ico: 'https://vuejs.org/logo.svg',
    children: [
      {
        ico: 'https://vuejs.org/logo.svg',
        name: 'Vue.js',
        title: '渐进式JavaScript框架',
        url: 'https://vuejs.org/'
      },
      {
        ico: 'https://reactjs.org/favicon.ico',
        name: 'React',
        title: 'JavaScript库',
        url: 'https://reactjs.org/'
      },
      {
        ico: 'https://angular.io/assets/images/favicons/favicon.ico',
        name: 'Angular',
        title: 'TypeScript框架',
        url: 'https://angular.io/'
      }
    ]
  },
  {
    id: 'tools',
    name: '开发工具',
    ico: '🛠️',
    children: [
      {
        ico: 'https://vitejs.dev/logo.svg',
        name: 'Vite',
        title: '下一代前端构建工具',
        url: 'https://vitejs.dev/'
      },
      {
        ico: 'https://webpack.js.org/favicon.ico',
        name: 'Webpack',
        title: '模块打包器',
        url: 'https://webpack.js.org/'
      },
      {
        ico: 'https://www.naiveui.com/assets/naivelogo.93278402.svg',
        name: 'Naive UI',
        title: 'Vue 3组件库',
        url: 'https://www.naiveui.com/'
      }
    ]
  },
  {
    id: 'resources',
    name: '学习资源',
    ico: '📚',
    children: [
      {
        ico: 'https://developer.mozilla.org/favicon-48x48.cbbd161b5b0b.png',
        name: 'MDN',
        title: 'Web开发文档',
        url: 'https://developer.mozilla.org/'
      },
      {
        ico: 'https://www.w3school.com.cn/ui2019/logo-32-red.png',
        name: 'W3School',
        title: 'Web技术教程',
        url: 'https://www.w3school.com.cn/'
      },
      {
        ico: 'https://www.runoob.com/wp-content/uploads/2016/06/runoob-logo.png',
        name: '菜鸟教程',
        title: '编程入门教程',
        url: 'https://www.runoob.com/'
      }
    ]
  }
])

const handleToolClick = (tool) => {
  message.info(`点击了${tool.name}工具`)
  // 这里可以添加具体的工具逻辑
}

const openWebsite = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.frontend-container {
  padding: 0;
}

.tool-section, .website-section {
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background: #ffffff;
  margin-bottom: 24px;
}

:deep(.n-card-header) {
  background: #fafafa;
  border-bottom: 1px solid #ebeef5;
  padding: 16px 20px;
}

:deep(.n-card-header .n-card-header__main) {
  font-weight: 500;
  font-size: 16px;
  color: #303133;
}

.tool-card {
  cursor: pointer;
  transition: all 0.3s ease;
  height: 120px;
  border: 1px solid #ebeef5;
  border-radius: 6px;
  background: #ffffff;
}

.tool-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: #409eff;
}

.tool-content {
  text-align: center;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.tool-icon {
  font-size: 24px;
  margin-bottom: 8px;
}

.tool-content h4 {
  margin: 8px 0 4px 0;
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}

.tool-content p {
  margin: 0;
  color: #909399;
  font-size: 12px;
  line-height: 1.4;
}

.category {
  margin-bottom: 24px;
}

.category-header {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  padding: 12px 16px;
  background: #f5f7fa;
  border-radius: 6px;
  border: 1px solid #e4e7ed;
}

.category-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.category-name {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
}

.website-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.website-card {
  cursor: pointer;
  transition: all 0.3s ease;
  background: #ffffff;
  border: 1px solid #ebeef5;
  border-radius: 6px;
}

.website-card:hover {
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.website-content {
  display: flex;
  align-items: center;
  padding: 12px 16px;
}

.website-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 4px;
}

.website-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.website-name {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  margin-bottom: 2px;
}

.website-desc {
  font-size: 12px;
  color: #909399;
  line-height: 1.4;
}

.arrow-icon {
  color: #c0c4cc;
  transition: color 0.3s ease;
}

.website-card:hover .arrow-icon {
  color: #409eff;
}
</style>