<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Button>My app</Button>
</template>

<script>
import Button from './components/Button';

export default {
  name: 'App',
  components: {
    Button
  }
}
</script>

<style>
#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
