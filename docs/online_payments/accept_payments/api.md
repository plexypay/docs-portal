---
sidebar_position: 6
---
import EndpointInfo from '/src/components/global/EndpointInfo';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API only
## Initiate a transaction

Base payment request.

Creates transaction with the data provided. Can require both 3ds authentication or skip it.

<EndpointInfo method="post">/v1/payments/</EndpointInfo>

#### Request headers:

| Name | Value | Required |
| :--- | :----: | ----: |
| Authorization | private key | Yes |
| Content-Type | application/json | Yes |


#### Request body

<Tabs
    defaultValue="payload"
    values={[
        {label: 'Request payload', value: 'payload'},
        {label: 'Request response', value: 'response'},
    ]}>
<TabItem value="payload">

| **Parameter name** | **Type** | **State** | **Description** | **Format/Allowed/Default values** |
| :--- | --- | --- | --- | --- |
| paymentMethod | string | optional | transaction payment method | “card” |
| cardData.encrypted | string | required for the first request | SHA-256 public key encrypted card data |     |
| cardTokenId | string | require for the second and onwards txs | saved card data token id | uuid4 |
| terminalId | string | required | merchant terminal id | uuid4 |
| transactionType | string | required | type of a transaction | auth \| sale \| verification |
| orderDetails.description | string | optional | description of order transaction |     |
| orderDetails.orderReference | string | optional | merchant internal order reference |     |
| orderDetails.cartReference | string | optional | merchant internal cart reference |     |
| orderDetails.amount | float64 | required | transaction amount |     |
| orderDetails.currency | string | required | transaction currency | EUR \| USD iso4217 standard |
| orderDetails.items | list | optional | transaction list of items |     |
| urls.cancel | string | required | fallback url for a cancelled transaction | merchant page url |
| urls.success | string | required | fallback url for a successful transaction | merchant page url |
| urls.failure | string | required | fallback url for a failed transaction | merchant page url |
| urls.callback | string | optional | callback url after a successful transaction | merchant page url |
| browserDetails.acceptHeader | string | required |     | “text/html” |
| browserDetails.javaEnabled | boolean | required |     | false |
| browserDetails.language | string | required |     | IETF BCP47 standard \| eu-US |
| browserDeatils.colorDepth | string | required |     | “24” |
| browserDetails.screenHeight | string | required |     | “1920” |
| browserDetails.screenWidth | string | required |     | “1080” |
| browserDetails.timeZone | string | required |     | “-360” |
| browserDetails.userAgent | string | required |     | “Mozilla/5.0 (Macintosh; Intel Mac OS X 10\_15\_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36" |
| customerDetails.email | string | optional | transaction owner email |     |
| customerDetails.deliveryAddress.firstName | string | optional | transaction owner first name |     |
| customerDetails.deliveryAddress.lastName | string | optional | transaction owner last name |     |
| customerDetails.deliveryAddress.addressLine1 | string | optional | transaction owner address line 1 |     |
| customerDetails.deliveryAddress.addressLine2 | string | optional | transaction owner address line 2 |     |
| customerDetails.deliveryAddress.postalCode | string | optional | transaction owner postal code |     |
| customerDetails.deliveryAddress.phone | string | optional | transaction owner phone number |     |
| customerDetails.deliveryAddress.country | string | optional | transaction owner country code | required ISO 3166-2 |
| customerDetails.billingAddress.firstName | string | required | billing address holder first name |     |
| customerDetails.billingAddress.listName | string | required | billing address holder last name |     |
| customerDetails.billingAddress.addressLine1 | string | required | billing address holder address line 1 |     |
| customerDetails.billingAddress.addressLine2 | string | required | billing address holder address line 2 |     |
| customerDetails.billingAddress.postalCode | string | required | billing address holder postal code |     |
| customerDetails.billingAddress.phone | string | required | billing address holder phone |     |
| customerDetails.billingAddress.country | string | required | billing address holder country code | required ISO 3166-2 |
| externalUserId | string | optional | partner user id of flexible format |     |

</TabItem>

<TabItem value="response">

| **Parameter name** | **Type** | **Description** | **Format/Allowed/Default values** |
| :--- | --- | --- | --- |
| id  | string | newly created transaction id | uuid |
| orderReference | string | merchant internal order reference |     |
| amount | float64 | amount of a newly created transaction |     |
| currency | string | currency of a newly created transaction |     |
| paymentMethod | string | payment method used to create the transaction |     |
| success | boolean | flag to indicate the status for the request |     |
| message | string | request response message |     |
| threeDS.html | string | html generated window for entering 3ds password |     |
| threeDS.creq | string |     |     |
| threeDS.threeDSSessionData | string |     |     |
| threeDS.action | string | endpoint to trigger 3ds check data validation |     |
| status | string | indicates if 3ds is required at this current step |     |
| cardTokenId | string | card token id of the stored card credentials | uuid4 |
| cardMask | string | masked card number | ******1111 |
| cardExpiryDate | string | card expiration date | 01/24 |
| cardholderName | string | card owner first last name |     |
| cardScheme | string | card type | visa \| mastercard |
| captured | boolean | flag to indicate if the funds were blocked |     |
</TabItem>
</Tabs>

:::info

**On success:** no response, status code `200`

:::

#### Response predefined constants:


| **Field** | **Value** | **Description** |
| :--- | --- | --- |
| status | “3ds-skipped” |     |
| status | “3ds-required” |     |
| cardScheme | “visa” |     |
| cardScheme | “mastercard” |     |


:::info

**On error:** status code != `200`

:::

| **Parameter name** | **Type** | **Description** |
| :--- | --- | --- |
| message | string | error message |
| code | int | error code |

