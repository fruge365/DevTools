<template>
  <div class="backend-container">
    <div v-for="category in backendCategories" :key="category.id" class="category-section">
      <n-card :title="category.name" class="category-card">
        <template #header-extra>
          <img :src="category.ico" :alt="category.name" class="category-icon" />
        </template>
        
        <n-grid :cols="3" :x-gap="16" :y-gap="16">
          <n-grid-item v-for="item in category.children" :key="item.name">
            <n-card 
              hoverable 
              class="item-card"
              @click="openWebsite(item.url)"
              :title="item.title"
            >
              <div class="item-content">
                <img :src="item.ico" :alt="item.name" class="item-icon" />
                <div class="item-info">
                  <span class="item-name">{{ item.name }}</span>
                  <span class="item-desc">{{ item.title }}</span>
                </div>
                <n-icon class="arrow-icon">
                  <ArrowForward />
                </n-icon>
              </div>
            </n-card>
          </n-grid-item>
        </n-grid>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ArrowForward } from '@vicons/ionicons5'

const backendCategories = ref([
  {
    id: 'backend',
    name: '后端',
    ico: 'http://www.amoureux555.xyz/JAVA/%E5%90%8E%E7%AB%AF.png',
    children: [
      {
        ico: 'http://www.amoureux555.xyz/JAVA/java%E5%AD%A6%E4%B9%A0.ico',
        name: 'Java 学习',
        title: '学习笔记',
        url: 'https://mrjokersince1997.github.io/My-Notes/#/'
      }
    ]
  },
  {
    id: 'tools',
    name: '开发工具篇',
    ico: 'http://www.amoureux555.xyz/JAVA/tools.png',
    children: [
      {
        ico: 'http://www.amoureux555.xyz/JAVA/jdk.png',
        name: 'JDK',
        title: 'JDK',
        url: 'https://www.oracle.com/java/technologies/downloads/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/jdk.png',
        name: 'JavaSE 开发文档',
        title: '目前没有中文文档',
        url: 'https://www.oracle.com/cn/java/technologies/java-se-api-doc.html'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/MySQL%E6%95%B0%E6%8D%AE%E5%BA%93.ico',
        name: 'MySQL数据库',
        title: '免费',
        url: 'https://dev.mysql.com/downloads/mysql/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Redis.png',
        name: 'Redis',
        title: '缓存',
        url: 'https://redis.io/download/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/MongoDB.ico',
        name: 'MongoDB',
        title: 'MongoDB',
        url: 'https://www.mongodb.com/try/download/community'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Maven.ico',
        name: 'Maven',
        title: 'Maven',
        url: 'https://maven.apache.org/download.cgi'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Git.ico',
        name: 'Git',
        title: 'Git',
        url: 'https://git-scm.com/downloads'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Spring%20Framework.png',
        name: 'Spring Framework',
        title: 'Spring 框架',
        url: 'https://spring.io/projects/spring-framework'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Spring%20Framework.png',
        name: 'Spring Boot',
        title: 'Spring Boot',
        url: 'https://spring.io/projects/spring-boot'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/MyBatis%20Plus.ico',
        name: 'MyBatis',
        title: 'MyBatis',
        url: 'https://mybatis.org/mybatis-3/zh/index.html'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Tomcat.ico',
        name: 'Tomcat',
        title: 'Tomcat',
        url: 'https://tomcat.apache.org/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Nginx.ico',
        name: 'Nginx',
        title: 'Nginx',
        url: 'http://nginx.org/en/download.html'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Postman.png',
        name: 'Postman',
        title: 'Postman',
        url: 'https://www.postman.com/downloads/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/ApiPost.ico',
        name: 'ApiPost',
        title: '国产',
        url: 'https://www.apipost.cn/download.html'
      }
    ]
  },
  {
    id: 'forum',
    name: '技术论坛篇',
    ico: 'http://www.amoureux555.xyz/JAVA/%E6%8A%80%E6%9C%AF%E8%AE%BA%E5%9D%9B.png',
    children: [
      {
        ico: 'http://www.amoureux555.xyz/JAVA/CSDN.ico',
        name: 'CSDN',
        title: 'CSDN',
        url: 'https://www.csdn.net/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/%E5%BC%80%E6%BA%90%E4%B8%AD%E5%9B%BD.ico',
        name: '开源中国',
        title: '开源中国',
        url: 'https://www.oschina.net/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/JAVA.ico',
        name: '菜鸟教程',
        title: '菜鸟教程',
        url: 'https://www.runoob.com/?s=java'
      }
    ]
  },
  {
    id: 'hosting',
    name: '开源项目托管平台篇',
    ico: 'http://www.amoureux555.xyz/JAVA/%E9%A1%B9%E7%9B%AE%E6%89%98%E7%AE%A1.png',
    children: [
      {
        ico: 'http://www.amoureux555.xyz/JAVA/GitHub.png',
        name: 'GitHub',
        title: 'GitHub',
        url: 'https://github.com/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Gitee.ico',
        name: 'Gitee',
        title: 'Gitee',
        url: 'https://gitee.com/'
      }
    ]
  },
  {
    id: 'ide',
    name: '集成开发环境篇',
    ico: 'http://www.amoureux555.xyz/JAVA/%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83.png',
    children: [
      {
        ico: 'http://www.amoureux555.xyz/JAVA/Eclipse.ico',
        name: 'Eclipse',
        title: 'Eclipse',
        url: 'https://www.eclipse.org/downloads/'
      },
      {
        ico: 'http://www.amoureux555.xyz/JAVA/IntelliJ%20IDEA.ico',
        name: 'IntelliJ IDEA',
        title: 'IntelliJ IDEA',
        url: 'https://www.jetbrains.com/idea/download/#section=windows'
      }
    ]
  }
])

const openWebsite = (url) => {
  window.open(url, '_blank')
}
</script>

<style scoped>
.backend-container {
  padding: 0;
}

.category-section {
  margin-bottom: 24px;
}

.category-card {
  border: 1px solid #ebeef5;
  border-radius: 8px;
  background: #ffffff;
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

.category-icon {
  width: 20px;
  height: 20px;
}

.item-card {
  cursor: pointer;
  transition: all 0.3s ease;
  height: 72px;
  border: 1px solid #ebeef5;
  border-radius: 6px;
  background: #ffffff;
}

.item-card:hover {
  border-color: #409eff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.item-content {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  height: 100%;
}

.item-icon {
  width: 24px;
  height: 24px;
  margin-right: 12px;
  border-radius: 4px;
}

.item-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.item-name {
  font-size: 14px;
  font-weight: 500;
  color: #303133;
  margin-bottom: 2px;
}

.item-desc {
  font-size: 12px;
  color: #909399;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.arrow-icon {
  color: #c0c4cc;
  transition: color 0.3s ease;
}

.item-card:hover .arrow-icon {
  color: #409eff;
}
</style>