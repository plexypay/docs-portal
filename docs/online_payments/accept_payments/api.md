---
sidebar_position: 6
---

import EndpointsTab from '/src/components/global/EndpointsTab';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API only

## Initiate a transaction

Base payment request.

Creates transaction with the data provided. Can require both 3ds authentication or skip it.

#### Endpoints

<EndpointsTab method="post" url="/payments/" />

#### Request header parametres:

<table>
   <thead>
      <tr>
         <th align="left">Name</th>
         <th align="center">Value</th>
         <th align="center">Required</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td align="left">Authorization</td>
         <td align="center">private key</td>
         <td align="center"><icon icon="fa-check" color="green" /></td>
      </tr>
      <tr>
         <td align="left">Content-Type</td>
         <td align="center">application/json</td>
         <td align="center"><icon icon="fa-check" color="green" /></td>
      </tr>
   </tbody>
</table>

#### Request and response schema descriptions:

<Tabs
defaultValue="request"
values={[
{label: 'Request example', value: 'request'},
{label: 'Request parameters', value: 'response'},
]}>
<TabItem value="request">

| **Parameter name**                           | **Type** | **State**                              | **Description**                             | **Format/Allowed/Default values**                                                                                       |
| :------------------------------------------- | -------- | -------------------------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| paymentMethod                                | string   | optional                               | transaction payment method                  | “card”                                                                                                                  |
| cardData.encrypted                           | string   | required for the first request         | SHA-256 public key encrypted card data      |                                                                                                                         |
| cardTokenId                                  | string   | require for the second and onwards txs | saved card data token id                    | uuid4                                                                                                                   |
| terminalId                                   | string   | required                               | merchant terminal id                        | uuid4                                                                                                                   |
| transactionType                              | string   | required                               | type of a transaction                       | auth \| sale \| verification                                                                                            |
| orderDetails.description                     | string   | optional                               | description of order transaction            |                                                                                                                         |
| orderDetails.orderReference                  | string   | optional                               | merchant internal order reference           |                                                                                                                         |
| orderDetails.cartReference                   | string   | optional                               | merchant internal cart reference            |                                                                                                                         |
| orderDetails.amount                          | float64  | required                               | transaction amount                          |                                                                                                                         |
| orderDetails.currency                        | string   | required                               | transaction currency                        | EUR \| USD iso4217 standard                                                                                             |
| orderDetails.items                           | list     | optional                               | transaction list of items                   |                                                                                                                         |
| urls.cancel                                  | string   | required                               | fallback url for a cancelled transaction    | merchant page url                                                                                                       |
| urls.success                                 | string   | required                               | fallback url for a successful transaction   | merchant page url                                                                                                       |
| urls.failure                                 | string   | required                               | fallback url for a failed transaction       | merchant page url                                                                                                       |
| urls.callback                                | string   | optional                               | callback url after a successful transaction | merchant page url                                                                                                       |
| browserDetails.acceptHeader                  | string   | required                               |                                             | “text/html”                                                                                                             |
| browserDetails.javaEnabled                   | boolean  | required                               |                                             | false                                                                                                                   |
| browserDetails.language                      | string   | required                               |                                             | IETF BCP47 standard \| eu-US                                                                                            |
| browserDeatils.colorDepth                    | string   | required                               |                                             | “24”                                                                                                                    |
| browserDetails.screenHeight                  | string   | required                               |                                             | “1920”                                                                                                                  |
| browserDetails.screenWidth                   | string   | required                               |                                             | “1080”                                                                                                                  |
| browserDetails.timeZone                      | string   | required                               |                                             | “-360”                                                                                                                  |
| browserDetails.userAgent                     | string   | required                               |                                             | “Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36" |
| customerDetails.email                        | string   | optional                               | transaction owner email                     |                                                                                                                         |
| customerDetails.deliveryAddress.firstName    | string   | optional                               | transaction owner first name                |                                                                                                                         |
| customerDetails.deliveryAddress.lastName     | string   | optional                               | transaction owner last name                 |                                                                                                                         |
| customerDetails.deliveryAddress.addressLine1 | string   | optional                               | transaction owner address line 1            |                                                                                                                         |
| customerDetails.deliveryAddress.addressLine2 | string   | optional                               | transaction owner address line 2            |                                                                                                                         |
| customerDetails.deliveryAddress.postalCode   | string   | optional                               | transaction owner postal code               |                                                                                                                         |
| customerDetails.deliveryAddress.phone        | string   | optional                               | transaction owner phone number              |                                                                                                                         |
| customerDetails.deliveryAddress.country      | string   | optional                               | transaction owner country code              | required ISO 3166-2                                                                                                     |
| customerDetails.billingAddress.firstName     | string   | required                               | billing address holder first name           |                                                                                                                         |
| customerDetails.billingAddress.listName      | string   | required                               | billing address holder last name            |                                                                                                                         |
| customerDetails.billingAddress.addressLine1  | string   | required                               | billing address holder address line 1       |                                                                                                                         |
| customerDetails.billingAddress.addressLine2  | string   | required                               | billing address holder address line 2       |                                                                                                                         |
| customerDetails.billingAddress.postalCode    | string   | required                               | billing address holder postal code          |                                                                                                                         |
| customerDetails.billingAddress.phone         | string   | required                               | billing address holder phone                |                                                                                                                         |
| customerDetails.billingAddress.country       | string   | required                               | billing address holder country code         | required ISO 3166-2                                                                                                     |
| externalUserId                               | string   | optional                               | partner user id of flexible format          |                                                                                                                         |

</TabItem>

<TabItem value="response">

| **Parameter name**         | **Type** | **Description**                                   | **Format/Allowed/Default values** |
| :------------------------- | -------- | ------------------------------------------------- | --------------------------------- |
| id                         | string   | newly created transaction id                      | uuid                              |
| orderReference             | string   | merchant internal order reference                 |                                   |
| amount                     | float64  | amount of a newly created transaction             |                                   |
| currency                   | string   | currency of a newly created transaction           |                                   |
| paymentMethod              | string   | payment method used to create the transaction     |                                   |
| success                    | boolean  | flag to indicate the status for the request       |                                   |
| message                    | string   | request response message                          |                                   |
| threeDS.html               | string   | html generated window for entering 3ds password   |                                   |
| threeDS.creq               | string   |                                                   |                                   |
| threeDS.threeDSSessionData | string   |                                                   |                                   |
| threeDS.action             | string   | endpoint to trigger 3ds check data validation     |                                   |
| status                     | string   | indicates if 3ds is required at this current step |                                   |
| cardTokenId                | string   | card token id of the stored card credentials      | uuid4                             |
| cardMask                   | string   | masked card number                                | **\*\***1111                      |
| cardExpiryDate             | string   | card expiration date                              | 01/24                             |
| cardholderName             | string   | card owner first last name                        |                                   |
| cardScheme                 | string   | card type                                         | visa \| mastercard                |
| captured                   | boolean  | flag to indicate if the funds were blocked        |                                   |

</TabItem>
</Tabs>

:::info

**On success:** no response, status code `200`

:::

#### Response predefined constants:

| **Field**  | **Value**      | **Description** |
| :--------- | -------------- | --------------- |
| status     | “3ds-skipped”  |                 |
| status     | “3ds-required” |                 |
| cardScheme | “visa”         |                 |
| cardScheme | “mastercard”   |                 |

:::info

**On error:** status code != `200`

:::

| **Parameter name** | **Type** | **Description** |
| :----------------- | -------- | --------------- |
| message            | string   | error message   |
| code               | int      | error code      |

## Handle 3D Secure

3D Secure 2 is an authentication protocol that provides an additional layer of verification for card-not-present (CNP) transactions. We recommend that you use it to comply with authentication regulations for online payments such as PSD2 SCA, and to use liability shift rules.

#### We support two options:

- **Native**: The card issuer performs the authentication within your website or mobile app using passive, biometric, and two-factor authentication approaches. For more information, refer to 3D Secure 2 authentication flows.

- **Redirect**: Shoppers are redirected to the card issuer's site to provide additional authentication data, for example a password or an SMS verification code. The redirection might lead to lower conversion rates due to technical errors during the redirection, or shoppers dropping out of the authentication process.

## Tokenization

With ForoPay, you can securely store one or more payment details per shopper. This allows you to offer subscription payments, automatic top-ups to shopper accounts, and give your shoppers a faster checkout experience by using their stored card.

We refer to these saved payment details as tokens and storing a shopper's payment details as tokenization.

We support over 30 card and local payment methods, including major card brands, ACH, and SEPA direct debit. See Payment methods for more information.

#### Benefits of tokenization

- Let shoppers store their payment details for a faster checkout experience later.
- Offer shoppers their stored payment details for later payments.
- Save payment details for a subscription or a non-fixed schedule contract.
- Submit later payments for subscriptions or for automatic top-ups to shopper accounts.

To save your shopper's payment details, you only need to pass some additional parameters when making a payment. In the first payment, we collect the payment information from the shopper and generate a token for it. The token is then sent to your server for future use. For later payments, you need to make a request with the shopper reference and the token.

If you want to use existing recurring contracts from another payment service provider, you can migrate and import recurring payment details to ForoPay.
