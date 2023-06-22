---
sidebar_position: 4
sidebar_custom_props:
  description: Cancel a payment.
---
import EndpointsTab from '/src/components/global/EndpointsTab';
import DocsTable from '/src/components/global/DocsTable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Cancel

Use this endpoint to cancel a payment. 
Only transactions with the status "authorized" can be cancelled.

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
No request body is required as this endpoint does not expect any parameters.

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
    "networkTransactionReference": "0000021266523063630A",
    "authCode": "856156",
    "amount": 15.55,
    "orderReference": "1667207373325",
    "remainingBalance": 15.55,
    "success": true,
    "message": "Successfully cancelled the transaction",
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
         <td>networkTransactionReference</td>
         <td>string</td>
         <td>network transaction reference generated</td>
      </tr>
      <tr>
         <td>authCode</td>
         <td>string</td>
         <td>auth code</td>
      </tr>
      <tr>
         <td>amount</td>
         <td>float64</td>
         <td>amount cancelled</td>
      </tr>
      <tr>
         <td>orderReference</td>
         <td>string</td>
         <td>order reference for the cancelled transaction</td>
      </tr>
      <tr>
         <td>remainingBalance</td>
         <td>float64</td>
         <td>balance after cancel was applied for the original transaction</td>
      </tr>
      <tr>
         <td>success</td>
         <td>bool</td>
         <td>flag to indicate status of the cancel transaction</td>
      </tr>
      <tr>
         <td>message</td>
         <td>string</td>
         <td>cancel transaction completion message</td>
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
