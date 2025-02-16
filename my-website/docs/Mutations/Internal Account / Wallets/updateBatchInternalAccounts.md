# updateBatchInternalAccounts

## Description
Updates a batch of internal accounts.

## GraphQL Schema
```graphql
mutation {
  updateBatchInternalAccounts(
    enforceCollectTransactions: Boolean
    internalAccounts: [InternalAccountInput]
  ): UpdateBatchInternalAccountsMutation
}

input InternalAccountInput {
  name: String!
  identifier: String!
  parentPlatform: ParentPlatform!
  enforceCollectTransactions: Boolean
  platformKeys: JSONString
  description: String
  tags: [String]
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
  ETHEREUM2
  COSMOS
  KUCOIN
  FALCONX
  # ... other platform values
}

scalar JSONString
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| enforceCollectTransactions | Boolean | Flag to enforce collection of transactions |
| internalAccounts | [InternalAccountInput] | Array of internal account inputs containing account details |
| name | String! | Required name of the internal account |
| identifier | String! | Required unique identifier for the account |
| parentPlatform | ParentPlatform! | Required platform enum value specifying the parent platform |
| enforceCollectTransactions | Boolean | Flag to enforce collection of transactions for specific account |
| platformKeys | JSONString | Platform-specific configuration keys as JSON |
| description | String | Optional description of the internal account |
| tags | [String] | Optional array of tags associated with the account |