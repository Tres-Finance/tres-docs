# stakingData

## Description
Retrieves staking data for a specific platform and time period.

## GraphQL Schema
```graphql
query {
  stakingData(platform: Platform!, identifier: String!, start: Date!, end: Date!, assetIdentifier: String, excludeZeroRewards: Boolean, roundDecimals: Boolean, useDb: Boolean, yieldType: StakingYieldType, ignoreMissingDataErrors: Boolean): StakingDataResponseObjectType
}

type StakingDataResponseObjectType {
  data: StakingDataObjectType!
  platform: Platform!
  identifier: String!
  assetIdentifier: String!
  internalAccountName: String!
  internalAccountTags: [String]!
  start: Date!
  end: Date!
  totalCount: Int!
}

type StakingDataObjectType {
  summary: [StakingDataEntryObjectType]!
  byValidator: [StakingDataEntryObjectType]!
}

type StakingDataEntryObjectType {
  start: DateTime!
  end: DateTime!
  generatedRewards: Decimal!
  locked: Decimal
  claimable: Decimal
  unlocking: Decimal
  apr: Decimal
  stakingLedger: [StakingLedgerObjectType]!
  validatorIdentifier: String
  yieldType: StakingYieldType!
  createdAt: DateTime
  updatedAt: DateTime
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| platform | Platform! | Platform identifier for staking data |
| identifier | String! | Unique identifier for the staking entity |
| start | Date! | Start date for the staking data query |
| end | Date! | End date for the staking data query |
| assetIdentifier | String | Optional asset identifier to filter results |
| excludeZeroRewards | Boolean | Flag to exclude entries with zero rewards |
| roundDecimals | Boolean | Flag to round decimal values |
| useDb | Boolean | Flag to use database for query |
| yieldType | StakingYieldType | Type of staking yield to filter |
| ignoreMissingDataErrors | Boolean | Flag to ignore missing data errors |