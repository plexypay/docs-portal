---
sidebar_position: 2
---


# Payment links  API

> Learn how to generate payment links automatically through the API


## Step 1. Create a payment link

To create a payment link call a server-side endpoint to create a payment intent, the following parameters are required:

 - `amount` - This includes value, for example, "99" for € 99.00
 - `currency` - Three-letter ISO currency code, in UPPERCASE. Must be a [supported currency](#), for example, `USD` or `EUR`
 - `orderReference` - This field is unique
 - `description` - Text description of the purpose of payment. For example description of goods or service
 - `expiresAt` - Expiration date of payment link in ISO 8601 format, for example: `2030-01-01T22:00:00Z`
 - `locale` - Preferred language of user interface of checkout page
 - `customer` - Customer information. See API refernce for full description

See the [API reference](#) for a complete list of parameters that can be used for payment intent creation.

## Step 2. Send the payment link to your customer

After receiving the request, ForoPay creates a payment intent and returns its unique id

```
{
    "url": "http://checkout.foropay.eu/payment-links/pl_15sPn3is4JWt"
}
```

Return this url to the client-side

:::info

You can use [Send Payment link endpoint](#) to send link  **via email**

:::

Send the link to your customer through chat or email. When the customer opens the link, they'll redirect to ForoPay Prebuilt Checkout Page. After the customer fills payment information on the checkout page, ForoPay processes the payment and shows success message to the customer. 


### Update or deactivate payment link

To change expiration date of the payment link make the request to the [Update payment link endpoint](#) or deactivate usign [Cancel payment link endpoint](#)