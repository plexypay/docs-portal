---
sidebar_position: 2
sidebar_custom_props:
  description: Partial or full capture request.
---
import EndpointsTab from '/src/components/global/EndpointsTab';
import DocsTable from '/src/components/global/DocsTable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Capture

This endpoint allows you to make partial or full capture requests for transactions with the status "authorized". 
Only transactions with the status "authorized" can be captured.

#### Endpoints

<EndpointsTab method="post" url="/payments/{transactionId}/capture" />

#### Request header parameters:

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

<Tabs
  groupId="request"
  defaultValue="partial example"
  values={[
  {label: 'Partial capture request example', value: 'partial example'},
  {label: 'Full capture request example', value: 'full example'},
  {label: 'Request parameters', value: 'parameters'},
]}>
<TabItem value="partial example">

```json
{
    "amount": 56.41
}
```
</TabItem>

<TabItem value="full example">

```json
{
    "amount": null
}
```
</TabItem>

<TabItem value="parameters">

<DocsTable columns={[
  {
    wrappers: [{
      tag: 'code',
      attrs: {style:"max-width: 250px"}
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
      <th><strong>Required</strong></th>
      <th><strong>Description</strong></th>
      <th><strong>Format/Allowed/<br/>Default values</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>amount</td>
      <td>float64 | nullable</td>
      <td>Optional (value of null) if full capture is required</td>
      <td>capture amount</td>
      <td>format: 00.00, must be a positive number; if the value is set to null, full capture will be processed</td>
    </tr>
  </tbody>
</table>
</DocsTable>

</TabItem>
</Tabs>

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
    "networkTransactionReference": "0000003877089021874A",
    "authCode": "231351",
    "amount": 56.41,
    "orderReference": "1667207373325",
    "remainingBalance": 56.41,
    "success": true,
    "message": "Successfully captured the transaction"
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
         <td>capture transaction id</td>
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
         <td>orderReference</td>
         <td>string</td>
         <td>order reference for the original transaction</td>
      </tr>
      <tr>
         <td>remainingBalance</td>
         <td>float64</td>
         <td>balance after capture was applied for the original transaction</td>
      </tr>
      <tr>
         <td>success</td>
         <td>bool</td>
         <td>flag to indicate status of the capture transaction</td>
      </tr>
      <tr>
         <td>message</td>
         <td>string</td>
         <td>capture transaction completion message</td>
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
