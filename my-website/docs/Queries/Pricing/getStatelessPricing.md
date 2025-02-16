# getStatelessPricing

## Description
Retrieves pricing information for a specified asset across multiple currencies.

## GraphQL Schema
```graphql
query {
  getStatelessPricing(platform: Platform!, assetIdentifier: String!, currencies: [Currency]!, timestamp: DateTime): PricesObjectType
}

type PricesObjectType {
  prices: GenericScalar
}

scalar GenericScalar

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

enum Currency {
  USD
  EUR
  IDR
  CHF
  ILS
  GBP
  TRY
  AUD
  CAD
  JPY
  AED
  NZD
  SEK
  CLP
}

scalar DateTime
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| platform | Platform! | The blockchain platform to get pricing for |
| assetIdentifier | String! | The identifier for the asset to get pricing for |
| currencies | [Currency]! | List of currencies to get prices in |
| timestamp | DateTime | Optional timestamp to get historical pricing for |