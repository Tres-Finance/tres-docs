# missingFiatValues

## Description
Retrieves missing fiat values for specified assets based on given criteria.

## GraphQL Schema
```graphql
query {
  missingFiatValues: MissingFiatValuesQuery
}

type MissingFiatValuesQuery {
  missingFiatValues(endDate: DateTime, belongsToIds: [Int], assetNames: [String], currency: Currency!, limit: Int = 10): [FiatValueGapObjectType]
}

type FiatValueGapObjectType {
  assetName: String!
  assetSymbol: String!
  assetClassName: String!
  assetClassSymbol: String!
  txsWithoutFiatValue: Int!
}

scalar DateTime

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
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| endDate | DateTime | End date for filtering fiat values |
| belongsToIds | [Int] | List of IDs to filter by ownership |
| assetNames | [String] | List of asset names to filter |
| currency | Currency! | Required currency for fiat values (USD/EUR/etc) |
| limit | Int = 10 | Maximum number of results to return (defaults to 10) |