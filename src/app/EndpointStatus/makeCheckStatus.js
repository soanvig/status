import { onMounted, ref } from 'vue';
import { EndpointState, checkEndpoint } from '@/api/checkEndpoint';

export const makeCheckStatus = (props) => {
  const isLoading = ref(true);
  const status = ref({ state: EndpointState.Error, code: 200 });

  const checkStatus = async () => {
    status.value = await checkEndpoint(props.url);
    isLoading.value = false;
  }

  onMounted(checkStatus);

  return {
    isLoading,
    status,
  }
}