<template>
  <div class="nav-menu">
    <div class="logo">
      <h2>DevTools</h2>
      <p>开发者工具箱</p>
    </div>
    <n-menu
      :value="activeKey"
      :options="menuOptions"
      @update:value="handleMenuSelect"
    />
  </div>
</template>

<script setup>
import { ref, computed, h } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { NIcon } from 'naive-ui'

const router = useRouter()
const route = useRoute()

const activeKey = computed(() => route.name)

const renderIcon = (iconText) => {
  return () => h('span', { class: 'menu-icon' }, iconText)
}

const menuOptions = [
  {
    label: '首页',
    key: 'index',
    icon: renderIcon('🏠')
  },
  {
    label: '前端常用',
    key: 'frontend',
    icon: renderIcon('💻')
  },
  {
    label: '后端常用',
    key: 'backend',
    icon: renderIcon('🖥️')
  },
  {
    label: '热点排行',
    key: 'hot',
    icon: renderIcon('🔥')
  },
  {
    label: '更新日志',
    key: 'history',
    icon: renderIcon('🕐')
  },
  {
    label: '留言反馈',
    key: 'feedback',
    icon: renderIcon('💬')
  },
  {
    label: '关于本站',
    key: 'about',
    icon: renderIcon('ℹ️')
  }
]

const handleMenuSelect = (key) => {
  router.push({ name: key })
}
</script>

<style scoped>
.nav-menu {
  width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: #ffffff;
  border-right: 1px solid #e4e7ed;
  z-index: 100;
  overflow-y: auto;
}

.logo {
  padding: 24px 20px;
  text-align: center;
  border-bottom: 1px solid #e4e7ed;
}

.logo h2 {
  margin: 0 0 4px 0;
  color: #409eff;
  font-size: 20px;
  font-weight: 600;
}

.logo p {
  margin: 0;
  font-size: 12px;
  color: #909399;
}

:deep(.n-menu) {
  padding: 16px 0;
  background: transparent;
}

:deep(.n-menu-item) {
  margin: 2px 12px;
  border-radius: 6px;
}

:deep(.n-menu-item-content) {
  padding: 12px 16px;
  font-weight: 500;
  color: #606266;
  transition: all 0.2s;
}

:deep(.n-menu-item-content:hover) {
  background: #ecf5ff;
  color: #409eff;
}

:deep(.n-menu-item-content--selected) {
  background: #409eff;
  color: white;
}

:deep(.n-menu-item-content--selected:hover) {
  background: #409eff;
}

.menu-icon {
  font-size: 16px;
  margin-right: 8px;
}
</style>