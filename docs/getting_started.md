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

This guide will walk you through the process of setting up your ForoPay account, making your first payment request, and utilising our ready-made solutions to accept payments.

## Step 1: Create a test account

To get started with ForoPay, create a free test account. This account grants you access to the test Customer Area, a unified dashboard where you can manage your ForoPay integration across different regions and currencies.

With your test Customer Area account, you can:

- Perform test payments
- Invite team members
- Apply for a live account
- Start building your integration.

## Step 2: Get your API key



## Step 3. Build your integration

Start building your integration using your test account. You can also proceed with the application for a live account, but waiting for your application to be approved may be beneficial before completing the full integration.

Choose the integration option that best suits your business needs:

<DocsCards>
  <DocsCard header="Hosted page" href="/docs-portal/online_payments/accept_payments/hosted_checkout_page">
    <p>Use ForoPay's secure and reliable integrated checkout page to handle payments for your customers.</p>
  </DocsCard>

  <DocsCard header="Popup" href="/docs-portal/online_payments/accept_payments/popup">
    <p>Allow visitors to securely shop on your webshop without leaving your site.
    </p>
  </DocsCard>

  <DocsCard header="Drop-in" href="/docs-portal/online_payments/accept_payments/drop_in">
    <p>List all payment methods in one block with the drop-in integration.</p>
  </DocsCard>

  <DocsCard header="Hosted fields" href="/docs-portal/online_payments/accept_payments/hosted_fields">
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
        <td>4111111111111111</td>
        <td>Challenge Text</td>
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
			<th>Card</th>
			<th>Scenario</th>
			<th>Amount</th>
			<th>Expected Result</th>
		</tr>
  </thead>
	<tbody>
		<tr>
			<td>4111111111111111</td>
			<td>3DS Challenge Flow (challenge is 555) - Successfully authorised</td>
			<td>16.49</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>3DS Challenge Flow (challenge is 111) - Authentication failed</td>
			<td>11.45</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>3DS Frictionless Flow - Authorised - Sale transaction</td>
			<td>45</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>3DS Frictionless Flow - Authorised - Auth transaction</td>
			<td>15</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>5283901906612672</td>
			<td>3DS Frictionless Flow - Rejected</td>
			<td>83.99</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>5283901901266672</td>
			<td>Cardholder not enrolled in 3DS service</td>
			<td>10</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>5440382741349178</td>
			<td>3DS Challenge Flow - CRes not received</td>
			<td>16.34</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>5168159443230322</td>
			<td>3DS Challenge Flow - CRes Error</td>
			<td>11.5</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>3DS Challenge Flow (challenge is 555) - Response Code 05</td>
			<td>20050</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4111111111111111 / CSC (CVV2): 444</td>
			<td>3DS Challenge Flow (challenge is 555) - CVV check failed</td>
			<td>39</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>3DS Challenge Flow (challenge is 555)</td>
			<td>43.33</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Full refund of the transaction from Scenario #11</td>
			<td>43.33</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>3DS Frictionless Flow - Authorised - Sale transaction</td>
			<td>56.41</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Partial refund of the transaction from Scenario #13</td>
			<td>21.29</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>3DS Frictionless Flow - Authorisation only</td>
			<td>12</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Reversal (cancel) of the transaction from Scenario #15</td>
			<td>&nbsp;</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>3DS Challenge Flow (challenge is 555) - Authorisation only</td>
			<td>15</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Partial charge (partial capture) of the transaction from Scenario #17</td>
			<td>10.32</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>3DS Challenge Flow (challenge is 555) - Authorisation only</td>
			<td>0.01</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Full charge (capture) of the transaction from Scenario #19</td>
			<td>0.01</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>MOTO transaction - telephone order</td>
			<td>155.55</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>MOTO transaction - mail order</td>
			<td>18.76</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>SCA exemption - Low value</td>
			<td>11</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>Recurring Initial (UCOF)</td>
			<td>5</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>MIT (initial from the case 24) - Sale transaction</td>
			<td>15</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>MIT (initial from the case 24) - Auth transaction</td>
			<td>10</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>Card Verification</td>
			<td>0</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>Card Verification + Recurring Initial</td>
			<td>0</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>MIT (initial from the case 28) - Auth transaction</td>
			<td>12</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Token payment (CIT) - Auth transaction (token from the case 23)</td>
			<td>150.01</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Token payment (CIT) - Sale transaction (token from the case 15)</td>
			<td>430.43</td>
			<td>Success</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Token payment (CIT) - Sale transaction - Invalid token</td>
			<td>19.99</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4111111111111112</td>
			<td>Wrong card number (Luhn algorithm check failed)</td>
			<td>1</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>Expired card</td>
			<td>2</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4111111111111111</td>
			<td>Expiry date not valid (Allowed max current date +10 years, for test case provide +10 years and 1 month)</td>
			<td>3</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>4200000000000000</td>
			<td>Response Code 51 (Insufficient funds)</td>
			<td>20510</td>
			<td>Rejected</td>
		</tr>
		<tr>
			<td>-</td>
			<td>Partial refund of the transaction from Scenario #13</td>
			<td>3.29</td>
			<td>Success</td>
		</tr>
	</tbody>
</table>
</DocsTable>

## Step 5: Go live


