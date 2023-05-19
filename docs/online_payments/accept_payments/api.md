---
sidebar_position: 6
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
  }
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
      <td>Base64 encoded of encrypted by RSA public key value of card number</td>
      <td></td>
    </tr>
    <tr>
      <td>cardData.encryptedExpiryMonth</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by RSA public key value of card expiry month</td>
      <td></td>
    </tr>
    <tr>
      <td>cardData.encryptedExpiryYear</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by RSA public key value of card expiry year</td>
      <td></td>
    </tr>
    <tr>
      <td>cardData.encryptedCvv</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by RSA public key value of card CVV</td>
      <td></td>
    </tr>     
    <tr>
      <td>cardData.encryptedCardholderName</td>
      <td>string</td>
      <td>required for the first request</td>
      <td>Base64 encoded of encrypted by RSA public key value of cardholder name</td>
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
      "acsTranscationId": "11e3879f-327b-4c77-8c14-1f53aaa15adc",
      "mpiTransactionId": "d1a756e2-4f6a-4ea8-bf83-9caccf260379",
      "directoryTransactionId": "e13c83ee-065c-4c58-abc3-ef859f4b6a52",
      "type": "frictionless"
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
         <td>threeDS.type</td>
         <td>string</td>
         <td>3DS-2 type</td>
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
    <tr>
      <td>threeDS.type</td>
      <td>"frictionless"</td>
      <td>3DS-2 authentication type</td>
    </tr>
    <tr>
      <td>threeDS.type</td>
      <td>"challengeflow"</td>
      <td>3DS-2 authentication type</td>
    </tr>
  </tbody>
</table>

#### Response codes:

<ExpandableTable>
<table>
  <thead>
    <tr>
      <th><strong>Code</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>00</td>
      <td>Approved or completed successfully</td>
    </tr>
    <tr>
      <td>01</td>
      <td>Refer to Card Issuer</td>
    </tr>
    <tr>
      <td>02</td>
      <td>Invalid merchant number</td>
    </tr>
    <tr>
      <td>04</td>
      <td>Retain card</td>
    </tr>
    <tr>
      <td>05</td>
      <td>Authorization declined | Do not honour</td>
    </tr>
    <tr>
      <td>06</td>
      <td>Sequence- generation- number error - diagnostics necessary; the POS Terminal must carry out reconciliation with a 0800 message</td>
    </tr>
    <tr>
      <td>07</td>
      <td>Pick up card, special condition</td>
    </tr>
    <tr>
      <td>08</td>
      <td>Honour with identification</td>
    </tr>
    <tr>
      <td>09</td>
      <td>The value "09" has special significance as it indicates a "wait" message and the POSSystem should expect to wait at most 30 seconds more. The host may send several of these "wait messages" until the true reply is ready. A wait message contains only the following fields - Message Type, Bit Map, PAN, System Trace Audit number, POS Terminal ID Code, Response Code, and Additional Response Data</td>
    </tr>
    <tr>
      <td>10</td>
      <td>Partial approval</td>
    </tr>
    <tr>
      <td>12</td>
      <td>Invalid transaction</td>
    </tr>
    <tr>
      <td>13</td>
      <td>Invalid amount</td>
    </tr>
    <tr>
      <td>1A</td>
      <td>Strong Customer Authentication(SCA) Required</td>
    </tr>
    <tr>
      <td>21</td>
      <td>No action taken</td>
    </tr>
    <tr>
      <td>30</td>
      <td>Format Error</td>
    </tr>
    <tr>
      <td>33</td>
      <td>Card expired</td>
    </tr>
    <tr>
      <td>34</td>
      <td>Suspicion of Manipulation</td>
    </tr>
    <tr>
      <td>40</td>
      <td>Requested function not supported</td>
    </tr>
    <tr>
      <td>41</td>
      <td>Lost card pick up</td>
    </tr>
    <tr>
      <td>43</td>
      <td>Stolen Card, pick up</td>
    </tr>
    <tr>
      <td>51</td>
      <td>Not sufficient funds</td>
    </tr>
    <tr>
      <td>52</td>
      <td>No checking account</td>
    </tr>
    <tr>
      <td>53</td>
      <td>No savings account</td>
    </tr>
    <tr>
      <td>54</td>
      <td>Expired card</td>
    </tr>
    <tr>
      <td>55</td>
      <td>Incorrect personal identification number</td>
    </tr>
    <tr>
      <td>56</td>
      <td>Card not in authorizer's database</td>
    </tr>
    <tr>
      <td>57</td>
      <td>referencing transaction (e.g. reversal, Booking pre-authorization ...) was not carried out with the card which was used for the original transaction.</td>
    </tr>
    <tr>
      <td>58</td>
      <td>Terminal ID unknown</td>
    </tr>
    <tr>
      <td>60</td>
      <td>PIN entry necessary – pls. resend current authorization request including PIN data (contactless single tap reusing EMV data – see ch. 6.7 - Single tap and PIN request)</td>
    </tr>
    <tr>
      <td>61</td>
      <td>Exceeds withdrawal amount limit</td>
    </tr>
    <tr>
      <td>62</td>
      <td>Restricted Card</td>
    </tr>
    <tr>
      <td>64</td>
      <td>The transaction amount of the referencing transaction is higher than the transaction amount of the original transaction</td>
    </tr>
    <tr>
      <td>65</td>
      <td>Contactless request declined – pls. retry in contact mode or Soft decline - SCA required (for e-commerce)</td>
    </tr>
    <tr>
      <td>75</td>
      <td>PIN entered incorrectly too often</td>
    </tr>
    <tr>
      <td>77</td>
      <td>PIN entry necessary</td>
    </tr>
    <tr>
      <td>78</td>
      <td>Stop payment order (for forwarding the Visa response code "R0" of the Visa BASE I interface) - the transaction was declined or returned because the cardholder requested that payment of a specific recurring or installment payment transaction be stopped.</td>
    </tr>
    <tr>
      <td>79</td>
      <td>Revocation of authorization order (for forwarding the Visa response codes "R1" or R3 of the Visa BASE I interface) - the transaction was declined or returned because the cardholder requested that payment of all recurring or installment payment transactions for a specific merchant account be stopped.</td>
    </tr>
    <tr>
      <td>80</td>
      <td>Amount no longer available</td>
    </tr>
    <tr>
      <td>81</td>
      <td>Message-flow error</td>
    </tr>
    <tr>
      <td>82</td>
      <td>Time-out at issuer system</td>
    </tr>
    <tr>
      <td>85</td>
      <td>Cash back declined – pls. retry purchase only</td>
    </tr>
    <tr>
      <td>87</td>
      <td>Approved purchase amount only. Cash Back amount declined</td>
    </tr>
    <tr>
      <td>91</td>
      <td>Card issuer temporarily not reachable</td>
    </tr>
    <tr>
      <td>92</td>
      <td>The card type is not processed by the authorization center</td>
    </tr>
    <tr>
      <td>95</td>
      <td>Reconcile error / Auth Not found</td>
    </tr>
    <tr>
      <td>96</td>
      <td>Processing temporarily not possible</td>
    </tr>
    <tr>
      <td>97</td>
      <td>Security breach - MAC check indicates error condition</td>
    </tr>
    <tr>
      <td>98</td>
      <td>Date and time not plausible - The POS Terminal must set itself to the date and time of the response message</td>
    </tr>
    <tr>
      <td>99</td>
      <td>Error in PAC encryption detected Any other code sent by the Authorization Host = General decline</td>
    </tr>
  </tbody>
</table>
</ExpandableTable>

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

## Managing 3D Secure

To enhance the security of card-not-present (CNP) transactions, it is recommended to implement the 3D Secure 2 authentication protocol. This protocol adds an extra layer of verification and ensures compliance with authentication regulations, such as PSD2 SCA, while also enabling liability shift rules.

#### We offer two options to handle 3D Secure authentication:

- **Native**: With this option, the authentication process takes place within your website or mobile app. The card issuer utilizes passive, biometric, and two-factor authentication methods to verify the transaction. To learn more about the various 3D Secure 2 authentication flows, please refer to our documentation.

- **Redirect**: In this option, customers are redirected to the card issuer's website to provide additional authentication data, such as a password or an SMS verification code. It's worth noting that the redirect approach may lead to lower conversion rates due to potential technical errors during the redirection process, or customers abandoning the authentication procedure.

By implementing 3D Secure 2, you can bolster the security of your online payments and ensure compliance with regulatory requirements.

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

## Tokenisation

ForoPay provides a secure solution for storing payment details, empowering you to offer enhanced payment options to your shoppers. Through our tokenisation feature, you can securely save one or more payment details per shopper, facilitating subscription payments, automatic top-ups, and a quicker checkout process using their stored cards.

Tokenisation involves storing shoppers' payment details as tokens within our system. These tokens represent the saved payment information, ensuring the security of sensitive data. Our platform supports various payment methods, including over 30 card brands, ACH, and SEPA direct debit. Please refer to our Payment Methods documentation for detailed information about the supported payment methods.

#### Key Benefits of Tokenisation

Tokenisation offers several advantages for both you and your shoppers:

- Faster Checkout Experience: Shoppers can conveniently store their payment details for future use, enabling swift and hassle-free checkout experiences.
- Convenient Payment Retrieval: Shoppers have easy access to their stored payment details, simplifying subsequent payments.
- Flexible Payment Management: Save payment details for subscriptions or non-fixed schedule contracts, providing more flexibility in payment options.
- Seamless Subsequent Payments: Initiate later payments effortlessly for subscriptions or automatic top-ups to shoppers' accounts.

To save your shopper's payment details, you only need to include additional parameters during the payment process. During the first payment, we collect the necessary payment information and generate a token. This token is securely transmitted to your server for future use. For subsequent payments, simply make a request with the shopper reference and the corresponding token.

Additionally, if you currently have recurring contracts with another payment service provider, you have the option to migrate and import your existing recurring payment details to ForoPay, simplifying the transition process.

