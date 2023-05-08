---
sidebar_position: 6
---

import EndpointsTab from '/src/components/global/EndpointsTab';
import DocsTable from '/src/components/global/DocsTable';
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
  defaultValue="example"
  values={[
  {label: 'Request example', value: 'example'},
  {label: 'Request parameters', value: 'parameters'},
]}>
<TabItem value="example">

```json
{
  "browserDetails": {
    "acceptHeader": "text/html",
    "javaEnabled": false,
    "language": "ru",
    "colorDepth": "24",
    "screenHeight": "2048",
    "screenWidth": "1152",
    "timeZone": "-360",
    "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36"
  },
  "customerDetails": {
    "accountId": "ID123",
    "email": "d.john@proton.me",
    "deliveryAddress": {
      "firstName": "John",
      "lastName": "Doe",
      "addressLine1": "Address Line 1",
      "addressLine2": "Address Line 2",
      "postalCode": "P1234",
      "city": "Berlin",
      "phone": "+187312345",
      "country": "DE"
    },
    "billingAddress": {
      "firstName": "Doe",
      "lastName": "Doe",
      "addressLine1": "Address Line 1",
      "addressLine2": "Address Line 2",
      "postalCode": "P1234",
      "city": "Berlin",
      "phone": "+187312345",
      "country": "DE"
    }
  },
  "paymentSessionId": "a68d2c6b-0d01-43d0-8813-6a453fc46c74",
  "paymentMethod": "card",
  "cardData": {
    "encrypted": "PaG6rxSCfiOqO1HQvHu8aDDjkXoQqqP+fqLEd1YoiHJnZ40aeyaXhr/7ofP7SX1sTwXl2Tp65DBTq3zSp93MRilcXl7Af7BfI+izuUlUuo50IWvx5zTjbDWZ76XJDtb3WOGhv7vdtpzLskfd6GC+liqf9YoqndGhXcufVILBoKMjX544A4IND5rTx13dfN250g/jl0CmaWmufoDItokH8dXOG0jzwwdIqbdEz36kmfgwxiwEv2WXSgNOJc/tf3aJGdWCOZKart+PqNGjNT2V3h1vLVwAOUTJHWeG8+Vguoaryur1LA/tlNJLArdxSUlAty9g2EsRZiMsgf6Bu0sxhw=="
  }
}


```

</TabItem>
<TabItem value="parameters">

<DocsTable columns={[
  {
    wrappers: [{
      tag: 'code',
      attrs: {style:"max-width: 220px"}
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
      <td>paymentMethod</td>
      <td>string</td>
      <td></td>
      <td>transaction payment method</td>
      <td>card</td>
    </tr>
    <tr>
      <td>cardData.encrypted</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>SHA-256 public key encrypted card data</td>
      <td></td>
    </tr>
    <tr>
      <td>cardTokenId</td>
      <td>string</td>
      <td>require for the second and onwards txs</td>
      <td>saved card data token id</td>
      <td>uuid4</td>
    </tr>
    <tr>
      <td>terminalId</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>merchant terminal id</td>
      <td>uuid4</td>
    </tr>
    <tr>
      <td>transactionType</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>type of a transaction</td>
      <td>auth | sale | verification</td>
    </tr>
    <tr>
      <td>orderDetails.description</td>
      <td>string</td>
      <td></td>
      <td>description of order transaction</td>
      <td></td>
    </tr>
    <tr>
      <td>orderDetails.orderReference</td>
      <td>string</td>
      <td></td>
      <td>merchant internal order reference</td>
      <td></td>
    </tr>
    <tr>
      <td>orderDetails.cartReference</td>
      <td>string</td>
      <td></td>
      <td>merchant internal cart reference</td>
      <td></td>
    </tr>
    <tr>
      <td>orderDetails.amount</td>
      <td>float64</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>transaction amount</td>
      <td></td>
    </tr>
    <tr>
      <td>orderDetails.currency</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>transaction currency</td>
      <td>EUR | USD iso4217 standard</td>
    </tr>
    <tr>
      <td>orderDetails.items</td>
      <td>list</td>
      <td></td>
      <td>transaction list of items</td>
      <td></td>
    </tr>
    <tr>
      <td>urls.cancel</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>fallback url for a cancelled transaction</td>
      <td>merchant page url</td>
    </tr>
    <tr>
      <td>urls.success</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>fallback url for a successful transaction</td>
      <td>merchant page url</td>
    </tr>
    <tr>
      <td>urls.failure</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>fallback url for a failed transaction</td>
      <td>merchant page url</td>
    </tr>
    <tr>
      <td>urls.callback</td>
      <td>string</td>
      <td></td>
      <td>callback url after a successful transaction</td>
      <td>merchant page url</td>
    </tr>
    <tr>
      <td>browserDetails.acceptHeader</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>“text/html”</td>
    </tr>
    <tr>
      <td>browserDetails.javaEnabled</td>
      <td>boolean</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>false</td>
    </tr>
    <tr>
      <td>browserDetails.language</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>IETF BCP47 standard | eu-US</td>
    </tr>
    <tr>
      <td>browserDeatils.colorDepth</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>“24”</td>
    </tr>
    <tr>
      <td>browserDetails.screenHeight</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>“1920”</td>
    </tr>
    <tr>
      <td>browserDetails.screenWidth</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>“1080”</td>
    </tr>
    <tr>
      <td>browserDetails.timeZone</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>“-360”</td>
    </tr>
    <tr>
      <td>browserDetails.userAgent</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>“Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36&quot;</td>
    </tr>
    <tr>
      <td>customerDetails.email</td>
      <td>string</td>
      <td></td>
      <td>transaction owner email</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.deliveryAddress.firstName</td>
      <td>string</td>
      <td></td>
      <td>transaction owner first name</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.deliveryAddress.lastName</td>
      <td>string</td>
      <td></td>
      <td>transaction owner last name</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.deliveryAddress.addressLine1</td>
      <td>string</td>
      <td></td>
      <td>transaction owner address line 1</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.deliveryAddress.addressLine2</td>
      <td>string</td>
      <td></td>
      <td>transaction owner address line 2</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.deliveryAddress.postalCode</td>
      <td>string</td>
      <td></td>
      <td>transaction owner postal code</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.deliveryAddress.phone</td>
      <td>string</td>
      <td></td>
      <td>transaction owner phone number</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.deliveryAddress.country</td>
      <td>string</td>
      <td></td>
      <td>transaction owner country code</td>
      <td>required ISO 3166-2</td>
    </tr>
    <tr>
      <td>customerDetails.billingAddress.firstName</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>billing address holder first name</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.billingAddress.listName</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>billing address holder last name</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.billingAddress.addressLine1</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>billing address holder address line 1</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.billingAddress.addressLine2</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>billing address holder address line 2</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.billingAddress.postalCode</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>billing address holder postal code</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.billingAddress.phone</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>billing address holder phone</td>
      <td></td>
    </tr>
    <tr>
      <td>customerDetails.billingAddress.country</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>billing address holder country code</td>
      <td>required ISO 3166-2</td>
    </tr>
    <tr>
      <td>externalUserId</td>
      <td>string</td>
      <td></td>
      <td>partner user id of flexible format</td>
      <td></td>
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
  "id": "87b5eee0-5fb7-4ace-9fb9-175ce38b354b",
  "orderReference": "1683542010846",
  "amount": 126.27,
  "currency": "EUR",
  "paymentMethod": "card",
  "success": true,
  "message": "Success",
  "threeDS": {
    "html": "\u003c!doctype html\u003e\u003chtml lang='en'\u003e\u003chead\u003e\u003ctitle\u003eACS Authentication Page\u003c/title\u003e\u003cscript src='https://www.threedsecurempi.com/EMVTDS/jsp/CardHolder/PostForm.js'\u003e\u003c/script\u003e\u003cmeta charset='utf-8'\u003e\u003c/head\u003e\u003cbody\u003e\u003cform name='payer' id='payer' action='https\u0026#x3A;\u0026#x2F;\u0026#x2F;www.threedsecurempi.com\u0026#x2F;EMVTDS\u0026#x2F;AUT\u0026#x3F;Action\u0026#x3D;ProcessCReq' method='POST' style='display: none'\u003e\u003cinput type=\"hidden\" name=\"threeDSSessionData\" value=\"eyJ0cmFuc2FjdGlvbklkIjoiODdiNWVlZTAtNWZiNy00YWNlLTlmYjktMTc1Y2UzOGIzNTRiIn0\"/\u003e\u003cinput type='hidden' name='creq' value='eyJhY3NUcmFuc0lEIjoiZjU4ODQ4ZjAtZGEzZi00M2Q1LThmZWEtNjJlZWQ5YTlmZTgwIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiJlNDEwYzU2OS03NGQxLTRjMzgtOWEyMi02YzA3OGM0MzZlN2MiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0'/\u003e\u003cscript type='application/javascript' \u003edocument.forms[0].submit()\u003c/script\u003e\u003c/form\u003e\u003c/body\u003e\u003c/html\u003e",
    "creq": "eyJhY3NUcmFuc0lEIjoiZjU4ODQ4ZjAtZGEzZi00M2Q1LThmZWEtNjJlZWQ5YTlmZTgwIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiJlNDEwYzU2OS03NGQxLTRjMzgtOWEyMi02YzA3OGM0MzZlN2MiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",
    "threeDSSessionData": "eyJ0cmFuc2FjdGlvbklkIjoiODdiNWVlZTAtNWZiNy00YWNlLTlmYjktMTc1Y2UzOGIzNTRiIn0",
    "action": "https://www.threedsecurempi.com/EMVTDS/AUT?Action=ProcessCReq"
  },
  "status": "3ds-required",
  "cardTokenId": "6a8185f0-c4bf-4157-92bd-061722c87658",
  "cardMask": "******1111",
  "cardExpiryDate": "12/27",
  "cardholderName": "John Doe",
  "cardScheme": "visa"
}


```

</TabItem>

<TabItem value="parameters">

<DocsTable columns={[
  {
    wrappers: [{
      tag: 'code',
      attrs: {style:"max-width: 220px"}
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
         <td>success</td>
         <td>boolean</td>
         <td>flag to indicate the status for the request</td>
      </tr>
      <tr>
         <td>message</td>
         <td>string</td>
         <td>request response message</td>
      </tr>
      <tr>
         <td>threeDS.html</td>
         <td>string</td>
         <td>html generated window for entering 3ds password</td>
      </tr>
      <tr>
         <td>threeDS.creq</td>
         <td>string</td>
         <td></td>
      </tr>
      <tr>
         <td>threeDS.threeDSSessionData</td>
         <td>string</td>
         <td></td>
      </tr>
      <tr>
         <td>threeDS.action</td>
         <td>string</td>
         <td>endpoint to trigger 3ds check data validation</td>
      </tr>
      <tr>
         <td>status</td>
         <td>string</td>
         <td>indicates if 3ds is required at this current step</td>
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
         <td>captured</td>
         <td>boolean</td>
         <td>flag to indicate if the funds were blocked</td>
      </tr>
   </tbody>
</table>
</DocsTable>

</TabItem>
</Tabs>

:::info

**On success:** no response, status code `200`

:::

#### Response predefined constants:

<table>
  <thead>
    <tr>
      <th><strong>Field</strong></th>
      <th><strong>Value</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>status</td>
      <td>“3ds-skipped”</td>
      <td></td>
    </tr>
    <tr>
      <td>status</td>
      <td>“3ds-required”</td>
      <td></td>
    </tr>
    <tr>
      <td>cardScheme</td>
      <td>“visa”</td>
      <td></td>
    </tr>
    <tr>
      <td>cardScheme</td>
      <td>“mastercard”</td>
      <td></td>
    </tr>
  </tbody>
</table>

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
