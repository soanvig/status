<template>
  <div class="mdc-card">
    <div class="mdc-card__content">
      <div class="mdc-typography--headline5">Title</div>
          
      <div class="mdc-typography--body1">
        Everything's good
      </div>
    </div>

    <div class="mdc-card__actions">
      <div class="mdc-card__action-buttons">
        <button class="mdc-button mdc-card__action mdc-card__action--button">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Action 1</span>
        </button>
        <button class="mdc-button mdc-card__action mdc-card__action--button">
          <div class="mdc-button__ripple"></div>
          <span class="mdc-button__label">Action 2</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import '@material/card/dist/mdc.card.min.css';

export default {
  name: 'card',
}
</script>
<style>
  .mdc-card__content {
    padding: 16px;
  }
</style>