# Portfolio Query

## Description
Retrieves daily networth information for a portfolio with various filtering options.

## GraphQL Schema
```graphql
query {
  portfolio: PortfolioQuery
}

type PortfolioQuery {
  dailyNetworthPerBalanceName(currency: Currency!, startDate: Date, endDate: Date, limit: Int): [DailyNetworthPerBalanceNameObjectType]
  dailyNetworthPerAssetClass(currency: Currency!, startDate: Date, endDate: Date, assetClassSymbols: [String], assetClassNames: [String], limit: Int): [DailyNetworthPerAssetClassObjectType]
  dailyNetworthPerInternalAccount(currency: Currency!, startDate: Date, endDate: Date, internalAccountNames: [String], internalAccountIdentifiers: [String], limit: Int): [DailyNetworthPerInternalAccountObjectType]
  dailyNetworthPerBalanceState(currency: Currency!, startDate: Date, endDate: Date, limit: Int): [DailyNetworthPerBalanceStateObjectType]
  dailyNetworth(currency: Currency!, startDate: Date, endDate: Date, limit: Int): [DailyNetworthObjectType]
}

type DailyNetworthPerBalanceNameObjectType {
  date: Date!
  totalValue: Float!
  totalAmount: Float!
  state: BalanceState!
  balanceName: String
  assetClassName: String!
}

scalar Date

enum BalanceState {
  LOCKED
  CLAIMABLE
  UNLOCKING
  LIQUID
  WALLET
  VIRTUAL
  CLAIMED
  WITHDRAWN
  UNDER_DELEGATION
  FAILED
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

type DailyNetworthPerAssetClassObjectType {
  date: Date!
  totalValue: Float!
  totalAmount: Float!
  assetClassName: String!
  assetClassSymbol: String!
}

type DailyNetworthPerInternalAccountObjectType {
  date: Date!
  totalValue: Float!
  totalAmount: Float!
  internalAccountName: String!
  internalAccountIdentifier: String!
}

type DailyNetworthPerBalanceStateObjectType {
  date: Date!
  totalValue: Float!
  totalAmount: Float!
  balanceState: BalanceState!
}

type DailyNetworthObjectType {
  date: Date!
  totalValue: Float!
  totalAmount: Float!
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | Currency! | Required currency for value calculation |
| startDate | Date | Start date for the time range |
| endDate | Date | End date for the time range |
| limit | Int | Maximum number of records to return |
| assetClassSymbols | [String] | Filter by asset class symbols |
| assetClassNames | [String] | Filter by asset class names |
| internalAccountNames | [String] | Filter by internal account names |
| internalAccountIdentifiers | [String] | Filter by internal account identifiers |