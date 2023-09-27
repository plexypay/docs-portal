---
sidebar_position: 2
title: Get started
sidebar_label: Get started
hide_table_of_contents: false
pagination_next: null
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DocsTable from '/src/components/global/DocsTable';

This guide will walk you through the process of setting up your PlexyPay account, making your first payment request, and utilising our ready-made solutions to accept payments.

## Step 1: Create a test account

To get started with PlexyPay, create a free test account. This account grants you access to the test Customer Area, a unified dashboard where you can manage your PlexyPay integration across different regions and currencies.

With your test Customer Area account, you can:

- Perform test payments
- Invite team members
- Apply for a live account
- Start building your integration.

## Step 2: Get your private API key

To acquire the private API key, please email us on support@foropay.eu. You can later use the received key to send requests to our API.



## Step 3. Build your integration

Start building your integration using your test account. You can proceed with application for a live account. While waiting for the application to be approved, you can start building the integration using your test account.

Choose the integration option that best suits your business needs:

<DocsCards>
  <DocsCard header="Hosted page" chips="soon" className="Card--opacity-6" >
    <p>Use PlexyPay's secure and reliable integrated checkout page to handle payments for your customers.</p>
  </DocsCard>

  <DocsCard header="Popup" chips="soon" className="Card--opacity-6" >
    <p>Allow visitors to securely shop on your webshop without leaving your site.
    </p>
  </DocsCard>

  <DocsCard header="Drop-in" chips="soon" className="Card--opacity-6" >
    <p>List all payment methods in one block with the drop-in integration.</p>
  </DocsCard>

  <DocsCard header="Hosted fields" chips="soon" className="Card--opacity-6" >
    <p>Maintain your website's branding while ensuring card data security with hosted fields.</p>
  </DocsCard>

  <DocsCard header="API only" href="/docs-portal/online_payments/accept_payments/api">
    <p>Build your own payment form and process transactions using our APIs for maximum control and flexibility.</p>
  </DocsCard>
</DocsCards>

## Step 4: Verify test cases



To test your integration, you can simulate payments using our test credit card numbers, along with:
  - any valid `CVV` (for example, a three-digit number for Visa and Mastercard)
  - any future expiry date, in the format `mm/yy` (10 years max)

#### 3D Secure test cards

<Tabs
  groupId="cards"
  defaultValue="visa"
  values={[
  {label: 'Visa', value: 'visa'},
  {label: 'Mastercard', value: 'mastercard'},
]}>
<TabItem value="visa">

<DocsTable columns={[
  {
    wrappers: [{
      tag: 'code',
    }]
  }
]}>
  <table>
    <thead>
        <tr>
			<th>Card</th>
			<th>Result</th>
       </tr>
    </thead>
    <tbody>
      <tr>
        <td>4111111111111111</td>
        <td>Challenge Text</td>
      </tr>
      <tr>
        <td>4200000000000000</td>
        <td>Challenge OOB</td>
      </tr>
      <tr>
        <td>4640170131116658</td>
        <td>Challenge HTML</td>
      </tr>
      <tr>
        <td>4907639999909022</td>
        <td>Frictionless Success</td>
      </tr>
      <tr>
        <td>4907639999990022</td>
        <td>Frictionless Fail(R)</td>
      </tr>
      <tr>
        <td>4907630099999922</td>
        <td>Frictionless Fail(N)</td>
      </tr>
      <tr>
        <td>4001880000000055</td>
        <td>Cancel</td>
      </tr>
      <tr>
        <td>4918914107195005</td>
        <td>Challenge Required</td>
      </tr>
    </tbody>
  </table>
</DocsTable>
</TabItem>

<TabItem value="mastercard">

<DocsTable columns={[
  {
    wrappers: [{
      tag: 'code',
    }]
  }
]}>
  <table>
    <thead>
        <tr>
			<th>Card</th>
			<th>Result</th>
      	</tr>
    </thead>
    <tbody>
      <tr>
        <td>5555555555554444</td>
        <td>Challenge Text</td>
      </tr>
      <tr>
        <td>5283901669012672</td>
        <td>Challenge SingleSelect</td>
      </tr>
      <tr>
        <td>5440382741349178</td>
        <td>Challenge MultiSelect</td>
      </tr>
      <tr>
        <td>5168159443230322</td>
        <td>CRes Error</td>
      </tr>
	  <tr>
        <td>5283901906612672</td>
        <td>Frictionless Fail(R)</td>
      </tr>
      <tr>
        <td>5283901901266672</td>
        <td>Frictionless Fail(N)</td>
      </tr>
    </tbody>
  </table>
</DocsTable>

</TabItem>
</Tabs>

#### Testing scenarios

<DocsTable columns={[
  {
  },
  {
    wrappers: [{
      tag: 'code',
    }]
  },
  {},
  {
    wrappers: [{
      tag: 'code',
    }]
  },
  {
    wrappers: [{
      tag: 'div',
      attrs: { 'class': (content) => {
        let classes = "state-block "
        classes += (content === 'Success' ? 'state-block--success' : 'state-block--error')
        return classes
      }}
    }]
  }
]}>
<table>
  <thead>
      <tr>
		<th>#</th>
		<th>Card</th>
		<th>Scenario</th>
		<th>Amount</th>
		<th>Expected Result</th>
		</tr>
  </thead>
	<tbody>
		<tr>
			<td>1</td>
			<td>4111111111111111</td>
			<td>3DS v2 Challenge Flow (challenge is 555) - Fully authenticated and authorized</td>
			<td>Any</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>2</td>
			<td>4111111111111111</td>
			<td>3DS v2 Challenge Flow (challenge is 111) - Card authentication failed</td>
			<td>Any</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>3</td>
			<td>4200000000000000</td>
			<td>3DS v2 Frictionless Flow - Frictionlessly authenticated and authorized</td>
			<td>Any</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4</td>
			<td>5283901906612672</td>
			<td>3DS v2 Frictionless Flow - Rejected</td>
			<td>Any</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>5</td>
			<td>5283901901266672</td>
			<td>Cardholder not enrolled in 3DS v2 service</td>
			<td>Any</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>6</td>
			<td>5440382741349178</td>
			<td>3DS v2 Challenge Flow - CRes not received</td>
			<td>Any</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>7</td>
			<td>5168159443230322</td>
			<td>3DS v2 Challenge Flow - CRes Error</td>
			<td>Any</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>8</td>
			<td>4111111111111111</td>
			<td>3DS v2 Challenge Flow (challenge is 555) - Response Code 05</td>
			<td>20050</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>9</td>
			<td>4111111111111111 / CSC (CVV2): 444</td>
			<td>3DS v2 Challenge Flow (challenge is 555) - CVV check failed</td>
			<td>Any</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>10</td>
			<td>4111111111111111</td>
			<td>MOTO transaction - telephone order</td>
			<td>Any</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>11</td>
			<td>4200000000000000</td>
			<td>MOTO transaction - mail order</td>
			<td>Any</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>12</td>
			<td>4111111111111111</td>
			<td>SCA exemption - Low value</td>
			<td>Any</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>13</td>
			<td>4200000000000000</td>
			<td>Card Verification</td>
			<td>0</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>14</td>
			<td>4111111111111111</td>
			<td>Card Verification + Recurring Initial</td>
			<td>0</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>15</td>
			<td>4111111111111110</td>
			<td>Wrong card number (Luhn algorithm check failed)</td>
			<td>Any</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>16</td>
			<td>4200000000000000</td>
			<td>Response Code 51 (Insufficient funds)</td>
			<td>20510</td>
			<td>Rejected</td>
		</tr>
	</tbody>
</table>
</DocsTable>

## Step 5: Go live


