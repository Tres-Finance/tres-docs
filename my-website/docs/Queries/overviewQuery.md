# Overview Query

## Description
Retrieves an overview of network exposure and related financial metrics.

## GraphQL Schema
```graphql
query {
  overviewQuery: OverviewQuery
}

type OverviewQuery {
  customAccountName: String
  key: String
  id: ID
  platform: String
  netWorthWidget(currency: String): GenericScalar
  totalStaked(currency: String): Float
  totalClaimable(currency: String): Float
  dailyClaimedRewardsWidget(startDate: DateTime!, endDate: DateTime!, currency: String): GenericScalar
  missingFiatValues(currency: String, limit: Int): GenericScalar
  dailyInflowOutflowWidget(startDate: DateTime!, endDate: DateTime!, currency: String): GenericScalar
  networkExposureWidget(currency: String): GenericScalar
  topAssetWidget(currency: String): GenericScalar
  underDelegationWidget(currency: String): GenericScalar
  underlyingAssetsWidget(currency: String): GenericScalar
}

scalar GenericScalar
scalar DateTime
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency code for financial values |
| startDate | DateTime | Start date for time-based queries |
| endDate | DateTime | End date for time-based queries |
| limit | Int | Maximum number of items to return |