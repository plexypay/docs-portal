---
sidebar_position: 4
---
import EndpointsTab from '/src/components/global/EndpointsTab';
import DocsTable from '/src/components/global/DocsTable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cancel

Cancel request.
Only transactions with status "authorized" can be cancelled.

#### Endpoints

<EndpointsTab method="post" url="/payments/{transactionId}/cancel" />

#### Request header parametres:

<table>
   <thead>
      <tr>
         <th>Name</th>
         <th>Value</th>
         <th>Required</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Authorization</td>
         <td>private key</td>
         <td className="text-center"><icon icon="fa-check" color="green" /></td>
      </tr>
      <tr>
         <td>Content-Type</td>
         <td>application/json</td>
         <td className="text-center"><icon icon="fa-check" color="green" /></td>
      </tr>
   </tbody>
</table>

#### Request
No request body is require as this endpoint does not expect any parameters.

#### Response:

<Tabs
  groupId="response"
  defaultValue="example"
  values={[
  {label: 'Response example', value: 'example'},
  {label: 'Response parameters', value: 'parameters'},
]}>
<TabItem value="example">

```json
{
    "id": "05e99c36-499d-4a6f-9e5d-e93d3eb8e63e",
    "responseCode": "00",
    "cvvStatus": "P",
    "cvvStatusDecoded": "not processed",
    "networkTransactionReference": "574258",
    "authCode": "856156"
}
```

</TabItem>

<TabItem value="parameters">

<DocsTable columns={[
  {
    wrappers: [{
      tag: 'code',
      attrs: {style:"max-width: 290px"}
    }]
  },
  {
    wrappers: [
      {tag: 'b', attrs: {style:"color: var(--ifm-menu-color-active)"}}
    ]
  }
]}>
<table>
   <thead>
      <tr>
         <th><strong>Parameter name</strong></th>
         <th><strong>Type</strong></th>
         <th><strong>Description</strong></th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>id</td>
         <td>string</td>
         <td>cancelled transaction id</td>
      </tr>
      <tr>
         <td>responseCode</td>
         <td>string</td>
         <td>response code generated</td>
      </tr>
      <tr>
         <td>cvvStatus</td>
         <td>string</td>
         <td>cvv status code generated</td>
      </tr>
      <tr>
         <td>cvvStatusDecoded</td>
         <td>string</td>
         <td>cvv status decoded</td>
      </tr>
      <tr>
         <td>networkTransactionReference</td>
         <td>string</td>
         <td>network transaction reference generated</td>
      </tr>
      <tr>
         <td>authCode</td>
         <td>string</td>
         <td>auth code</td>
      </tr>
   </tbody>
</table>
</DocsTable>

</TabItem>
</Tabs>

:::info

**On success:** status code `200`

:::

:::info

**On error:** status code != `200`

:::

<table>
  <thead>
    <tr>
      <th><strong>Parameter name</strong></th>
      <th><strong>Type</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>message</td>
      <td>string</td>
      <td>error message</td>
    </tr>
    <tr>
      <td>code</td>
      <td>int</td>
      <td>error code</td>
    </tr>
  </tbody>
</table>
