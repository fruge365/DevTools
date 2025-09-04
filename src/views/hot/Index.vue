<template>
  <div class="hot-container">
    <n-grid :cols="2" :x-gap="20" :y-gap="20">
      <!-- 百度热搜榜 -->
      <n-grid-item>
        <n-card class="hot-card">
          <template #header>
            <div class="card-header">
              <img src="https://www.baidu.com/favicon.ico" alt="百度" class="header-icon" />
              <span>百度热搜榜</span>
            </div>
          </template>
          
          <n-spin :show="baiduLoading">
            <div v-if="baiduHot.length > 0" class="hot-list">
              <!-- 置顶热搜 -->
              <div v-if="baiduHot[0]" class="hot-item top-item">
                <n-icon class="top-icon" color="#f73131">
                  <TrendingUp />
                </n-icon>
                <a :href="baiduHot[0].url" :title="baiduHot[0].word" target="_blank" class="hot-link">
                  {{ baiduHot[0].word }}
                </a>
              </div>
              
              <!-- 前三名 -->
              <div v-for="(item, index) in baiduHot.slice(1, 4)" :key="index" class="hot-item">
                <span :class="['rank-number', getRankClass(index + 1)]">{{ index + 1 }}</span>
                <a :href="item.url" :title="item.word" target="_blank" class="hot-link">
                  {{ item.word }}
                </a>
              </div>
              
              <!-- 其他排名 -->
              <div v-for="(item, index) in displayBaiduHot" :key="index + 4" class="hot-item">
                <span class="rank-number">{{ index + 4 }}</span>
                <a :href="item.url" :title="item.word" target="_blank" class="hot-link">
                  {{ item.word }}
                </a>
              </div>
              
              <div class="show-more" @click="toggleBaiduShow">
                {{ baiduShowMore ? '收起' : '查看更多' }}
              </div>
            </div>
            <div v-else class="no-data">暂无数据</div>
          </n-spin>
        </n-card>
      </n-grid-item>

      <!-- 贴吧热议榜 -->
      <n-grid-item>
        <n-card class="hot-card">
          <template #header>
            <div class="card-header">
              <img src="https://www.baidu.com/favicon.ico" alt="贴吧" class="header-icon" />
              <span>贴吧热议榜</span>
            </div>
          </template>
          
          <n-spin :show="tiebaLoading">
            <div v-if="tiebaHot.length > 0" class="hot-list">
              <!-- 前三名 -->
              <div v-for="(item, index) in tiebaHot.slice(0, 3)" :key="index" class="hot-item">
                <span :class="['rank-number', getRankClass(index + 1)]">{{ index + 1 }}</span>
                <a :href="item.url" :title="item.desc" target="_blank" class="hot-link">
                  {{ item.title }}
                </a>
              </div>
              
              <!-- 其他排名 -->
              <div v-for="(item, index) in displayTiebaHot" :key="index + 3" class="hot-item">
                <span class="rank-number">{{ index + 4 }}</span>
                <a :href="item.url" :title="item.desc" target="_blank" class="hot-link">
                  {{ item.title }}
                </a>
              </div>
              
              <div class="show-more" @click="toggleTiebaShow">
                {{ tiebaShowMore ? '收起' : '查看更多' }}
              </div>
            </div>
            <div v-else class="no-data">暂无数据</div>
          </n-spin>
        </n-card>
      </n-grid-item>

      <!-- 微博热搜 -->
      <n-grid-item>
        <n-card class="hot-card">
          <template #header>
            <div class="card-header">
              <img src="https://weibo.com/favicon.ico" alt="微博" class="header-icon" />
              <span style="color: #ff6633">微博热搜</span>
            </div>
          </template>
          
          <div class="hot-list">
            <div v-for="(item, index) in mockWeiboHot" :key="index" class="hot-item">
              <span :class="['rank-number', getRankClass(index + 1)]">{{ index + 1 }}</span>
              <span class="hot-link">{{ item.title }}</span>
            </div>
          </div>
        </n-card>
      </n-grid-item>

      <!-- 知乎热榜 -->
      <n-grid-item>
        <n-card class="hot-card">
          <template #header>
            <div class="card-header">
              <img src="https://www.zhihu.com/favicon.ico" alt="知乎" class="header-icon" />
              <span style="color: #0084ff">知乎热榜</span>
            </div>
          </template>
          
          <div class="hot-list">
            <div v-for="(item, index) in mockZhihuHot" :key="index" class="hot-item">
              <span :class="['rank-number', getRankClass(index + 1)]">{{ index + 1 }}</span>
              <span class="hot-link">{{ item.title }}</span>
            </div>
          </div>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { TrendingUp } from '@vicons/ionicons5'

const baiduLoading = ref(false)
const tiebaLoading = ref(false)
const baiduShowMore = ref(false)
const tiebaShowMore = ref(false)

const baiduHot = ref([])
const baiduHotFull = ref([])
const tiebaHot = ref([])
const tiebaHotFull = ref([])

// 模拟数据
const mockWeiboHot = ref([
  { title: '微博热搜话题1' },
  { title: '微博热搜话题2' },
  { title: '微博热搜话题3' },
  { title: '微博热搜话题4' },
  { title: '微博热搜话题5' },
  { title: '微博热搜话题6' },
  { title: '微博热搜话题7' },
  { title: '微博热搜话题8' },
  { title: '微博热搜话题9' },
  { title: '微博热搜话题10' }
])

const mockZhihuHot = ref([
  { title: '知乎热门问题1' },
  { title: '知乎热门问题2' },
  { title: '知乎热门问题3' },
  { title: '知乎热门问题4' },
  { title: '知乎热门问题5' },
  { title: '知乎热门问题6' },
  { title: '知乎热门问题7' },
  { title: '知乎热门问题8' },
  { title: '知乎热门问题9' },
  { title: '知乎热门问题10' }
])

const displayBaiduHot = computed(() => {
  return baiduShowMore.value ? baiduHot.value.slice(4) : baiduHot.value.slice(4, 11)
})

const displayTiebaHot = computed(() => {
  return tiebaShowMore.value ? tiebaHot.value.slice(3) : tiebaHot.value.slice(3, 10)
})

const getRankClass = (rank) => {
  if (rank === 1) return 'first'
  if (rank === 2) return 'second'
  if (rank === 3) return 'third'
  return ''
}

const toggleBaiduShow = () => {
  baiduShowMore.value = !baiduShowMore.value
}

const toggleTiebaShow = () => {
  tiebaShowMore.value = !tiebaShowMore.value
}

// 模拟获取百度热搜数据
const fetchBaiduHot = () => {
  baiduLoading.value = true
  // 模拟API调用
  setTimeout(() => {
    const mockData = Array.from({ length: 30 }, (_, i) => ({
      word: `百度热搜${i + 1}`,
      url: `https://www.baidu.com/s?wd=热搜${i + 1}`
    }))
    baiduHotFull.value = mockData
    baiduHot.value = mockData
    baiduLoading.value = false
  }, 1000)
}

// 模拟获取贴吧热议数据
const fetchTiebaHot = () => {
  tiebaLoading.value = true
  setTimeout(() => {
    const mockData = Array.from({ length: 30 }, (_, i) => ({
      title: `贴吧热议${i + 1}`,
      desc: `贴吧热议描述${i + 1}`,
      url: `https://tieba.baidu.com/`
    }))
    tiebaHotFull.value = mockData
    tiebaHot.value = mockData
    tiebaLoading.value = false
  }, 1200)
}

onMounted(() => {
  fetchBaiduHot()
  fetchTiebaHot()
})
</script>

<style scoped>
.hot-container {
  padding: 0;
}

.hot-card {
  height: 600px;
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background: #ffffff;
}

:deep(.n-card-header) {
  background: #fafafa;
  border-bottom: 1px solid #ebeef5;
  padding: 16px 20px;
}

.card-header {
  display: flex;
  align-items: center;
}

.header-icon {
  width: 20px;
  height: 20px;
  margin-right: 8px;
  border-radius: 4px;
}

.card-header span {
  font-weight: 500;
  font-size: 14px;
  color: #303133;
}

.hot-list {
  position: relative;
  height: 480px;
  overflow: hidden;
  padding: 16px;
}

.hot-item {
  display: flex;
  align-items: center;
  padding: 8px 12px;
  margin-bottom: 6px;
  background: #ffffff;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  transition: all 0.3s ease;
}

.hot-item:hover {
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.top-item {
  background: #409eff;
  color: white;
  border-color: #409eff;
}

.top-icon {
  margin-right: 8px;
  font-size: 16px;
}

.rank-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin-right: 12px;
  font-size: 12px;
  font-weight: 500;
  border-radius: 4px;
  background: #f5f7fa;
  color: #909399;
}

.rank-number.first {
  background: #f56c6c;
  color: white;
}

.rank-number.second {
  background: #e6a23c;
  color: white;
}

.rank-number.third {
  background: #f0a020;
  color: white;
}

.hot-link {
  flex: 1;
  color: #303133;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.5;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.hot-item:hover .hot-link {
  color: #409eff;
}

.top-item .hot-link {
  color: white;
}

.show-more {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  cursor: pointer;
  font-size: 12px;
  padding: 8px 16px;
  background: #409eff;
  color: white;
  border: none;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.show-more:hover {
  background: #337ecc;
}

.no-data {
  text-align: center;
  color: #909399;
  padding: 40px 0;
  font-size: 14px;
}
</style>