# setPlatformSettings

## Description
Sets platform settings for a specific internal account.

## GraphQL Schema
```graphql
schema {
  mutation: SetPlatformSettingsMutation
}

mutation {
  setPlatformSettings(
    aggregateAccruedRewards: Boolean
    balanceRollupSettings: BalanceRollupSettingsInputType
    internalAccountId: Int!
    platform: Platform!
  ): SetPlatformSettingsMutation
}

input BalanceRollupSettingsInputType {
  assetIdentifiers: [String] = null
  interval: BalanceRollupInterval = DAILY
}

enum BalanceRollupInterval {
  DAILY
  WEEKLY
  MONTHLY
}

enum Platform {
  EOS
  VANAR
  ONTOLOGY
  POLKADOT
  # ... [other platform values]
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| aggregateAccruedRewards | Boolean | Flag to determine if accrued rewards should be aggregated |
| balanceRollupSettings | BalanceRollupSettingsInputType | Settings for balance rollup configuration |
| internalAccountId | Int! | Required internal account identifier |
| platform | Platform! | Required platform identifier from the supported platforms enum |