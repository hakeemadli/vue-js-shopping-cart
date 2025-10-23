<!-- src/App.vue -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}
#app {
  max-width: 1200px;
  margin: 0 auto;
  background: white;
  min-height: 100vh;
}
</style>