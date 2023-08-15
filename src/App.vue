<template>
  <div id="app">
    <h1>Store project</h1>

    <MainWrapper />

  </div>
</template>

<script>
import MainWrapper from './components/main-wrapper.vue'

export default ({
  components: { MainWrapper },
  data () {

  }
})
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
