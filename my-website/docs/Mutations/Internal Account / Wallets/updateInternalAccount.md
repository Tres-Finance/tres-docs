# updateInternalAccount

## Description
Updates an internal account's information.

## GraphQL Schema
```graphql
schema {
  mutation: UpdateInternalAccountMutation
}

mutation {
  updateInternalAccount(
    description: String
    enforceCollectTransactions: Boolean
    identifier: String!
    name: String!
    parentPlatform: ParentPlatform
    platformKeys: JSONString
    userType: ParentPlatform
  ): UpdateInternalAccountMutation
}

enum ParentPlatform {
  EOS
  ONTOLOGY
  SUBSTRATE
  KASPA
  FILECOIN
  BITGO
  ETHEREUM
  BITCOIN
  SOLANA
  BINANCE_EXCHANGE
  BINANCE_EXCHANGE_TR
  KRAKEN
  COINBASE_PRIME
  COINBASE
  COINBASE_COMMERCE
  # ... other enum values ...
}

scalar JSONString
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| description | String | Description of the internal account |
| enforceCollectTransactions | Boolean | Flag to enforce transaction collection |
| identifier | String! | Required unique identifier for the account |
| name | String! | Required name for the internal account |
| parentPlatform | ParentPlatform | Parent platform enumeration value |
| platformKeys | JSONString | Platform specific keys in JSON format |
| userType | ParentPlatform | Type of user based on parent platform |