# deleteInternalAccount

## Description
Deletes an internal account from a specified platform.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteInternalAccountMutation
}

mutation {
  deleteInternalAccount(checkOnly: Boolean, deleteInternalAccount: Boolean!, identifier: String!, parentPlatform: ParentPlatform): CleanInternalAccountMutation
}

type CleanInternalAccountMutation {
  errors: [String]
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
  AKASH
  ALGORAND
  MINA
  GEMINI
  NOBLE
  FTX
  FTXUS
  # ... remaining enum values omitted for brevity
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| checkOnly | Boolean | Flag to check if account can be deleted |
| deleteInternalAccount | Boolean! | Required flag to confirm account deletion |
| identifier | String! | Required identifier of the account to delete |
| parentPlatform | ParentPlatform | Optional platform enum specifying the parent platform |