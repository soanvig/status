export const EndpointState = {
  Error: 'error',
  Ok: 'ok',
  Unknown: 'unknown'
}

export const checkEndpoint = async (url) => {
  const proxyAnywhere = 'https://cors-anywhere.herokuapp.com';

  try {
    const { status } = await fetch(`${proxyAnywhere}/${url}`);

    if (status === 200) {
      return EndpointState.Ok;
    } else if (status >= 400 && status <= 599) {
      return EndpointState.Error;
    } else {
      return EndpointState.Unknown;
    }
  } catch (e) {
    return EndpointState.Error;
  }
}