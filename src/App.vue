<template>
  <div class="mdc-typography">
    <TopBar>Mort&Mortis Status</TopBar>
    <div class="app_statuses">
      <endpoint-status title="MortMortis" url="https://mortmortis.pl" />
      <endpoint-status title="gorzkayuca" url="https://gorzkayuca.com" />
      <endpoint-status title="Kamil Lasończyk" url="https://kamil-lasonczyk.pl" />
      <endpoint-status title="Reiki Lokata" url="https://reiki-lokata.pl" />
    </div>
  </div>
</template>

<script>
import '@material/typography/dist/mdc.typography.min.css';

import TopBar from '@/components/TopBar';
import EndpointStatus from '@/app/EndpointStatus/EndpointStatus.vue';

export default {
  name: 'App',
  components: {
    TopBar,
    EndpointStatus,
  }
}
</script>

<style>
:root {
  /** https://mdbootstrap.com/live/_doc/all-colors.html */
  --color-success: #00C851;
  --color-important: #ff4444;
  --color-warning: #ffbb33;
  --color-info: #33b5e5;
}

#app {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

html, body {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

.app_statuses {
  display: grid;
  gap: 32px;

  grid-template-columns: repeat(auto-fill, 400px);
  grid-auto-rows: 200px;
  
  padding: 32px;
}
</style>
