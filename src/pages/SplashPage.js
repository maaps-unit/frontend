import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useRequestAuth } from '../hooks/useRequestAuth';
import { getApiEndpoint } from '../utils/util';

function SplashPage() {
  const history = useHistory();

  const { res, request } = useRequestAuth({
    endpoint: `${getApiEndpoint()}/me`,
    method: 'get',
  });

  useEffect(() => {
    console.log('request');
    request();
  }, [request]);

  useEffect(() => {
    console.log(res);
    if (res && res.data) {
      if (res.data.code === 'ok') {
        history.push(`/${res.data.data.url}`);
      } else {
        history.push('/login');
      }
    }
  }, [res]);

  return <center>onit</center>;
}

export default SplashPage;
