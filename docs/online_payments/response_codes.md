---
sidebar_position: 3
sidebar_custom_props:
  description: Response codes our API returns.
---

import ExpandableTable from '/src/components/global/ExpandableTable';

# Response Codes

This page provides response codes returned by our API

<table class="margin-top--xs">
  <thead>
    <tr>
      <th style={{minWidth: '150px'}}><strong>Respone Code</strong></th>
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
