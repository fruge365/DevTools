<template>
  <div class="layout">
    <header></header>
    <router-view></router-view>
  </div>
</template>

<script setup >
window.addEventListener("click", (e) => {
  const pointer = document.createElement("div");
  pointer.classList.add("pointer");
  pointer.style.left = `${e.clientX}px`;
  pointer.style.top = `${e.clientY}px`;
  pointer.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(pointer);
  // 监听动画结束事件，结束后移除元素
  pointer.addEventListener("animationend", () => {
    pointer.remove();
  });
});
</script>

<style>
.pointer {
  position: absolute;
  border-radius: 50%; /* 确保形状为圆形 */
  background-color: rgba(
    22,
    66,
    75,
    0.4
  ); /* 半透明红色作为示例，可以根据需要调整 */
  opacity: 0; /* 初始不显示，动画开始时会逐渐显现 */
  z-index: 999; /* 确保圆圈在最上层 */
  animation: grow 0.4s forwards; /* 指定动画名称和持续时间 */
  pointer-events: none;
}

/* 动画关键帧，实现圈的扩大效果 */
@keyframes grow {
  from {
    width: 0;
    height: 0;
    opacity: 1;
  }
  to {
    width: 100px; /* 圈的最大直径 */
    height: 100px;
    opacity: 0;
  }
}
</style>
