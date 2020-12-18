export const EndpointState = {
  Error: 'error',
  Ok: 'ok',
  Unknown: 'unknown'
}

export const checkEndpoint = async (url) => {

  try {
    const { code } = await fetch('https://europe-west3-private-cloud-291619.cloudfunctions.net/cors-anywhere', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({ website: url })
    }).then(res => res.json());

    if (code >= 200 && code <= 299) {
      return {
        state: EndpointState.Ok,
        code,
      };
    } else if (code >= 400 && code <= 599) {
      return {
        state: EndpointState.Error,
        code,
      };
    } else {
      return {
        state: EndpointState.Unknown,
        code,
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