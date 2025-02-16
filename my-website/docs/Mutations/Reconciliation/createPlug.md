# createPlug

## Description
Creates a new plug (subtransaction) entry with specified transaction details.

## GraphQL Schema
```graphql
schema {
  mutation: CreatePlugMutation
}

mutation {
  createPlug(
    amount: Float!
    assetId: ID!
    assetIdentifier: String!
    belongsToId: ID!
    direction: Direction
    hash: String!
    platform: Platform
    thirdPartyIdentifier: String!
    timestamp: DateTime!
  ): CreatePlugMutation
}

enum Direction {
  INFLOW
  OUTFLOW
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
  # ... [other platform values]
}

scalar DateTime
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| amount | Float! | Amount value for the plug creation |
| assetId | ID! | Unique identifier for the asset |
| assetIdentifier | String! | Identifier string for the asset |
| belongsToId | ID! | ID reference for ownership |
| direction | Direction | Flow direction (INFLOW/OUTFLOW) |
| hash | String! | Hash value for the plug |
| platform | Platform | Platform enumeration value |
| thirdPartyIdentifier | String! | Third party identification string |
| timestamp | DateTime! | Timestamp of plug creation |