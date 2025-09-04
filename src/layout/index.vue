<template>
  <div class="layout">
    <NavMenu />
    <div class="main">
      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavMenu from '@/views/components/NavMenu.vue'

window.addEventListener("click", (e) => {
  const pointer = document.createElement("div");
  pointer.classList.add("pointer");
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
  pointer.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(pointer);
  pointer.addEventListener("animationend", () => {
    pointer.remove();
  });
});
</script>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.main {
  flex: 1;
  margin-left: 240px;
  background: #ffffff;
}

.content {
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
}
</style>

<style>
.pointer {
  position: absolute;
  border-radius: 50%;
  background-color: rgba(22, 66, 75, 0.4);
  opacity: 0;
  z-index: 999;
  animation: grow 0.4s forwards;
  pointer-events: none;
}

@keyframes grow {
  from {
    width: 0;
    height: 0;
    opacity: 1;
  }
  to {
    width: 100px;
    height: 100px;
    opacity: 0;
  }
}
</style>
