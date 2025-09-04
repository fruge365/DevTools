<template>
  <div class="about-container">
    <n-card title="关于本站" class="main-card">
      <div class="about-content">
        <n-grid :cols="2" :x-gap="40" :y-gap="32">
          <n-grid-item>
            <div class="info-section">
              <div class="section-header">
                <h3>🚀 项目介绍</h3>
              </div>
              <p class="project-desc">
                DevTools是一个基于Vue3 + Vite + Naive UI构建的现代化开发者工具箱，
                旨在为开发者提供便捷、高效的在线工具集合。从v2的Vue2架构全面升级到v3，
                带来更好的性能和开发体验。
              </p>
              
              <div class="section-header">
                <h3>🛠️ 技术栈</h3>
              </div>
              <n-space wrap>
                <n-tag type="success" size="large">Vue 3.4.37</n-tag>
                <n-tag type="info" size="large">Vite 5.4.1</n-tag>
                <n-tag type="warning" size="large">Naive UI 2.40.1</n-tag>
                <n-tag type="error" size="large">Pinia 2.2.2</n-tag>
                <n-tag size="large">Vue Router 4</n-tag>
                <n-tag size="large">Sass</n-tag>
              </n-space>
              
              <div class="section-header">
                <h3>✨ 功能特性</h3>
              </div>
              <div class="feature-list">
                <div class="feature-item">
                  <span class="feature-icon">🚀</span>
                  <span>基于Vue3 Composition API，代码更简洁</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">⚡</span>
                  <span>Vite构建，开发体验极佳，HMR秒级更新</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🎨</span>
                  <span>Naive UI组件库，界面美观现代</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">📱</span>
                  <span>响应式设计，完美支持移动端</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🔧</span>
                  <span>丰富的开发工具集合，提升效率</span>
                </div>
                <div class="feature-item">
                  <span class="feature-icon">🔥</span>
                  <span>实时热点资讯，掌握最新动态</span>
                </div>
              </div>
            </div>
          </n-grid-item>
          
          <n-grid-item>
            <div class="contact-section">
              <div class="section-header">
                <h3>📞 联系方式</h3>
              </div>
              <n-space vertical size="large">
                <div class="contact-item">
                  <n-tag type="info" size="large">
                    👨‍💻 作者：amoureux555
                  </n-tag>
                </div>
                <div class="contact-item">
                  <n-tag type="success" size="large">
                    📧 邮箱：contact@example.com
                  </n-tag>
                </div>
                <div class="contact-item">
                  <n-button 
                    text 
                    tag="a" 
                    href="https://github.com/amoureux555" 
                    target="_blank"
                    size="large"
                  >
                    🐙 GitHub：github.com/amoureux555
                  </n-button>
                </div>
                <div class="contact-item">
                  <n-button 
                    text 
                    tag="a" 
                    href="http://amoureux555.top" 
                    target="_blank"
                    size="large"
                  >
                    🌐 个人博客：amoureux555.top
                  </n-button>
                </div>
              </n-space>
              
              <div class="section-header">
                <h3>📊 版本信息</h3>
              </div>
              <n-descriptions :column="1" bordered size="large">
                <n-descriptions-item label="当前版本">
                  <n-tag type="success">v3.0.0</n-tag>
                </n-descriptions-item>
                <n-descriptions-item label="发布日期">2024-01-15</n-descriptions-item>
                <n-descriptions-item label="构建工具">Vite 5.4.1</n-descriptions-item>
                <n-descriptions-item label="Vue版本">3.4.37</n-descriptions-item>
                <n-descriptions-item label="上次更新">
                  {{ lastUpdateTime }}
                </n-descriptions-item>
              </n-descriptions>
              
              <div class="section-header">
                <h3>📈 项目统计</h3>
              </div>
              <n-grid :cols="2" :x-gap="16" :y-gap="16">
                <n-grid-item>
                  <n-statistic label="总访问量" :value="statistics.totalVisits">
                    <template #suffix>
                      <span style="font-size: 14px;">次</span>
                    </template>
                  </n-statistic>
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="工具使用" :value="statistics.toolUsage">
                    <template #suffix>
                      <span style="font-size: 14px;">次</span>
                    </template>
                  </n-statistic>
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="代码行数" :value="statistics.codeLines">
                    <template #suffix>
                      <span style="font-size: 14px;">行</span>
                    </template>
                  </n-statistic>
                </n-grid-item>
                <n-grid-item>
                  <n-statistic label="组件数量" :value="statistics.components">
                    <template #suffix>
                      <span style="font-size: 14px;">个</span>
                    </template>
                  </n-statistic>
                </n-grid-item>
              </n-grid>
            </div>
          </n-grid-item>
        </n-grid>
        
        <n-divider />
        
        <div class="footer-info">
          <div class="footer-content">
            <p class="copyright">© 2024 DevTools. All rights reserved.</p>
            <p class="beian">
              <n-button 
                text 
                tag="a" 
                href="https://beian.miit.gov.cn" 
                target="_blank"
                size="small"
              >
                苏ICP备2022039794号-2
              </n-button>
            </p>
            <p class="thanks">感谢您的使用，让我们一起构建更好的开发工具！</p>
          </div>
        </div>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const statistics = ref({
  totalVisits: 12580,
  toolUsage: 8964,
  codeLines: 5420,
  components: 28
})

const lastUpdateTime = computed(() => {
  return new Date().toLocaleDateString('zh-CN')
})
</script>

<style scoped>
.about-container {
  padding: 24px;
  min-height: calc(100vh - 48px);
}

.main-card {
  max-width: 1200px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

:deep(.n-card-header) {
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  padding: 32px;
  text-align: center;
}

:deep(.n-card-header .n-card-header__main) {
  font-size: 28px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.about-content {
  padding: 40px 32px;
}

.section-header {
  margin-bottom: 24px;
}

.section-header h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  padding-bottom: 8px;
}

.section-header h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2px;
}

.project-desc {
  margin-bottom: 40px;
  line-height: 1.8;
  color: #666;
  font-size: 16px;
  text-align: justify;
  padding: 24px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 16px;
  border-left: 4px solid #667eea;
}

.feature-list {
  margin-bottom: 40px;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.feature-item::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  transform: scaleY(0);
  transition: transform 0.4s ease;
}

.feature-item:hover::before {
  transform: scaleY(1);
}

.feature-item:hover {
  background: rgba(255, 255, 255, 0.95);
  transform: translateX(8px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
}

.feature-icon {
  font-size: 24px;
  margin-right: 16px;
  width: 32px;
  text-align: center;
  transition: transform 0.3s ease;
}

.feature-item:hover .feature-icon {
  transform: scale(1.2);
}

.contact-section {
  padding-left: 24px;
}

.contact-item {
  margin-bottom: 16px;
}

:deep(.n-tag) {
  padding: 12px 20px;
  border-radius: 12px;
  font-weight: 500;
  transition: all 0.3s ease;
}

:deep(.n-tag:hover) {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
}

.footer-info {
  text-align: center;
  margin-top: 48px;
  padding: 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  color: white;
  position: relative;
  overflow: hidden;
}

.footer-info::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: rotate 15s linear infinite;
}

.footer-content {
  position: relative;
  z-index: 1;
}

.footer-content p {
  margin: 12px 0;
}

.copyright {
  font-size: 18px;
  font-weight: 700;
}

.beian {
  font-size: 14px;
  opacity: 0.9;
}

.thanks {
  font-size: 16px;
  font-style: italic;
  opacity: 0.9;
  margin-top: 20px;
  font-weight: 300;
}

:deep(.n-descriptions) {
  margin-bottom: 32px;
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  overflow: hidden;
}

:deep(.n-statistic) {
  text-align: center;
  padding: 24px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s ease;
}

:deep(.n-statistic:hover) {
  transform: translateY(-4px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.15);
}

:deep(.n-statistic-value) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 700;
  font-size: 28px;
}

:deep(.n-statistic-label) {
  color: #666;
  font-weight: 600;
  margin-bottom: 8px;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>