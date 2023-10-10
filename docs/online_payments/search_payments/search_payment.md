---
sidebar_position: 6
sidebar_custom_props:
  description: Search payment
---

import EndpointsTab from '/src/components/global/EndpointsTab';
import DocsTable from '/src/components/global/DocsTable';
import ExpandableTable from '/src/components/global/ExpandableTable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Search payment

## Search payment

Search payment request.

This section provides information on how to search payment transaction.

#### Endpoints

<EndpointsTab method="get" url="/payments/search" />

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

#### Request query parameters:

<table>
   <thead>
      <tr>
         <th>Name</th>
         <th>Description</th>
         <th>Type</th>
         <th>Required</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>transactionId</td>
         <td>Transaction identificator</td>
         <td>Guid</td>
         <td>Required if orderReference query parameter is't provided</td>
      </tr>
      <tr>
         <td>orderReference</td>
         <td>Order reference</td>
         <td>string</td>
         <td>Required if transactionId query parameter is't provided</td>
      </tr>
   </tbody>
</table>

:::info

**Note:** transactionId query parameter has higher priority than orderReference query parameter in payment search

:::

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
    "id": "6fff162f-1273-4e44-9392-694cdc2e8a22",
    "orderReference": "1667207373325",
    "amount": 430.43,
    "currency": "EUR",
    "paymentMethod": "card",
    "message": "Approved and completed successfully",
    "threeDS": {
        "status": "Y",
        "electronicCommerceIndicator": "05",
        "acsTranscationId": "a644e943-6bfd-46cd-ab98-d5f409e7466c",
        "mpiTransactionId": "5d175d02-4590-4aec-a384-40f7bddf8f4b",
        "directoryTransactionId": "8dbdff02-8df0-4ab8-b956-30481512cc88"
    },
    "status": "charged",
    "cardTokenId": "2f40d3d4-6068-49ca-8772-b8b115ca40dd",
    "cardMask": "******0000",
    "cardExpiryDate": "08/49",
    "cardholderName": "AAA AAA",
    "cardScheme": "visa",
    "cvvStatus": " 06",
    "cvvStatusDecoded": "not provided",
    "networkTransactionReference": "000001832120817",
    "responseCode": "00",
    "authCode": "063158"
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
         <td>newly created transaction id</td>
      </tr>
      <tr>
         <td>orderReference</td>
         <td>string</td>
         <td>merchant internal order reference</td>
      </tr>
      <tr>
         <td>amount</td>
         <td>float64</td>
         <td>amount of a newly created transaction</td>
      </tr>
      <tr>
         <td>currency</td>
         <td>string</td>
         <td>currency of a newly created transaction</td>
      </tr>
      <tr>
         <td>paymentMethod</td>
         <td>string</td>
         <td>payment method used to create the transaction</td>
      </tr>
      <tr>
         <td>message</td>
         <td>string</td>
         <td>request response message</td>
      </tr>
      <tr>
         <td>threeDS.status</td>
         <td>string</td>
         <td>3DS-2 process status</td>
      </tr>
      <tr>
         <td>threeDS.electronicCommerceIndicator</td>
         <td>string</td>
         <td>generated electronic commerce indicator</td>
      </tr>
      <tr>
         <td>threeDS.acsTranscationId</td>
         <td>string</td>
         <td>acs transaction id</td>
      </tr>
      <tr>
         <td>threeDS.mpiTransactionId</td>
         <td>string</td>
         <td>mpi transaction id</td>
      </tr>
      <tr>
         <td>threeDS.directoryTransactionId</td>
         <td>string</td>
         <td>directory transaction id</td>
      </tr>
      <tr>
         <td>status</td>
         <td>string</td>
         <td>transaction status</td>
      </tr>
      <tr>
         <td>cardTokenId</td>
         <td>string</td>
         <td>card token id of the stored card credentials</td>
      </tr>
      <tr>
         <td>cardMask</td>
         <td>string</td>
         <td>masked card number</td>
      </tr>
      <tr>
         <td>cardExpiryDate</td>
         <td>string</td>
         <td>card expiration date</td>
      </tr>
      <tr>
         <td>cardholderName</td>
         <td>string</td>
         <td>card owner first last name</td>
      </tr>
      <tr>
         <td>cardScheme</td>
         <td>string</td>
         <td>card type</td>
      </tr>
      <tr>
         <td>cvvStatus</td>
         <td>string</td>
         <td>raw cvv status</td>
      </tr>
      <tr>
         <td>cvvStatusDecoded</td>
         <td>string</td>
         <td>decoded cvv status</td>
      </tr>
      <tr>
         <td>networkTransactionReference</td>
         <td>string</td>
         <td>network transaction reference</td>
      </tr>
      <tr>
         <td>responseCode</td>
         <td>string</td>
         <td>generated response code</td>
      </tr>
      <tr>
         <td>authCode</td>
         <td>string</td>
         <td>generated auth code</td>
      </tr>
   </tbody>
</table>
</DocsTable>

</TabItem>
</Tabs>

:::info

**On success:** status code `200`

:::

#### Transaction status code decoding:
<table>
  <thead>
    <tr>
      <th><strong>Transaction status code</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Y</td>
      <td>Authentication / Account verification successful</td>
    </tr>
    <tr>
      <td>N</td>
      <td>Not authenticated / account not verified; transaction denied</td>
    </tr>
    <tr>
      <td>U</td>
      <td>Authentication / Account verification could not be performed; technical or other problem, as indicated in ARes or RReq</td>
    </tr>
    <tr>
      <td>A</td>
      <td>Attempts processing performed; not authenticated / verified, but a proof of attempted authentication / verification is provided</td>
    </tr>
    <tr>
      <td>C</td>
      <td>Challenge required; additional authentication is required using the CReq/CRes</td>
    </tr>
    <tr>
      <td>R</td>
      <td>Authentication / account verification rejected; issuer is rejecting authentication / verification and request request that authorization not be attempted</td>
    </tr>
  </tbody>
</table>

#### Unsuccessful transaction Response:

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
    "id": "1239b627-a4b6-447e-a3de-92d27f9c1a72",
    "orderReference": "1667207373325",
    "amount": 430.43,
    "currency": "EUR",
    "paymentMethod": "card",
    "message": "Authentication rejected (cardholder not enrolled in service)",
    "threeDS": {
        "status": "N",
        "electronicCommerceIndicator": "00",
        "acsTranscationId": "21eb31ed-5b91-4ed0-873e-118df1b7f10a",
        "mpiTransactionId": "17ea29d6-c325-423e-a1b7-6d83094a45b1",
        "directoryTransactionId": "9dba0015-32f5-4e08-a878-42b3bee4a5db",
        "statusReason": "13"
    },
    "status": "rejected",
    "cardTokenId": "ec8eb8a9-75f2-4b36-902f-647adf97706e",
    "cardMask": "******6672",
    "cardExpiryDate": "08/49",
    "cardholderName": "AAA AAA",
    "cardScheme": "mastercard"
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
         <td>newly created transaction id</td>
      </tr>
      <tr>
         <td>orderReference</td>
         <td>string</td>
         <td>merchant internal order reference</td>
      </tr>
      <tr>
         <td>amount</td>
         <td>float64</td>
         <td>amount of a newly created transaction</td>
      </tr>
      <tr>
         <td>currency</td>
         <td>string</td>
         <td>currency of a newly created transaction</td>
      </tr>
      <tr>
         <td>paymentMethod</td>
         <td>string</td>
         <td>payment method used to create the transaction</td>
      </tr>
      <tr>
         <td>message</td>
         <td>string</td>
         <td>request response message</td>
      </tr>
      <tr>
         <td>threeDS.status</td>
         <td>string</td>
         <td>3DS-2 process status</td>
      </tr>
      <tr>
         <td>threeDS.electronicCommerceIndicator</td>
         <td>string</td>
         <td>generated electronic commerce indicator</td>
      </tr>
      <tr>
         <td>threeDS.acsTranscationId</td>
         <td>string</td>
         <td>acs transaction id</td>
      </tr>
      <tr>
         <td>threeDS.mpiTransactionId</td>
         <td>string</td>
         <td>mpi transaction id</td>
      </tr>
      <tr>
         <td>threeDS.directoryTransactionId</td>
         <td>string</td>
         <td>directory transaction id</td>
      </tr>
      <tr>
         <td>threeDS.statusReason</td>
         <td>string</td>
         <td>encoded status reason (see Response Codes tab for details)</td>
      </tr>
      <tr>
         <td>status</td>
         <td>string</td>
         <td>transaction status</td>
      </tr>
      <tr>
         <td>cardTokenId</td>
         <td>string</td>
         <td>card token id of the stored card credentials</td>
      </tr>
      <tr>
         <td>cardMask</td>
         <td>string</td>
         <td>masked card number</td>
      </tr>
      <tr>
         <td>cardExpiryDate</td>
         <td>string</td>
         <td>card expiration date</td>
      </tr>
      <tr>
         <td>cardholderName</td>
         <td>string</td>
         <td>card owner first last name</td>
      </tr>
      <tr>
         <td>cardScheme</td>
         <td>string</td>
         <td>card type</td>
      </tr>
   </tbody>
</table>
</DocsTable>

</TabItem>
</Tabs>

#### Payment statuses:

- new
- authorized
- charged
- rejected
- failed
- 3d
- cancelled
- refunded

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

:::info

**Response Code Descriptions check** *[here](/docs-portal/online_payments/response_codes)*

:::