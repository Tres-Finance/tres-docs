# addBatchFiat

## Description
Adds a batch of fiat currency data with specified values and properties.

## GraphQL Schema
```graphql
mutation {
  addBatchFiat(
    assetNames: [String]
    belongsToIds: [Int]
    currency: Currency!
    endDate: DateTime
    value: Float!
  ): AddBatchFiatMutation
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
| assetNames | [String] | List of asset names |
| belongsToIds | [Int] | List of belonging IDs |
| currency | Currency! | Required currency enum value |
| endDate | DateTime | Optional end date timestamp |
| value | Float! | Required numerical value |