<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-history/">app-vue-history</router-link>
      <router-link to="/app-vue-history2/">app-vue-history2</router-link>
      <router-link to="/app-vue-vite/">app-vue-vite</router-link>
      <router-link to="/app-vue-vite2/">app-vue-vite2</router-link>
      <router-link to="/about">about</router-link>
    </header>
    <div>
      <button @click="changeParentState">
        this.$store.state.commonData = { parent: 1 };
        this.$store.commit('setName','main');
      </button>
      <div>主项目的数据:</div>
      <div>commonData.parent:{{ commonData.parent }}</div>
      <div>$store.state.name:{{ $store.state.name }}</div>
    </div>
    <div id="appContainer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  computed: {
    commonData(){
      return this.$store.state.commonData;
    }
  },
  methods: {
    changeParentState(){
      this.$store.state.commonData = { parent: 1 };
      this.$store.commit('setName','main');
    },
  },
}
</script>

<style scoped>
#app{
  height: 100vh;
  text-align: center;
  position: relative;
}
header>a{
  margin: 0 20px;
}
.appContainer{
  background: #ccc;
  padding: 20px;
}
</style>
