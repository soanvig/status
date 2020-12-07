<template>
  <card :title="title" @action="navigate">
    <div class="endpoint-status_info">
      <span class="endpoint-status_res" :class="resClass">
        <progress-circular v-if="isLoading" />
        <md-icon v-else-if="state === Status.Ok" icon="done" />
        <md-icon v-else-if="state === Status.Error" icon="error" />
        <md-icon v-else-if="state === Status.Unknown" icon="device_unknown" />

        <template v-if="!isLoading">{{ status.code }}</template>
      </span>

      <span v-if="isLoading">Loading</span>
      <span v-else-if="state === Status.Ok">Everything's ok</span>
      <span v-else-if="state === Status.Error">Error</span>
      <span v-else-if="state === Status.Unknown">Unknown</span>
    </div>
  </card>
</template>
<script>
import Card from '@/components/Card';
import MdIcon from '@/components/MdIcon';
import ProgressCircular from '@/components/ProgressCircular';
import { makeCheckStatus } from './makeCheckStatus';
import { EndpointState } from '@/api/checkEndpoint';

export default {
  components: { Card, ProgressCircular, MdIcon },
  name: 'endpoint-status',
  props: {
    title: String,
    url: String,
  },
  setup (props) {
    return {
      ...makeCheckStatus(props),
    };
  },
  created () {
    this.Status = EndpointState;
  },
  computed: {
    state () {
      return this.status.state;
    },
    resClass() {
      return `is-${this.state}`;
    }
  },
  methods: {
    navigate () {
      window.open(this.url, '_blank');
    }
  }
}
</script>
<style scoped>
  .endpoint-status_info {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content auto;
    column-gap: 16px;
  }

  .endpoint-status_res {
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: min-content auto;
    column-gap: 8px;
  }

  .endpoint-status_res.is-ok {
    color: var(--color-success);
  }

  .endpoint-status_res.is-error {
    color: var(--color-important);
  }

  .endpoint-status_res.is-unknown {
    color: var(--color-warning);
  }
</style>