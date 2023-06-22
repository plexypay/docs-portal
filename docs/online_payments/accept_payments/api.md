---
sidebar_position: 6
sidebar_custom_props:
  description: Initiate a transaction
---

import EndpointsTab from '/src/components/global/EndpointsTab';
import DocsTable from '/src/components/global/DocsTable';
import ExpandableTable from '/src/components/global/ExpandableTable';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# API only

## Initiate a transaction

Generic payment request.

This section provides information on how to initiate a payment transaction. The transaction can require 3DS authentication.

#### Endpoints

<EndpointsTab method="post" url="/payments" />

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
  "transactionType": "sale",
  "terminalId": "87b5eee0-5fb7-4ace-9fb9-175ce38b354b",
  "browserDetails": {
      "acceptHeader": "text/html",
      "javaEnabled": false,
      "language": "en-US",
      "colorDepth": "24",
      "screenHeight": "1440",
      "screenWidth": "900",
      "timeZone": "-360",
      "userAgent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36"
  },
  "orderDetails": {
      "description": "Demo Payment",
      "orderReference": "1667207373325",
      "cartReference": "32211122742521",
      "amount": 126.27,
      "currency": "EUR",
      "items": []
  },
  "customerDetails": {
      "email": "johndoe@foropay.com",
      "deliveryAddress": {
          "firstName": "John",
          "lastName": "Doe",
          "addressLine1": "Address Line 1 changed",
          "addressLine2": "Address Line 2 changed",
          "postalCode": "P1234",
          "city": "Munich",
          "phone": "+187312345",
          "country": "DE"
      },
      "billingAddress": {
          "firstName": "John",
          "lastName": "Doe",
          "addressLine1": "Address Line 1 changed",
          "addressLine2": "Address Line 2 changed",
          "postalCode": "P123456",
          "city": "Munich",
          "phone": "+187312345",
          "country": "DE"
      }
  },
  "threeDSNotificationUrl": "https://test-api.foropay.eu/v1/3ds/callback",
  "paymentMethod": "card",
  "cardData": {
     "encryptedCardNumber": "hJjwmfFp3c/50xIKyPtsK9NI/Z8DFfxQyeDMpI4PohR8Bzpl7eEQgqjfcC1JIvRep98Hu9b4G9VvgpFNf3PmlVQygidNGqOyKOCESiQnh57ofOYKiEuYIr/LwY3TRcfvC+WE9AmvW9l/2VcLVm5SPZ6MoEKU0njpti6VWnKqrNzp5fmHwkWKKmuc1V+YjLgWAiAbYgnPNG6wG4BuaQk6p/IFIVH+Ur40z1XF0/zezybsXSJfLF2F0PKri2cO6V89cTQYb4Usiu9W+pckVyeeMYOKPykU05NPyhd3VmDrAf8gvdUq2K4CON2l+99u6XoQ9tDlBgysoll7vy0BjSMkGw==",
     "encryptedExpiryMonth": "l0K5uY9qv+QeaXdiBdL9tNLTv8wiEvDxy2dWaehdwQJw70KaHrPqPMc6kIxXtRtE1J74zLci3A7xJDNO3UrdggpEkaO6iOlkUa7I+GdxbVTx1uR9bwJfHa9T8F/vN67mir4eKB/9lTHHKkLxD0+cH4dnlHBbyFXrxUhWPWlSZ+Vj3W3GXPm+bb0rCUHhVkHwSK4qcGs9q23fRZYzfo3G2P6NZYw2+hWJiP5s9oBFuZtNElresBqkvbFP+SmxbPy4mRaE6sXAT1SuYOC7J9NJhEa+VU2yQkocdG/PEt9KpXVKq0JwNozI5bgpxfxxt3smaGvThgoyzkyBUdkPCXJS2w==",
     "encryptedExpiryYear": "KgER1av3pMHiGohuPsuPKCzZz0wM6EszkLYFHEpI/lqEvLp4X6IaBSh350sXianXCslpNBeTegyth9vcyet+HPPsXiwKoF1q5b4SmDVYAXqhIKELUku8j18UlYleZfr0YtucXM1/DWzdVraDOhMrUJBigkK4UEW0BMiqZvQZRHKW44slRumJyXq7NYOMmsqqhuwxImXlD/V33Pjofs24ZPNdOTorU30+Rqz7WoVW7/CsO3glEjICT6iaJu3X+AeAdWhI9oWiWGVcgYdKgIN7mltWKNSMhtnCAHRHs7MJIQPzpte5nkXh6e6dPQ6j5DzZd75tkzaexbzcxqIAJnq58Q==",
     "encryptedCvv": "JTfCaV/2/eT6FfyjcW0uJC1lp+iCJ99eZTCCfZHtGv7yK+bDp++7u1WDeYKvZMnfO0OkwZ+pibhdVDsiOEKfpsIjbTfFk1oGm2A2zQcJSvOe8G/g6+BoYGy1FOUymni/v457+CUEfeh1Z83IChWEAsFvWl90VXOKj8gS7YRV8pfuDzA0tIAPeCi932RuEMarq4M+zyZbZfmAksV/Y3vlk1VGRoL3ljXu0MMvGaC+50kgb6pXkwo/j/zxbvJOXN0e+riIZvl7MMJUD6PNGC8bb/NnKfGACtlOQixP5yCnK9GeylIOWbXnZ3h85sSEeaga8DxAsvgV7vp/wVGJg+czXw==",
     "encryptedCardholderName": "VmI55RoiVB0cSnSU+wpuSrwDBFLEbpXQWMnsKRwT81vsfXa6WiczG4GbXjc4oIbJawcCJ8XfmRqW2NKyCoraPUJ87qm+gUl7mCfU+8qgnqWwi0DHdS21SXU0ROz2TSIrS+Z8FES0bVAcn34C71QiWmVTuidSSnrSTr3YNaE7fV9niHfVLEXjSbkF0kE4t8F2xLxB4E1KagNIvwlpD4BjY4qUJfigFlJI/ECTne/kz73r1E+Ij0LgGg8FvlJZ/JgEHdRgoKYklBZn0gOVFU7Vj8uhMfO2MfXe+10hOid1hTQkU/U2X6coMU/ttFjYuA2odP3M7Try4hhtKsKURsyETg==",
     "tokenId": "a5399a91-d03e-40d0-bd74-f039a03def19"
  },
  "externalUserId": "a68d2c6b-0d01-43d0-8813-6a453fc46c74",
  "skipThreeDS": false,
  "moto": false,
  "recurring": {
   "parentTransactionId": "45072f5d-0090-4efd-89c9-4f933a9b1e10",
   "recurringType": "ucof"
  },
  "scaExemption": null
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
      <td>transactionType</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>type of a transaction</td>
      <td>auth | sale | verification</td>
    </tr>
    <tr>
      <td>terminalId</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>merchant terminal id</td>
      <td>uuid4</td>
    </tr>
    <tr>
      <td>browserDetails.acceptHeader</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>text/html</td>
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
      <td>24</td>
    </tr>
    <tr>
      <td>browserDetails.screenHeight</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>1920</td>
    </tr>
    <tr>
      <td>browserDetails.screenWidth</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>1080</td>
    </tr>
    <tr>
      <td>browserDetails.timeZone</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>-360</td>
    </tr>
    <tr>
      <td>browserDetails.userAgent</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td></td>
      <td>Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36</td>
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
      <td>threeDSNotificationUrl</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>3DS-2 redirect URL to be triggered by the ASC server</td>
      <td>https://test-api.foropay.eu/v1/3ds/callback</td>
    </tr>
    <tr>
      <td>paymentMethod</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>transaction payment method</td>
      <td>card</td>
    </tr>
    <tr>
      <td>cardData.encryptedCardNumber</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by card data RSA public key value of card number</td>
      <td></td>
    </tr>
    <tr>
      <td>cardData.encryptedExpiryMonth</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by card data RSA public key value of card expiry month</td>
      <td></td>
    </tr>
    <tr>
      <td>cardData.encryptedExpiryYear</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by card data RSA public key value of card expiry year</td>
      <td></td>
    </tr>
    <tr>
      <td>cardData.encryptedCvv</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by card data RSA public key value of card CVV</td>
      <td></td>
    </tr>     
    <tr>
      <td>cardData.encryptedCardholderName</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by card data RSA public key value of cardholder name</td>
      <td></td>
    </tr>       
    <tr>
      <td>cardData.tokendId</td>
      <td>string</td>
      <td>require for the second and onwards txs</td>
      <td>saved card data token id</td>
      <td>uuid4</td>
    </tr>
    <tr>
      <td>externalUserId</td>
      <td>string</td>
      <td></td>
      <td>partner user id of flexible format</td>
      <td></td>
    </tr>
    <tr>
      <td>skipThreeDS</td>
      <td>boolean</td>
      <td></td>
      <td>flag which allows to skip 3DS on given request</td>
      <td></td>
    </tr>
    <tr>
      <td>moto</td>
      <td>boolean</td>
      <td></td>
      <td>flag which marks request as MOTO</td>
      <td></td>
    </tr>     
    <tr>
      <td>recurring.parentTransactionId</td>
      <td>string</td>
      <td>required when recurring.recurringType is ucof</td>
      <td>id of parent recurring transaction</td>
      <td>uuid4</td>
    </tr>      
    <tr>
      <td>recurring.recurringType</td>
      <td>string</td>
      <td>required if recurring node filled</td>
      <td>recurring type</td>
      <td>available values: cof_initial, ucof</td>
    </tr>       
    <tr>
      <td>scaExemption</td>
      <td>string</td>
      <td>optional</td>
      <td>sca exemption type</td>
      <td>available values: low_value</td>
    </tr>         
  </tbody>
</table>
</DocsTable>

</TabItem>
</Tabs>

### Card data encryption

Use the following RSA public key for encryption.

<Tabs
  groupId="rsa"
  defaultValue="live"
  values={[
  {label: 'Live', value: 'live'},
  {label: 'Sandbox', value: 'sandbox'},
]}>
<TabItem value="live">

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAswwqS5WBuidIfRnGYblj
KF84svc6CidLBjAcUr9uiDBHNAHMnSXYANPgnBrht2w46+RZ9FbtcR5MX7JNQdkE
ZE6jW0rzFrZmvgBmIk8AJdPb0FLvIJBn4jpPeSEI68qakOWr0hgzg2T8vV5D92pU
e/+HgdphNjuqCPcmCf4oULc5vaWgazhpJsh5EV8rMHM3BJpLKwDJXn8Gu2imtbl5
cZqZe7+6HrMSCuUbhtAuua228MiotK67QA9+WAecLJaBYwWoEVbRNfg6UdcXCkO3
sEMy/YEPPWo0XxsjaSFbgZ3wXoN0LH1X9hZmhRvLzIXnNtQHGkw+WYYMoulnFld9
BwIDAQAB
-----END PUBLIC KEY-----
```

</TabItem>

<TabItem value="sandbox">

```
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGCrykg4o+ZqShJs2yum
5GZiD5P/D8twtYqXInEOO+Td6TKuGakIYL/dXh89iCOMHeGxFwUVv7zY6h519J8y
cPK5Ov44dNz6Sm21rJMaZM4bdGvDvNbg6SlUloL2bh4wfYfA2sKub4N4gEeG+KXd
DHFvv+jfB2FPZXEx7FdikwfpWglYwKw3i33mChPeyXrB6wDMQRGRorNWbD/3MYbi
LMujcwZW3BSqYkDCc0ab/M0JlDxGrTLuOB5Qc7R+RMFBfvjtA0r+lUUT31CQ4IcS
qSIJu9KkYKm9Xx4FxaoxTymKrHR4YEKRieGFxbklUkl+q0zxM2fKJC01GAIIjZ9a
LQIDAQAB
-----END PUBLIC KEY-----
```

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
  "orderReference": "1667207373325",
  "amount": 126.27,
  "currency": "EUR",
  "paymentMethod": "card",
  "success": true,
  "captured": true,
  "message": "Success",
  "threeDS": {
        "html": "<!doctype html><html lang='en'><head><title>ACS Authentication Page</  title><script src='https://www.threedsecurempi.com/EMVTDS/jsp/CardHolder/PostForm.js'></script><meta charset='utf-8'></head><body><form name='payer' id='payer' action='https&#x3A;&#x2F;&#x2F;www.threedsecurempi.com&#x2F;EMVTDS&#x2F;AUT&#x3F;Action&#x3D;ProcessCReq' method='POST' style='display: none'><input type=\"hidden\" name=\"threeDSSessionData\" value=\"eyJ0cmFuc2FjdGlvbklkIjoiYzNiY2ZkNDAtMjg1Yi00OTZhLTgyYzMtY2UxYzIyNzFhYWUyIn0\"/><input type='hidden' name='creq' value='eyJhY3NUcmFuc0lEIjoiN2RjZTJjZTctYmQ4OC00YzZmLWEyNzgtOWU5MzFlYzU2OThiIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiJjMDllY2Q5MC02MGI2LTRjMDktODc1Mi0yNmMxOWE4NGU2ZjMiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0'/><script type='application/javascript' >document.forms[0].submit()</script></form></body></html>",
        "type": "challengeflow",
        "creq": "eyJhY3NUcmFuc0lEIjoiN2RjZTJjZTctYmQ4OC00YzZmLWEyNzgtOWU5MzFlYzU2OThiIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiJjMDllY2Q5MC02MGI2LTRjMDktODc1Mi0yNmMxOWE4NGU2ZjMiLCJjaGFsbGVuZ2VXaW5kb3dTaXplIjoiMDQiLCJtZXNzYWdlVHlwZSI6IkNSZXEiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIn0",
        "threeDSSessionData": "eyJ0cmFuc2FjdGlvbklkIjoiYzNiY2ZkNDAtMjg1Yi00OTZhLTgyYzMtY2UxYzIyNzFhYWUyIn0",
        "action": "https://www.threedsecurempi.com/EMVTDS/AUT?Action=ProcessCReq"
  },
  "status": "3ds-skipped",
  "cardTokenId": "7bafca06-9031-44bf-9289-c66e35ddbd91",
  "cardMask": "******0000",
  "cardExpiryDate": "11/27",
  "cardholderName": "John Doe",
  "cardScheme": "visa",
  "cvvStatus": "P",
  "cvvStatusDecoded": "not processed",
  "networkTransactionReference": "0000021266523063630A",
  "responseCode": "00",
  "authCode": "374952"
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
         <td>success</td>
         <td>boolean</td>
         <td>flag to indicate the status for the request</td>
      </tr>
      <tr>
         <td>captured</td>
         <td>boolean</td>
         <td>flag to indicate if the funds were blocked</td>
      </tr>
      <tr>
         <td>message</td>
         <td>string</td>
         <td>request response message</td>
      </tr>
      <tr>
         <td>threeDS.html</td>
         <td>string</td>
         <td>html generated pop-up window for entering 3ds password</td>
      </tr>
      <tr>
         <td>threeDS.type</td>
         <td>string</td>
         <td>3DS-2 type</td>
      </tr>
      <tr>
         <td>threeDS.creq</td>
         <td>string</td>
         <td>creq data to be sent to ACS server</td>
      </tr>
      <tr>
         <td>threeDS.threeDSSessionData</td>
         <td>string</td>
         <td>encrypted 3DS Session data</td>
      </tr>
      <tr>
         <td>threeDS.action</td>
         <td>string</td>
         <td>ACS server action URL</td>
      </tr>
      <tr>
         <td>status</td>
         <td>string</td>
         <td>indicates if 3ds-2 is required at this current step</td>
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

#### CVV code letter decoding:


<table>
  <thead>
    <tr>
      <th><strong>CVV code letter</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>(space)</td>
      <td>CAV2 was not provided</td>
    </tr>
    <tr>
      <td>M</td>
      <td>CAV2 match</td>
    </tr>
    <tr>
      <td>N</td>
      <td>CAV2 no match</td>
    </tr>
    <tr>
      <td>P</td>
      <td>CAV2 was not processed</td>
    </tr>
    <tr>
      <td>S</td>
      <td>CAV2 should be on card</td>
    </tr>
    <tr>
      <td>U</td>
      <td>Issuer does not participate in CAV2 service</td>
    </tr>
  </tbody>
</table>


#### CVV code number decoding:


<table>
  <thead>
    <tr>
      <th><strong>CVV code number</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>01</td>
      <td>passed verification - authentication</td>
    </tr>
    <tr>
      <td>02</td>
      <td>failed verification - authentication</td>
    </tr>
    <tr>
      <td>03</td>
      <td>passed validation - attempt</td>
    </tr>
    <tr>
      <td>04</td>
      <td>failed validation - attempt</td>
    </tr>
    <tr>
      <td>05</td>
      <td>not validatedm, Issuer does not particiate in validation</td>
    </tr>
    <tr>
      <td>06</td>
      <td>unable to perform authentication</td>
    </tr>
  </tbody>
</table>

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
      <td>3ds-skipped</td>
      <td></td>
    </tr>
    <tr>
      <td>status</td>
      <td>3ds-required</td>
      <td></td>
    </tr>
    <tr>
      <td>cardScheme</td>
      <td>visa</td>
      <td></td>
    </tr>
    <tr>
      <td>cardScheme</td>
      <td>mastercard</td>
      <td></td>
    </tr>
    <tr>
      <td>threeDS.type</td>
      <td>frictionless</td>
      <td>3DS-2 authentication type</td>
    </tr>
    <tr>
      <td>threeDS.type</td>
      <td>challengeflow</td>
      <td>3DS-2 authentication type</td>
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

:::info

**Response Code Descriptions check** *[here](/docs-portal/online_payments/response_codes)*

:::

## Managing 3D Secure 2

The latest version of 3D Secure 2 offers an enhanced authentication 
experience for online payments, incorporating a wider range of data, 
biometric authentication, and improved security measures. This API 
documentation provides guidance on managing 3D Secure 2 transactions 
and covers the authentication flows, necessary steps, and handling 
different response statuses to ensure a secure and streamlined payment 
experience for your customers.

Authentication Flows: 3D Secure 2 transactions can follow either a 
frictionless or challenge authentication flow, depending on the 
requirements set by the card issuer.

- **Frictionless Flow**: In the frictionless flow, the acquirer, issuer, and 
card scheme exchange necessary information in the background 
through passive authentication. If the issuer validates and approves 
the transaction, it is completed without any further cardholder 
interaction.

- **Challenge Flow**: The challenge flow occurs when the issuer requires 
additional cardholder interaction to verify the transaction. This can 
involve biometrics, two-factor authentication, or other methods 
based on SCA (Strong Customer Authentication) factors. In a web-
based integration, the challenge might be prompted immediately 
after submitting a payment request.

#### How it works
To fully implement 3D Secure 2 support, you need to create your own 
client-side and server-side implementations. The following steps outline 
the process:

- **Submitting a Payment Request**: To initiate the authentication 
process, send a payment request with the required 3D Secure 2 
objects. Specify your "threeDSNotificationUrl," which is an Absolute 
URL where the issuer/ACS (Access Control Server) can post a 
base64url encoded Challenge Response (CRes) message containing 
the challenge result.

:::info

**Note:** You can include additional parameters to improve authorization 
rates and increase the likelihood of a frictionless flow. It is not mandatory 
to include all additional parameters. Send only the parameters you can 
accurately provide or those that are mandatory in specific scenarios.

:::

- **Handling the response “success” and “status” fields**: Upon receiving
a response, check the "status" field to determine the next steps:
  - **"3ds-skipped"**: If you receive this response, it means the transaction
was exempted or out-of-scope for 3D Secure 2.
  - **"3ds-required"**: This status indicates that the issuer requires 
interaction with the cardholder. Proceed to the Challenge Flow.
  - **"3ds-completed"**: If the status is "3ds-completed," it means that the 
3D Secure 2 authentication was Frictionless, and the payment 
authorization was attempted.

#### Handling the Challenge Flow
In case the response status is "3ds-required", the issuer requires further 
cardholder interaction. To handle the challenge flow please follow the next
steps:
- Create an iframe using either the "threeDS.html" field, which 
contains ready-to-use HTML code, or build your own code using the 
"threeDS.action" and "threeDS.creq" fields.
- Send a challenge request to the issuer (ACS) and let the cardholder 
complete the authentication process.
- Get the challenge result (CRes) at your specified 
"threeDSNotificationUrl" from the issuer (ACS).
- Submit the challenge result (CRes) and ForoPay Transaction ID to 
ForoPay using the provided endpoint described below.


#### Endpoints

<EndpointsTab method="post" url="/3ds/callback" />

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
    "cres": "eyJtZXNzYWdlVHlwZSI6IkNSZXMiLCJtZXNzYWdlVmVyc2lvbiI6IjIuMS4wIiwidGhyZWVEU1NlcnZlclRyYW5zSUQiOiJlODczOWIzMC0yNGNiLTQ2YjgtYTE5Mi04Y2U4OWM4NTc1NDYiLCJhY3NUcmFuc0lEIjoiNmFmMTBiNGEtMDdhOS00YWY1LWE2OTMtZDIyZGMzYjZjYTQ5IiwiYWNzVWlUeXBlIjoiMDEiLCJjaGFsbGVuZ2VDb21wbGV0aW9uSW5kIjoiWSIsInRyYW5zU3RhdHVzIjoiWSJ9",
    "transactionId": "05e99c36-499d-4a6f-9e5d-e93d3eb8e63e"
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
      <td>cres</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>generated cres data from ASC server</td>
      <td></td>
    </tr>
    <tr>
      <td>transactionId</td>
      <td>string</td>
      <td className="text-center"><icon icon="fa-check" color="green" /></td>
      <td>transaction id from transaction initiation step</td>
      <td></td>
    </tr>
  </tbody>
</table>
</DocsTable>

</TabItem>
</Tabs>

#### Response

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
    "orderReference": "1667207373325",
    "amount": 126.27,
    "currency": "EUR",
    "paymentMethod": "card",
    "success": true,
    "captured": true,
    "message": "Success",
    "threeDS": {
        "status": "successful",
        "electronicCommerceIndicator": "05",
        "acsTranscationId": "6af10b4a-07a9-4af5-a693-d22dc3b6ca49",
        "mpiTransactionId": "e8739b30-24cb-46b8-a192-8ce89c857546",
        "directoryTransactionId": "1ffb9e12-a16e-4943-85fb-6a71b39418b2"
    },
    "cardTokenId": "f2eda7e8-83c4-441b-b7ec-18b1cbb6b56d",
    "cardMask": "******1111",
    "cardExpiryDate": "11/27",
    "cardholderName": "JOHN M",
    "cardScheme": "visa",
    "cvvStatus": "P",
    "cvvStatusDecoded": "not processed",
    "networkTransactionReference": "0000021266523063630A",
    "responseCode": "00",
    "authCode": "747208"
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
         <td>success</td>
         <td>boolean</td>
         <td>flag to indicate the status for the request</td>
      </tr>
      <tr>
         <td>captured</td>
         <td>boolean</td>
         <td>flag to indicate if the funds were blocked</td>
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
         <td>indicates if 3ds-2 is required at this current step</td>
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
      <td>cardScheme</td>
      <td>visa</td>
      <td></td>
    </tr>
    <tr>
      <td>cardScheme</td>
      <td>mastercard</td>
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

## Tokenisation

ForoPay provides a secure solution for storing payment details, empowering you to offer enhanced payment options to your shoppers. Through our tokenisation feature, you can securely save one or more payment details per shopper, facilitating subscription payments, automatic top-ups, and a quicker checkout process using their stored cards.

Tokenisation involves storing shoppers' payment details as tokens within our system. These tokens represent the saved payment information, ensuring the security of sensitive data.

#### Key Benefits of Tokenisation

Tokenisation offers several advantages for both you and your shoppers:

- Faster Checkout Experience: Shoppers can conveniently store their payment details for future use, enabling swift and hassle-free checkout experiences.
- Convenient Payment Retrieval: Shoppers have easy access to their stored payment details, simplifying subsequent payments.
- Flexible Payment Management: Save payment details for subscriptions or non-fixed schedule contracts, providing more flexibility in payment options.
- Seamless Subsequent Payments: Initiate later payments effortlessly for subscriptions or automatic top-ups to shoppers' accounts.

To save your shopper's payment details, you only need to include additional parameters during the payment process. During the first payment, we collect the necessary payment information and generate a token. This token is securely transmitted to your server for future use. For subsequent payments, simply make a request with the shopper reference and the corresponding token.

## MOTO
You can add moto(nullable boolean) property to the request payload. By setting up it to true you mark you transaction as MOTO transaction, available values `[true, false, null]`, `null` and `false` means the same.

## SCA Exemption
You can add scaExemption(nullable string) property to the request payload to mark your transaction “Sca Exemptioned”. Available values: `[ 'low_value', null ]`. Null values means that transaction is not marked as 'SCA exemption'

## Mixing up MOTO and Sca Exemption in one transaction
MOTO priority is higher than priority of Sca Exemption, when moto is `true` and sca_exemption is not `null`, then sca_exemption will be ignored for current transaction/request.

## Recurring payments
Currently supported 2 types of recurring payments: 
<table>
  <thead>
    <tr>
      <th><strong>Name</strong></th>
      <th><strong>Description</strong></th>
      <th><strong>Purpose</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>cof_initial</td>
      <td>Card-On-File Initial</td>
      <td>Need for creating initial recurring transaction</td>
    </tr>
    <tr>
      <td>ucof</td>
      <td>Unscheduled Card-On_file</td>
      <td>Need for creating subsequent recurring payments by parent cof_initial transaction</td>
    </tr>
  </tbody>
</table>

You can set recurring settings in property of request payload called `recurring`

Currency and Amount can differ from initial transaction in case `ucof` recurring type.

For merchant initiated unscheduled-card-on-file recurring payment(MIT) you need to call `{baseURl}/v1/payments/recurring/merchant/initiated` url instead of url described in start of the page and fill `recurring` property to mark a transaction as `ucof`
Example of unsheduled-card-on-file `recurring` property
```
"recurring": {
  "recurringType": "ucof",
  "parentTransactionId": "ada3fa56-0ddd-435f-9fbe-8494fbdffb9d" // parent cof_initial transaction
}
```
 
