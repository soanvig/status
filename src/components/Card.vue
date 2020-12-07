<template>
  <div class="mdc-card">
    <div class="mdc-card__content">
      <div class="mdc-typography--headline5">
        {{ title }}
      </div>
          
      <div class="mdc-typography--body1 mdc-card__body">
        <slot />
      </div>
    </div>
  </div>
</template>
<script>
import '@material/card/dist/mdc.card.min.css';

export default {
  name: 'md-card',
  props: {
    title: String,
  },
}
</script>
<style scoped>
  .mdc-card__content {
    padding: 16px;
  }

  .mdc-card__body {
    margin-top: 16px;
  }
</style>