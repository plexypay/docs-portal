---
sidebar_position: 3
sidebar_custom_props:
  description: Error and response codes our API returns.
---

import ExpandableTable from '/src/components/global/ExpandableTable';

# Response & Error Codes

This page provides error and response codes our API returns

#### Error Codes
<ExpandableTable>
<table>
  <thead>
    <tr>
      <th><strong>Error Code</strong></th>
      <th><strong>Description</strong></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1001</td>
      <td>Failed to validate payment session request</td>
    </tr>
    <tr>
      <td>1002</td>
      <td>Failed to create payment session</td>
    </tr>
    <tr>
      <td>1003</td>
      <td>Payment session was not found by the id provided</td>
    </tr>
    <tr>
      <td>1004</td>
      <td>Failed to retrieve payment session by the id provided</td>
    </tr>
    <tr>
      <td>1005</td>
      <td>Failed to create payment session - failed to parse JSON request body</td>
    </tr>
    <tr>
      <td>1006</td>
      <td>Failed to parse JSON request body</td>
    </tr>
    <tr>
      <td>1007</td>
      <td>Failed to retrieve merchant token from terminal settings</td>
    </tr>
    <tr>
      <td>1008</td>
      <td>Failed to create common request</td>
    </tr>
    <tr>
      <td>1009</td>
      <td>Failed to send 3D init request</td>
    </tr>
    <tr>
      <td>1010</td>
      <td>Failed to parse 3D init response</td>
    </tr>
    <tr>
      <td>1012</td>
      <td>Failed to send 3D check request</td>
    </tr>
    <tr>
      <td>1013</td>
      <td>Unsuccessful transaction 3D init response data</td>
    </tr>
    <tr>
      <td>1014</td>
      <td>Failed to parse 3D check response</td>
    </tr>
    <tr>
      <td>1015</td>
      <td>Unsuccessful transaction 3ds response data</td>
    </tr>
    <tr>
      <td>1016</td>
      <td>CRes must be a non-empty string</td>
    </tr>
    <tr>
      <td>1017</td>
      <td>ThreeDSSessionData must be a non-empty string</td>
    </tr>
    <tr>
      <td>1018</td>
      <td>Failed to decode threeDSSessionData</td>
    </tr>
    <tr>
      <td>1019</td>
      <td>Failed to unmarshal threeDSSessionData</td>
    </tr>
    <tr>
      <td>1020</td>
      <td>Failed to change transaction status to 'rejected'</td>
    </tr>
    <tr>
      <td>1021</td>
      <td>Failed to change transaction status to 'failed'</td>
    </tr>
    <tr>
      <td>1022</td>
      <td>Failed to change transaction status to 'rejected'</td>
    </tr>
    <tr>
      <td>1023</td>
      <td>Failed to change transaction status to 'failed'</td>
    </tr>
    <tr>
      <td>1024</td>
      <td>Failed to create payment session - invalid payment provider</td>
    </tr>
    <tr>
      <td>1025</td>
      <td>Failed to validate payment provider configuration</td>
    </tr>
    <tr>
      <td>1026</td>
      <td>Failed to create payment session - invalid payment method</td>
    </tr>
    <tr>
      <td>1027</td>
      <td>Failed to validate payment method configuration</td>
    </tr>
    <tr>
      <td>1028</td>
      <td>Failed to create payment session - invalid currency</td>
    </tr>
    <tr>
      <td>1029</td>
      <td>Failed to validate currency configuration</td>
    </tr>
    <tr>
      <td>1030</td>
      <td>Failed to create payment session - invalid amount</td>
    </tr>
    <tr>
      <td>1031</td>
      <td>Failed to validate amount configuration</td>
    </tr>
    <tr>
      <td>1032</td>
      <td>Failed to create payment session - invalid callback URL</td>
    </tr>
    <tr>
      <td>1033</td>
      <td>Failed to validate callback URL configuration</td>
    </tr>
    <tr>
      <td>1034</td>
      <td>Failed to create payment session - invalid return URL</td>
    </tr>
    <tr>
      <td>1035</td>
      <td>Failed to validate return URL configuration</td>
    </tr>
    <tr>
      <td>1036</td>
      <td>Failed to create payment session - invalid cancel URL</td>
    </tr>
    <tr>
      <td>1037</td>
      <td>Failed to validate cancel URL configuration</td>
    </tr>
    <tr>
      <td>1038</td>
      <td>Failed to create payment session - invalid webhook URL</td>
    </tr>
    <tr>
      <td>1039</td>
      <td>Failed to validate webhook URL configuration</td>
    </tr>
    <tr>
      <td>1041</td>
      <td>Failed to retrieve transaction by id</td>
    </tr>
    <tr>
      <td>1056</td>
      <td>Failed to parse JSON request body</td>
    </tr>
    <tr>
      <td>1057</td>
      <td>Amount request property must be positive float64 value. Zero or negative value found</td>
    </tr>
    <tr>
      <td>1058</td>
      <td>TransactionID route parameter must be non-empty</td>
    </tr>
    <tr>
      <td>1059</td>
      <td>Failed to obtain transaction by id</td>
    </tr>
    <tr>
      <td>1060</td>
      <td>Invalid transaction status to perform the operation. Must be authorized</td>
    </tr>
    <tr>
      <td>1062</td>
      <td>Charge amount must be less than or equal to the transaction amount</td>
    </tr>
    <tr>
      <td>1063</td>
      <td>Unable to charge transaction with undefined external reference</td>
    </tr>
    <tr>
      <td>1064</td>
      <td>Failed to send capture request</td>
    </tr>
    <tr>
      <td>1065</td>
      <td>Failed to parse capture request</td>
    </tr>
    <tr>
      <td>1066</td>
      <td>Unsuccessful charge response. Non-zero response code</td>
    </tr>
    <tr>
      <td>1067</td>
      <td>Failed to update captured transaction</td>
    </tr>
    <tr>
      <td>1068</td>
      <td>Failed to change transaction status to 'rejected'</td>
    </tr>
    <tr>
      <td>1069</td>
      <td>Failed to preauthorize the transaction</td>
    </tr>
    <tr>
      <td>1070</td>
      <td>Failed to change transaction status to 'failed'</td>
    </tr>
    <tr>
      <td>1071</td>
      <td>Failed to parse preauthorization response</td>
    </tr>
    <tr>
      <td>1072</td>
      <td>Failed to change transaction status to 'rejected'</td>
    </tr>
    <tr>
      <td>1073</td>
      <td>Unsuccessful preauthorization response. Non-zero response code</td>
    </tr>
    <tr>
      <td>1074</td>
      <td>Failed to update the transaction</td>
    </tr>
    <tr>
      <td>1075</td>
      <td>Failed to parse JSON request body</td>
    </tr>
    <tr>
      <td>1076</td>
      <td>Amount request property must be positive float64 value. Zero or negative value found</td>
    </tr>
    <tr>
      <td>1077</td>
      <td>TransactionID route parameter must be non-empty</td>
    </tr>
    <tr>
      <td>1078</td>
      <td>Failed to retrieve the transaction by id provided</td>
    </tr>
    <tr>
      <td>1079</td>
      <td>Invalid transaction status to perform the operation. Unable to refund non-charged transaction</td>
    </tr>
    <tr>
      <td>1080</td>
      <td>Unable to refund transaction with zero balance</td>
    </tr>
    <tr>
      <td>1081</td>
      <td>Refund amount must be less than or equal to the transaction balance</td>
    </tr>
    <tr>
      <td>1082</td>
      <td>Unable to refund transaction with undefined external reference</td>
    </tr>
    <tr>
      <td>1083</td>
      <td>Failed to process the refund request</td>
    </tr>
    <tr>
      <td>1084</td>
      <td>Failed to parse refund response</td>
    </tr>
    <tr>
      <td>1085</td>
      <td>Unsuccessful refund response. Non-zero response code</td>
    </tr>
    <tr>
      <td>1086</td>
      <td>Failed to update transaction</td>
    </tr>
    <tr>
      <td>1087</td>
      <td>TransactionID route parameter must be non-empty</td>
    </tr>
    <tr>
      <td>1088</td>
      <td>Failed to obtain transaction by id</td>
    </tr>
    <tr>
      <td>1089</td>
      <td>Invalid transaction status to perform the operation, must be in 'authorized' status</td>
    </tr>
    <tr>
      <td>1091</td>
      <td>Unable to cancel transaction with undefined external reference</td>
    </tr>
    <tr>
      <td>1092</td>
      <td>Failed to send cancel request</td>
    </tr>
    <tr>
      <td>1093</td>
      <td>Failed to parse cancel response</td>
    </tr>
    <tr>
      <td>1094</td>
      <td>Unsuccessful cancel response. Non-zero response code</td>
    </tr>
    <tr>
      <td>1095</td>
      <td>Unable to update cancelled transaction</td>
    </tr>
    <tr>
      <td>1096</td>
      <td>Failed to deserialize JSON request body</td>
    </tr>
    <tr>
      <td>1099</td>
      <td>Invalid payment link id</td>
    </tr>
    <tr>
      <td>1101</td>
      <td>Failed to update payment link status</td>
    </tr>
    <tr>
      <td>1104</td>
      <td>Invalid search query parameters</td>
    </tr>
    <tr>
      <td>1105</td>
      <td>Failed to get payment links</td>
    </tr>
    <tr>
      <td>1106</td>
      <td>Failed to patch payment link expiration status</td>
    </tr>
    <tr>
      <td>1107</td>
      <td>Failed to compose payment links response</td>
    </tr>
    <tr>
      <td>1108</td>
      <td>Invalid payment link id</td>
    </tr>
    <tr>
      <td>1110</td>
      <td>Failed to patch payment link expiration status</td>
    </tr>
    <tr>
      <td>1111</td>
      <td>Failed to compose payment link response</td>
    </tr>
        <tr>
      <td>1112</td>
      <td>Invalid payment link id</td>
    </tr>
    <tr>
      <td>1115</td>
      <td>Failed to update the payment link</td>
    </tr>
    <tr>
      <td>1116</td>
      <td>Invalid payment link id</td>
    </tr>
    <tr>
      <td>1117</td>
      <td>Failed to parse JSON request body</td>
    </tr>
    <tr>
      <td>1118</td>
      <td>Empty payment link expiration field</td>
    </tr>
    <tr>
      <td>1119</td>
      <td>Failed to parse ExpiresAt as time field obtained from request payload</td>
    </tr>
    <tr>
      <td>1121</td>
      <td>Failed to update the payment link</td>
    </tr>
    <tr>
      <td>1122</td>
      <td>Invalid query parameters</td>
    </tr>
    <tr>
      <td>1123</td>
      <td>Failed to get payment link customers</td>
    </tr>
    <tr>
      <td>1124</td>
      <td>Failed to compose payment link</td>
    </tr>
    <tr>
      <td>1125</td>
      <td>Invalid payment link id</td>
    </tr>
    <tr>
      <td>1126</td>
      <td>Failed to parse JSON request body</td>
    </tr>
    <tr>
      <td>1127</td>
      <td>Request Channel field must not be an empty string and must have value 'email'</td>
    </tr>
    <tr>
      <td>1129</td>
      <td>Failed to send email notification</td>
    </tr>
    <tr>
      <td>1131</td>
      <td>Unable to update the payment link</td>
    </tr>
    <tr>
      <td>1132</td>
      <td>Failed to parse terminal settings from JSON string</td>
    </tr>
    <tr>
      <td>1134</td>
      <td>Failed to parse terminal settings from JSON string</td>
    </tr>
    <tr>
      <td>1135</td>
      <td>Failed to obtain merchant token from terminal settings</td>
    </tr>
    <tr>
      <td>1136</td>
      <td>Failed to parse terminal settings from JSON string</td>
    </tr>
    <tr>
      <td>1137</td>
      <td>Multiple refunds disabled in current merchant</td>
    </tr>
    <tr>
      <td>1138</td>
      <td>Transaction CardToken field expected to be not null</td>
    </tr>
    <tr>
      <td>1140</td>
      <td>Failed to update transaction</td>
    </tr>
    <tr>
      <td>1141</td>
      <td>Payment session was not found</td>
    </tr>
    <tr>
      <td>1142</td>
      <td>Failed to obtain payment session by id</td>
    </tr>
    <tr>
      <td>1143</td>
      <td>Transaction should contain non-nil CardTokenID and CardToken fields</td>
    </tr>
    <tr>
      <td>1144</td>
      <td>Failed to remove payment session from cache</td>
    </tr>
    <tr>
      <td>1145</td>
      <td>Failed to convert pgtype.uuid to string</td>
    </tr>
    <tr>
      <td>1146</td>
      <td>Failed to remove payment session from cache</td>
    </tr>
    <tr>
      <td>1147</td>
      <td>Failed to convert map[string[]pgtype.UUID to map[string]string</td>
    </tr>
    <tr>
      <td>1148</td>
      <td>Failed to create a new customer</td>
    </tr>
    <tr>
      <td>1149</td>
      <td>Failed to get customer by ID provided</td>
    </tr>
    <tr>
      <td>1150</td>
      <td>Failed to create a payment link</td>
    </tr>
    <tr>
      <td>1151</td>
      <td>Failed to get a terminal id</td>
    </tr>
    <tr>
      <td>1152</td>
      <td>Invalid payment link</td>
    </tr>
    <tr>
      <td>1153</td>
      <td>Payment link with provided Order Reference already exists</td>
    </tr>
    <tr>
      <td>1154</td>
      <td>Failed to get payment link by merchant info</td>
    </tr>
    <tr>
      <td>1155</td>
      <td>Failed to retrieve currency</td>
    </tr>
        <tr>
      <td>1156</td>
      <td>Failed to retrieve merchant id</td>
    </tr>
    <tr>
      <td>1157</td>
      <td>Payment link does not exist by given id</td>
    </tr>
    <tr>
      <td>1158</td>
      <td>Both card data and card token id are null, at least one of them should not be null</td>
    </tr>
    <tr>
      <td>1159</td>
      <td>Failed to get payment link by id provided</td>
    </tr>
    <tr>
      <td>1160</td>
      <td>Failed to deserialize card token meta from JSON</td>
    </tr>
    <tr>
      <td>1161</td>
      <td>Failed to update payment session</td>
    </tr>
    <tr>
      <td>1162</td>
      <td>Both email and phone are required to create a new customer</td>
    </tr>
    <tr>
      <td>1163</td>
      <td>Unable to cancel the payment link</td>
    </tr>
    <tr>
      <td>1164</td>
      <td>Unable to update the payment link</td>
    </tr>
    <tr>
      <td>1165</td>
      <td>Customer with provided email and phone already exists</td>
    </tr>
    <tr>
      <td>1168</td>
      <td>Payment link has expired</td>
    </tr>
    <tr>
      <td>1169</td>
      <td>Payment link is invalid</td>
    </tr>
    <tr>
      <td>1170</td>
      <td>Failed to parse ExpiresAt as time field obtained from request payload</td>
    </tr>
    <tr>
      <td>1171</td>
      <td>Failed to update payment link status</td>
    </tr>
    <tr>
      <td>1172</td>
      <td>Failed to create a new customer</td>
    </tr>
    <tr>
      <td>1173</td>
      <td>Failed to compose checkout session for payment link provided</td>
    </tr>
    <tr>
      <td>1174</td>
      <td>Unsupported transaction type met, valid values: auth, sale</td>
    </tr>
    <tr>
      <td>1175</td>
      <td>Unsupported transaction type met, valid values: auth, sale</td>
    </tr>
    <tr>
      <td>1176</td>
      <td>Failed to obtain transaction by id</td>
    </tr>
    <tr>
      <td>1177</td>
      <td>Failed to get private key of given store from auth service</td>
    </tr>
    <tr>
      <td>1178</td>
      <td>Failed to obtain card type by id</td>
    </tr>
    <tr>
      <td>1179</td>
      <td>Failed to obtain transaction status by id</td>
    </tr>
    <tr>
      <td>1180</td>
      <td>Given transaction doesn't have a callback URL</td>
    </tr>
    <tr>
      <td>1181</td>
      <td>Callback already has been delivered to the given transaction</td>
    </tr>
    <tr>
      <td>1182</td>
      <td>Failed to send callback of the given transaction</td>
    </tr>
    <tr>
      <td>1183</td>
      <td>Failed to parse request body</td>
    </tr>
    <tr>
      <td>1184</td>
      <td>Failed to parse request body</td>
    </tr>
    <tr>
      <td>1185</td>
      <td>Failed to set callback delivered field to true of the given transaction</td>
    </tr>
    <tr>
      <td>1186</td>
      <td>Transaction event handler by the given name not found</td>
    </tr>
    <tr>
      <td>1187</td>
      <td>Failed to obtain payment method by id</td>
    </tr>
    <tr>
      <td>1188</td>
      <td>Transaction by the given id not found</td>
    </tr>
    <tr>
      <td>1189</td>
      <td>Failed to marshal callback data to JSON</td>
    </tr>
    <tr>
      <td>1190</td>
      <td>Given transaction not allowed by its status to call close callback</td>
    </tr>
    <tr>
      <td>1191</td>
      <td>Failed to parse JSON request data</td>
    </tr>
        <tr>
      <td>1192</td>
      <td>Failed to deserialize card token meta from JSON</td>
    </tr>
    <tr>
      <td>1193</td>
      <td>Failed to create a new transaction from external request</td>
    </tr>
    <tr>
      <td>1194</td>
      <td>Failed to store transaction</td>
    </tr>
    <tr>
      <td>1195</td>
      <td>Failed to decrypt card data from external request</td>
    </tr>
    <tr>
      <td>1197</td>
      <td>Failed to create a transaction from internal request</td>
    </tr>
    <tr>
      <td>1198</td>
      <td>Failed to create a common request</td>
    </tr>
    <tr>
      <td>1199</td>
      <td>Failed to decrypt card data from internal request</td>
    </tr>
    <tr>
      <td>1200</td>
      <td>Failed to compose a refund transaction</td>
    </tr>
    <tr>
      <td>1201</td>
      <td>Failed to store an unsuccessful refund transaction</td>
    </tr>
    <tr>
      <td>1202</td>
      <td>Failed to compose a successful refund transaction</td>
    </tr>
    <tr>
      <td>1203</td>
      <td>Failed to store a successful refund transaction entry</td>
    </tr>
    <tr>
      <td>1204</td>
      <td>Failed to deserialize card token meta from JSON</td>
    </tr>
    <tr>
      <td>1205</td>
      <td>Failed to update card token</td>
    </tr>
    <tr>
      <td>1206</td>
      <td>Failed to marshal card token meta to JSON</td>
    </tr>
    <tr>
      <td>1207</td>
      <td>Failed to marshal card token meta to JSON</td>
    </tr>
    <tr>
      <td>1208</td>
      <td>Failed to marshal card token meta to JSON</td>
    </tr>
    <tr>
      <td>1209</td>
      <td>Failed to create card token</td>
    </tr>
    <tr>
      <td>1210</td>
      <td>Failed to update card token</td>
    </tr>
    <tr>
      <td>1211</td>
      <td>Failed to update card token</td>
    </tr>
    <tr>
      <td>1212</td>
      <td>Failed to obtain card token by id and merchant id</td>
    </tr>
    <tr>
      <td>1214</td>
      <td>Failed to get transaction stamp from acquiring operator response</td>
    </tr>
    <tr>
      <td>1215</td>
      <td>Failed to get transaction stamp from acquiring operator response</td>
    </tr>
    <tr>
      <td>1216</td>
      <td>Failed to get transaction stamp from acquiring operator response</td>
    </tr>
    <tr>
      <td>1217</td>
      <td>Failed to get init token from acquiring operator response</td>
    </tr>
    <tr>
      <td>1218</td>
      <td>Failed to get init token from acquiring operator response</td>
    </tr>
    <tr>
      <td>1219</td>
      <td>Failed to get init token from acquiring operator response</td>
    </tr>
    <tr>
      <td>1220</td>
      <td>Failed to get tokenized card id from acquiring operator response</td>
    </tr>
    <tr>
      <td>1221</td>
      <td>Failed to get tokenized card id from acquiring operator response</td>
    </tr>
    <tr>
      <td>1222</td>
      <td>Failed to get tokenized card id from acquiring operator response</td>
    </tr>
    <tr>
      <td>1223</td>
      <td>Given card token's EquiringOperatorToken field expected to be not nil, nil value found</td>
    </tr>
    <tr>
      <td>1224</td>
      <td>Transaction.CardTokenID and Transaction.CardToken property expected to be not nil</td>
    </tr>
    <tr>
      <td>1225</td>
      <td>Transaction.CardTokenID and Transaction.CardToken property expected to be not nil</td>
    </tr>
    <tr>
      <td>1226</td>
      <td>Transaction.ParentTransactionID and Transaction.ParentTransaction property expected to be not nil</td>
    </tr>
    <tr>
      <td>1227</td>
      <td>Transaction.RecurringType property expected not to be nil</td>
    </tr>
    <tr>
      <td>1228</td>
      <td>Transaction.InitialExternalReference property expected not to be nil and not empty</td>
    </tr>
    <tr>
      <td>1229</td>
      <td>Transaction.RecurringType.Name expected to be 'cof_initial' or 'ucof'</td>
    </tr>
    <tr>
      <td>1230</td>
      <td>With recurring type 'ucof' transaction parent expected to be not nil</td>
    </tr>
    <tr>
      <td>1232</td>
      <td>An error occurred while attempting to save transaction history</td>
    </tr>
    <tr>
      <td>1233</td>
      <td>Failed to parse cancel request body</td>
    </tr>
    <tr>
      <td>1234</td>
      <td>Failed to extract transaction store id</td>
    </tr>
    <tr>
      <td>1235</td>
      <td>Account store id does not match with transaction store id</td>
    </tr>
    <tr>
      <td>1236</td>
      <td>Failed to extract transaction merchant id</td>
    </tr>
    <tr>
      <td>1237</td>
      <td>Account merchant id does not match with transaction merchant id</td>
    </tr>
    <tr>
      <td>1238</td>
      <td>Verification type transaction should have zero amount</td>
    </tr>
    <tr>
      <td>1239</td>
      <td>Verification type transaction should have zero amount</td>
    </tr>
    <tr>
      <td>1240</td>
      <td>Failed to determine card type</td>
    </tr>
    <tr>
      <td>1241</td>
      <td>Failed to retrieve card scheme for card type id provided</td>
    </tr>
    <tr>
      <td>1242</td>
      <td>Failed to retrieve card scheme for card type id provided</td>
    </tr>
    <tr>
      <td>1243</td>
      <td>Failed to process the request - no 3DS notification URL was provided</td>
    </tr>
    <tr>
      <td>1444</td>
      <td>Failed to parse JSON request body</td>
    </tr>
    <tr>
      <td>1445</td>
      <td>CRes field is empty</td>
    </tr>
    <tr>
      <td>1446</td>
      <td>TransactionId field is empty</td>
    </tr>
    <tr>
      <td>1447</td>
      <td>Unable to retrieve transaction by id provided</td>
    </tr>
    <tr>
      <td>1449</td>
      <td>Failed to process the request</td>
    </tr>
    <tr>
      <td>1450</td>
      <td>Failed to retrieve card info from card token</td>
    </tr>
    <tr>
      <td>1451</td>
      <td>Failed to process the request - acquiring operator returned an error</td>
    </tr>
    <tr>
      <td>1453</td>
      <td>Given transaction does not have a linked card token</td>
    </tr>
    <tr>
      <td>1454</td>
      <td>Payment session amount should be more than zero</td>
    </tr>
    <tr>
      <td>1455</td>
      <td>Transaction amount should be more than zero</td>
    </tr>
    <tr>
      <td>1456</td>
      <td>Request SCA exemption is invalid, must be from the set ['low_value']</td>
    </tr>
    <tr>
      <td>3001</td>
      <td>Authorization header is missing</td>
    </tr>
    <tr>
      <td>3002</td>
      <td>Private key required for authentication</td>
    </tr>
    <tr>
      <td>3003</td>
      <td>Private key required for authentication</td>
    </tr>
    <tr>
      <td>3004</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3005</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3006</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3007</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3008</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3009</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3010</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3011</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3012</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3013</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3014</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3015</td>
      <td>Connection problem with statement service</td>
    </tr>
    <tr>
      <td>3016</td>
      <td>Missing Bearer token in Authorization header</td>
    </tr>
    <tr>
      <td>3017</td>
      <td>Connection problem with statement service</td>
    </tr>
    <tr>
      <td>3018</td>
      <td>Connection problem with statement service</td>
    </tr>
    <tr>
      <td>3019</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3020</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3021</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3022</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3023</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3024</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3025</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3026</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3027</td>
      <td>Connection problem with statement service</td>
    </tr>
    <tr>
      <td>3028</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3029</td>
      <td>Connection problem with statement service</td>
    </tr>
    <tr>
      <td>3030</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3031</td>
      <td>Failed to process bearer token</td>
    </tr>
    <tr>
      <td>3033</td>
      <td>userID property not found in context locals</td>
    </tr>
    <tr>
      <td>3034</td>
      <td>Failed to context userID property of context locals</td>
    </tr>
    <tr>
      <td>3035</td>
      <td>userID property of context locals mustn't be an empty string</td>
    </tr>
    <tr>
      <td>3036</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3037</td>
      <td>Connection problem with dossier service</td>
    </tr>
    <tr>
      <td>3038</td>
      <td>Missing or malformed api key</td>
    </tr>
    <tr>
      <td>3039</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3040</td>
      <td>Connection problem with auth service</td>
    </tr>
    <tr>
      <td>3041</td>
      <td>Missing or malformed api key</td>
    </tr>
    <tr>
      <td>3042</td>
      <td>transactionID route parameter must be non-empty</td>
    </tr>
    <tr>
      <td>3043</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3044</td>
      <td>transactionID route parameter must be non-empty</td>
    </tr>
    <tr>
      <td>3045</td>
      <td>Connection problem with payment-core service</td>
    </tr>
    <tr>
      <td>3046</td>
      <td>Connection problem in auth service</td>
    </tr>
    <tr>
      <td>3047</td>
      <td>id route parameter must not be an empty string</td>
    </tr>
    <tr>
      <td>3049</td>
      <td>Need at least one authentication method</td>
    </tr>
    <tr>
      <td>3053</td>
      <td>Payment session create request has failed</td>
    </tr>
    <tr>
      <td>3054</td>
      <td>Payment merchant initialization has failed</td>
    </tr>
    <tr>
      <td>3055</td>
      <td>Failed to validate account terminal link</td>
    </tr>
    <tr>
      <td>3050</td>
      <td>Failed to retrieve accountID from locals</td>
    </tr>
    <tr>
      <td>3051</td>
      <td>Failed to convert untyped accountID to typed accountID</td>
    </tr>
    <tr>
      <td>3052</td>
      <td>Empty accountID from local storage</td>
    </tr>
    <tr>
      <td>3060</td>
      <td>Failed to parse request body</td>
    </tr>
    <tr>
      <td>3061</td>
      <td>Failed to marshal request body</td>
    </tr>
    <tr>
      <td>3056</td>
      <td>Failed to retrieve store id from local storage</td>
    </tr>
    <tr>
      <td>3057</td>
      <td>Failed to convert store id from local storage</td>
    </tr>
    <tr>
      <td>3058</td>
      <td>Retrieved store id from local storage is empty</td>
    </tr>
    <tr>
      <td>3062</td>
      <td>Failed to retrieve merchant id from local storage</td>
    </tr>
    <tr>
      <td>3063</td>
      <td>Failed to convert merchant id from local storage</td>
    </tr>
    <tr>
      <td>3064</td>
      <td>Retrieved local storage merchant id is empty</td>
    </tr>
    <tr>
      <td>3065</td>
      <td>Failed to validate account store link</td>
    </tr>
    <tr>
      <td>3066</td>
      <td>Failed to retrieve merchants for account provided</td>
    </tr>
    <tr>
      <td>3067</td>
      <td>Failed to unmarshal response data</td>
    </tr>
    <tr>
      <td>3068</td>
      <td>Failed to process checkout 3d check request</td>
    </tr>
    <tr>
      <td>8018</td>
      <td>Failed to validate account terminal link - empty account ID</td>
    </tr>
    <tr>
      <td>8019</td>
      <td>Unable to extract terminal ID from request body</td>
    </tr>
    <tr>
      <td>8020</td>
      <td>Failed to retrieve account by ID</td>
    </tr>
    <tr>
      <td>8021</td>
      <td>Requested account does not exist</td>
    </tr>
    <tr>
      <td>8022</td>
      <td>Failed to retrieve account external system value</td>
    </tr>
    <tr>
      <td>8023</td>
      <td>Requested account terminal link does not exist</td>
    </tr>
    <tr>
      <td>8024</td>
      <td>Requested account terminal link does not exist</td>
    </tr>
    <tr>
      <td>8025</td>
      <td>Failed to update account terminal link</td>
    </tr>
    <tr>
      <td>8026</td>
      <td>Failed to update account terminal link</td>
    </tr>
    <tr>
      <td>8027</td>
      <td>Failed to retrieve terminal by ID</td>
    </tr>
    <tr>
      <td>8028</td>
      <td>Requested terminal does not exist</td>
    </tr>
    <tr>
      <td>8029</td>
      <td>Requested terminal does not exist</td>
    </tr>
    <tr>
      <td>8030</td>
      <td>Failed to retrieve terminal external system value</td>
    </tr>
    <tr>
      <td>8031</td>
      <td>Failed to retrieve terminal external system value</td>
    </tr>
    <tr>
      <td>8032</td>
      <td>Failed to create account terminal link</td>
    </tr>
    <tr>
      <td>8033</td>
      <td>Failed to create account terminal link</td>
    </tr>
    <tr>
      <td>8034</td>
      <td>Failed to validate account merchant link - empty account ID</td>
    </tr>
    <tr>
      <td>8035</td>
      <td>Failed to retrieve account merchant link</td>
    </tr>
    <tr>
      <td>8036</td>
      <td>Request is not allowed - Current account does not have any active account merchant links</td>
    </tr>
  </tbody>
</table>
</ExpandableTable>

#### Response codes:

<ExpandableTable>
<table>
  <thead>
    <tr>
      <th><strong>Respone Code</strong></th>
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
