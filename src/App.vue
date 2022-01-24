<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <p class="text-red-500">这是TailwindCSS自带的红色文字</p>
  <p class=" text-el-danger">这是ElementPlus的danger的文字</p>
  <el-button type="primary">主要按钮（ElementPlus组件）</el-button>
  <p>和</p>
  <div class="cursor-pointer bg-el-primary px-4 py-2 inline-block text-center text-white rounded hover:bg-el-primary-light-300 active:bg-el-primary">主要按钮（自定义的Div按钮）</div>
  <p>上面这个按钮只是简单模拟了一下，你完全可以通过扩展<span class="text-el-primary">ElementPlus</span>后TailwindCSS样式class，把这个按钮做成自己的定制组件。</p>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
