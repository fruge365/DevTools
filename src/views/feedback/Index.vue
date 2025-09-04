<template>
  <div class="feedback-container">
    <n-card title="留言反馈" class="main-card">
      <div class="feedback-intro">
        <p>欢迎提出您的宝贵意见和建议，帮助我们不断改进和完善！</p>
      </div>
      
      <n-form
        ref="formRef"
        :model="formData"
        :rules="rules"
        label-placement="top"
        size="large"
      >
        <n-grid :cols="2" :x-gap="24">
          <n-grid-item>
            <n-form-item label="姓名" path="name">
              <n-input 
                v-model:value="formData.name" 
                placeholder="请输入您的姓名"
                :maxlength="20"
                show-count
              />
            </n-form-item>
          </n-grid-item>
          <n-grid-item>
            <n-form-item label="邮箱" path="email">
              <n-input 
                v-model:value="formData.email" 
                placeholder="请输入您的邮箱"
                :maxlength="50"
              />
            </n-form-item>
          </n-grid-item>
        </n-grid>
        
        <n-form-item label="反馈类型" path="type">
          <n-select
            v-model:value="formData.type"
            placeholder="请选择反馈类型"
            :options="typeOptions"
          />
        </n-form-item>
        
        <n-form-item label="反馈内容" path="content">
          <n-input
            v-model:value="formData.content"
            type="textarea"
            placeholder="请详细描述您的问题或建议，我们会认真对待每一条反馈..."
            :rows="6"
            :maxlength="500"
            show-count
          />
        </n-form-item>
        
        <n-form-item>
          <n-space>
            <n-button 
              type="primary" 
              @click="handleSubmit" 
              :loading="loading"
              size="large"
            >
              提交反馈
            </n-button>
            <n-button @click="handleReset" size="large">
              重置
            </n-button>
          </n-space>
        </n-form-item>
      </n-form>
      
      <!-- 联系方式 -->
      <n-divider />
      <div class="contact-info">
        <h3>其他联系方式</h3>
        <n-space>
          <n-tag type="info">
            📧 邮箱：contact@example.com
          </n-tag>
          <n-tag type="success">
            🌐 博客：amoureux555.top
          </n-tag>
          <n-tag type="warning">
            💬 QQ群：123456789
          </n-tag>
        </n-space>
      </div>
    </n-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useMessage } from 'naive-ui'

const message = useMessage()
const formRef = ref(null)
const loading = ref(false)

const formData = ref({
  name: '',
  email: '',
  type: null,
  content: ''
})

const typeOptions = [
  { 
    label: '🐛 Bug反馈', 
    value: 'bug',
    description: '发现了系统错误或异常'
  },
  { 
    label: '💡 功能建议', 
    value: 'feature',
    description: '希望添加新功能'
  },
  { 
    label: '❓ 使用问题', 
    value: 'question',
    description: '使用过程中遇到的疑问'
  },
  { 
    label: '🎨 界面优化', 
    value: 'ui',
    description: '界面设计或交互优化建议'
  },
  { 
    label: '📝 其他', 
    value: 'other',
    description: '其他类型的反馈'
  }
]

const rules = {
  name: {
    required: true,
    message: '请输入姓名',
    trigger: 'blur'
  },
  email: [
    {
      required: true,
      message: '请输入邮箱',
      trigger: 'blur'
    },
    {
      type: 'email',
      message: '请输入正确的邮箱格式',
      trigger: 'blur'
    }
  ],
  type: {
    required: true,
    message: '请选择反馈类型',
    trigger: 'change'
  },
  content: [
    {
      required: true,
      message: '请输入反馈内容',
      trigger: 'blur'
    },
    {
      min: 10,
      message: '反馈内容至少10个字符',
      trigger: 'blur'
    }
  ]
}

const handleSubmit = () => {
  formRef.value?.validate((errors) => {
    if (!errors) {
      loading.value = true
      
      // 模拟提交
      setTimeout(() => {
        loading.value = false
        message.success('反馈提交成功！感谢您的宝贵建议，我们会认真处理。')
        handleReset()
      }, 1500)
    } else {
      message.error('请检查表单信息')
    }
  })
}

const handleReset = () => {
  formData.value = {
    name: '',
    email: '',
    type: null,
    content: ''
  }
}
</script>

<style scoped>
.feedback-container {
  padding: 24px;
  min-height: calc(100vh - 48px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-card {
  max-width: 900px;
  width: 100%;
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

.feedback-intro {
  text-align: center;
  margin-bottom: 40px;
  padding: 32px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
  color: white;
  position: relative;
  overflow: hidden;
}

.feedback-intro::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
  animation: rotate 10s linear infinite;
}

.feedback-intro p {
  margin: 0;
  font-size: 18px;
  line-height: 1.8;
  position: relative;
  z-index: 1;
  font-weight: 300;
}

.contact-info {
  text-align: center;
  margin-top: 32px;
  padding: 24px;
  background: rgba(102, 126, 234, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(102, 126, 234, 0.1);
}

.contact-info h3 {
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 700;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

:deep(.n-form-item-label) {
  font-weight: 600;
  color: #333;
  font-size: 15px;
}

:deep(.n-input) {
  border-radius: 12px;
  transition: all 0.3s ease;
}

:deep(.n-input:focus-within) {
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

:deep(.n-select) {
  border-radius: 12px;
}

:deep(.n-button) {
  border-radius: 12px;
  font-weight: 600;
  padding: 0 32px;
  height: 44px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

:deep(.n-button--primary-type) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.3);
}

:deep(.n-button--primary-type:hover) {
  background: linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(102, 126, 234, 0.4);
}

:deep(.n-button:not(.n-button--primary-type)) {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(102, 126, 234, 0.2);
  color: #667eea;
}

:deep(.n-button:not(.n-button--primary-type):hover) {
  background: rgba(102, 126, 234, 0.1);
  transform: translateY(-1px);
}

:deep(.n-form-item) {
  margin-bottom: 24px;
}

:deep(.n-space) {
  justify-content: center;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>