import React, { useCallback, useMemo } from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EndpointInfo from '../EndpointInfo';
import { Method } from '@site/src/types/endpoints';
import { BASE_PATH_PROD, BASE_PATH_DEV } from '@site/src/constants/endpoints';

type Props = {
  method: Method;
  url: string;
};

const genFullUrl = (url: string, isProd?: boolean) => {
  const basePath = isProd ? BASE_PATH_PROD : BASE_PATH_DEV;
  return `${basePath}${url}`;
};

function EndpointsTab({ method, url }: Props): JSX.Element {
  const tabs = [
    { label: 'Live', value: 'prod' },
    { label: 'Sandbox', value: 'dev' },
  ];

  const genUrl = useCallback(genFullUrl, [url]);

  return (
    <Tabs defaultValue='prod' values={tabs}>
      <TabItem value='prod'>
        <EndpointInfo method={method}>{genUrl(url, true)}</EndpointInfo>
      </TabItem>
      <TabItem value='dev'>
        <EndpointInfo method={method}>{genUrl(url)}</EndpointInfo>
      </TabItem>
    </Tabs>
  );
}

export default EndpointsTab;
