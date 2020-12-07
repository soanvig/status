<template>
  <card :title="title">
    <div class="endpoint-status_info">
      <progress-circular v-if="isLoading" />
      <md-icon v-else-if="status === Status.Ok" icon="done" class="endpoint-status_ok" />
      <md-icon v-else-if="status === Status.Error" icon="error" class="endpoint-status_error" />
      <md-icon v-else-if="status === Status.Unknown" icon="device_unknown" class="endpoint-status_error" />

      <span v-if="isLoading">Loading</span>
      <span v-else-if="status === Status.Ok">OK</span>
      <span v-else-if="status === Status.Error">Error</span>
      <span v-else-if="status === Status.Unknown">Unknown</span>
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

  .endpoint-status_ok {
    color: var(--color-success);
  }

  .endpoint-status_error {
    color: var(--color-important);
  }

  .endpoint-status_unknown {
    color: var(--color-warning);
  }
</style>