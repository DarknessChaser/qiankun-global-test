<template>
  <div class="home">
    <button @click="changeChildState">
      this.$store.state.commonData = { parent: 3 };
      this.$store.commit('setName','app-vue-history2');
    </button>
    <div>commonData.parent:{{ commonData.parent }}</div>
    <div>$store.state.name:{{ $store.state.name }}</div>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    commonData(){
      return this.$store.state.commonData;
    }
  },
  methods: {
    changeChildState() {
      this.$store.state.commonData = { parent: 3 };
      this.$store.commit('setName','app-vue-history2');
    }
  }
}
</script>
