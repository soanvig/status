<template>
  <div class="mdc-card" @click="onClick">
    <div class="mdc-card__content" :class="{ 'mdc-card__primary-action': hasActionListener }">
      <div class="mdc-typography--headline5">
        {{ title }}
      </div>
          
      <div class="mdc-typography--body1 mdc-card__body">
        <slot />
      </div>

      <div class="mdc-button__ripple"></div>
    </div>
  </div>
</template>
<script>
import { MDCRipple } from '@material/ripple';

export default {
  name: 'md-card',
  props: {
    title: String,
  },
  mounted () {
    const el = this.$el.querySelector('.mdc-card__primary-action');

    if (el) {
      MDCRipple.attachTo(el);
    }
  },
  computed: {
    hasActionListener() {
      return Boolean(this.$attrs.onAction);
    }
  },
  methods: {
    onClick () {
      this.$emit('action');
    }
  }
}
</script>
<style scoped>
  @import "~@material/card/dist/mdc.card.min.css";

  .mdc-card__content {
    padding: 16px;
  }

  .mdc-card__body {
    margin-top: 16px;
  }

  .mdc-card__actions {
    margin-top: auto;
  }
</style>