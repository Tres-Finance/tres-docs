# deleteBatchCustomActivity

## Description
Deletes multiple custom activities in a batch.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteBatchCustomActivityMutation
}

mutation {
  deleteBatchCustomActivity(customLabels: [CustomLabelInput]!): DeleteBatchCustomActivityLabelMutation
}

type DeleteBatchCustomActivityLabelMutation {
  status: Boolean
}

input CustomLabelInput {
  identifier: String
  labelValue: String
  platform: Platform
}

enum Platform {
  EOS
  VANAR
  ONTOLOGY
  POLKADOT
  KUSAMA
  ACALA
  POLYMESH
  ASTAR
  SHIDEN
  CALAMARI
  INTERLAY
  KINTSUGI
  KARURA
  BITTENSOR
  OLD_POLKADOT
  OLD_KUSAMA
  OLD_ASTAR
  OLD_SHIDEN
  KASPA
  POCKET
  FILECOIN
  BITGO
  BINANCE
  POLYGON
  AVAX
  OPTIMISM
  CELO
  BITCOIN
  SOLANA
  CARDANO
  # ... remaining enum values
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| customLabels | [CustomLabelInput]! | Array of custom label inputs containing identifier, label value and platform |
| identifier | String | Identifier for the custom label |
| labelValue | String | Value of the custom label |
| platform | Platform | Platform enum value specifying the blockchain/platform |