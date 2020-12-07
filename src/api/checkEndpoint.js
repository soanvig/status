export const EndpointState = {
  Error: 'error',
  Ok: 'ok',
  Unknown: 'unknown'
}

export const checkEndpoint = async (url) => {
  const proxyAnywhere = 'https://cors-anywhere.herokuapp.com';

  try {
    const { status } = await fetch(`${proxyAnywhere}/${url}`);

    if (status >= 200 && status <= 299) {
      return {
        state: EndpointState.Ok,
        code: status,
      };
    } else if (status >= 400 && status <= 599) {
      return {
        state: EndpointState.Error,
        code: status,
      };
    } else {
      return {
        state: EndpointState.Unknown,
        code: status,
      };
    }
  } catch (e) {
    console.error(e);

    return {
      state: EndpointState.Error,
      code: 0,
    }
  }
}