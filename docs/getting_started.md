---
sidebar_position: 2
title: Get started
sidebar_label: Get started
hide_table_of_contents: false
pagination_next: null
---

import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';

This page guides you through setting up an ForoPay account, making an API request for your first test payment, and installing one of our server-side libraries.

After these steps, you're ready to start building your integration.

## Step 1: Create a test account

Get started with ForoPay by creating a free test account. Your test account gives you access to the test Customer Area, which is a unified dashboard where you can manage your ForoPay integration across regions and currencies.

Your test Customer Area account allows you to:

- Make test payments.
- Invite team members.
- Apply for a live account.
- Start building your integration.

## Step 2. Build your integration

Start building your integration using your test account. You can also start your application for a live account. You may want to wait for your application to be approved before you build your whole integration.

Choose your integration to match your business needs:

<DocsCards>
  <DocsCard header="Hosted checkout page" href="/docs-portal/online_payments/accept_payments/hosted_checkout_page">
    <p>Accept payments with cards, wallets, and local payment methods on your website and mobile app.</p>
  </DocsCard>

  <DocsCard header="Popup" href="/docs-portal/online_payments/accept_payments/popup">
    <p>Enable visitors to shop securely on your webshop without leaving your site.
    </p>
  </DocsCard>

  <DocsCard header="Drop-in" href="/docs-portal/online_payments/accept_payments/drop_in">
    <p>Drop-in shows all payment methods as a list, in the same block.</p>
  </DocsCard>

  <DocsCard header="Hosted fields" href="/docs-portal/online_payments/accept_payments/hosted_fields">
    <p>Allows you to outsource the handling of payment card data—possibly making it easier for you to maintain PCI-DSS compliance.
    </p>
  </DocsCard>

  <DocsCard header="API only" href="/docs-portal/online_payments/accept_payments/api">
    <p>Use our APIs and build your own payment form if you want full control over the look and feel of your checkout page.</p>
  </DocsCard>
</DocsCards>

## Step 3. Apply for your live account

A live account allows you to accept payments from your shoppers using ForoPay. Because ForoPay is a payment provider and acquirer, we are legally obliged to do detailed checks when you apply for a live account.

Before applying for a live account, make sure you have done the following:

Check the list of prohibited or restricted products and services.
If your business is eligible, contact our Sales team to find out whether ForoPay is right for you.
Review the requirements for a live account.
Apply for your live account from your test Customer Area by selecting Apply for live on the welcome page.

## Step 4. Sign the contract and get your live account

If your application for a live account is approved, we send you the contract. If your integration uses card payments, we also send you a data security attestation form. Complete this form based on your technical integration to ensure compliance with Payment Card Industry (PCI) standards.

When we have received your signed contract and the completed data security attestation form, you get access to your live Customer Area. The user who created the test account receives the login instructions by email.


Step 5. Get ready to accept live payments
To start accepting live payments using your live account, you must first configure your account. The settings from your test account are not copied to your live account.

Use our go-live checklists to make sure you've got everything correctly set up before accepting live payments:
