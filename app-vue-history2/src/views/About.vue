<template>
  <div class="about">
    <h1>This is app-vue-history2 about page</h1>
  </div>
</template>
<script>
export default {
  mounted() {
    window.a = 1;
    console.log(window.a,'app-vue-history2');
  },
}
</script>
<style>
/* 测试全局css污染 */
h1{
  color: red;
}
</style>
