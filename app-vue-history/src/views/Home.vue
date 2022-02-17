<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="sendHttp">发个http</button>
    <button @click="setAxiosHeard">改个http</button>
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
    axios() {
      return this.$store.state.axios;
    }
  },
  methods: {
    sendHttp() {
      this.axios.get('test');
    },
    setAxiosHeard() {
      this.axios.defaults.headers.myTest = 'undefined';
    }
  }
}
</script>
