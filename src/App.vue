<template>
  <div class="mdc-typography">
    <img alt="Vue logo" src="./assets/logo.png">
    <Button>My app</Button>
    <Card />
    <ProgressCircular />
  </div>
</template>

<script>
import '@material/typography/dist/mdc.typography.min.css';

import Button from './components/Button';
import Card from './components/Card';
import ProgressCircular from './components/ProgressCircular';

export default {
  name: 'App',
  components: {
    Button,
    Card,
    ProgressCircular,
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
