<script setup lang="ts">
import { message } from "ant-design-vue";
import HelloWorld from "./components/HelloWorld.vue";
const info = () => {
  message.info({
    content: "这个左边的icon歪了，没有垂直居中呢~",
    duration: 0,
  });
};
</script>

<template>
  <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
  <HelloWorld msg="Vite + Vue" />
  <div class="py-8">
    ============================<span class="text-lg font-bold text-red-500"
      >请注意下方的按钮样式</span
    >============================
  </div>
  <div>
    <p class="text-sm opacity-50">
      因为更新了vite版本，css变化，下面的按钮可能效果不同，总之按钮的背景色在生产模式下丢失了。
    </p>
    <a-button type="primary" @click="info">看不见这个可爱的按钮</a-button>
    <p>
      但是你点击按钮的时候，顶部message的图标默认是没有垂直居中，是因为受到TailwindCSS的一条svg的规则影响，你可能需要重新覆盖这个css为初始。我这里已经修复了，可以见main.css文件。
    </p>
    <p>
      当然上面提到的虽然修复了，但是仍然可能在其他地方出现冲突，这就需要你自己去看了。或者说Antd
      Vue确实跟tailwindcss结合还有很多细节问题。
    </p>
  </div>
</template>

<style>
:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  margin: auto;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
