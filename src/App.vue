<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <br />

  <el-link type="danger">这是ElementPlus的danger的文字链接</el-link>
  <span class="px-4">和</span>
  <a href="#">
    <span class="text-el-danger text-sm font-medium hover:text-red-500">这是TailwindCSS自带的红色文字</span>
  </a>
  <p
    class="text-gray-500"
  >建议一些简单的样式尽可能避免使用组件，比如上面的el-link，或许并不怎么好看，虽然hover状态的underline可以通过配置移除，但是hover状态的颜色只能通过覆盖样式来变更，与其这样做，不如直接手写a标签来实现，hover后的颜色也可以更灵活的调整。</p>
  <br />

  <el-button type="primary">主要按钮（ElementPlus组件）</el-button>
  <span class="px-4">和</span>
  <div
    class="cursor-pointer bg-el-primary px-4 py-2 inline-block text-center text-white rounded hover:bg-el-primary-light-300 active:bg-el-primary"
  >主要按钮（自定义的Div按钮）</div>
  <p class="text-gray-500">
    上面这个按钮只是简单模拟了一下，你完全可以通过扩展
    <span class="text-el-primary">ElementPlus</span>后TailwindCSS样式class，把这个按钮做成自己的定制组件。
  </p>
  <br />
  <br />
  <br />
  <p class="rotate-12 blur-md">巧妙的TailwindCSS变量</p>
    <br />
  <br />
  <p class="bg-el-success text-white">👆你屏幕脏了，快擦擦擦！！！👆</p>
</template>

<style>
#app {
  padding: 24px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
