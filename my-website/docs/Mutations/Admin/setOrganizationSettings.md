# setOrganizationSettings

## Description
Updates organization settings including cost basis, ERP, and AP/AR configurations.

## GraphQL Schema
```graphql
schema {
  mutation: SetOrganizationSettingsMutation
}

mutation {
  setOrganizationSettings(
    acceptableSwapFiatValueAlignmentRate: Float!
    autoScheduledCommitHours: [Int]
    calculateCostBasisByInternalAccount: Boolean!
    calculateCostBasisForCurrencies: [Currency]!
    costBasisStrategy: CostBasisStrategy!
    disableAutoCommit: Boolean
    enableApAr: Boolean
    peggedStableCoinsToFiat: [PeggingPairInputType]
    runErpInvalidate: Boolean!
    skipCostBasisForAssetClassSymbol: [String]!
    useCommentsForErpLineDescription: Boolean!
    useNewCostBasis: Boolean
  ): SetOrganizationSettingsMutation
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

enum CostBasisStrategy {
  FIFO
  FIFO_IMPAIRMENT
  LIFO
  AVG
  MAX_GAINS
  MAX_LOSSES
}

input PeggingPairInputType {
  currency: Currency!
  assetName: String!
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| acceptableSwapFiatValueAlignmentRate | Float! | Rate for acceptable swap fiat value alignment |
| autoScheduledCommitHours | [Int] | Array of hours for auto-scheduled commits |
| calculateCostBasisByInternalAccount | Boolean! | Flag to calculate cost basis by internal account |
| calculateCostBasisForCurrencies | [Currency]! | List of currencies for cost basis calculation |
| costBasisStrategy | CostBasisStrategy! | Strategy for cost basis calculation (FIFO/LIFO/AVG/etc) |
| disableAutoCommit | Boolean | Flag to disable auto commit |
| enableApAr | Boolean | Flag to enable AP/AR functionality |
| peggedStableCoinsToFiat | [PeggingPairInputType] | Array of pegging pairs for stablecoins to fiat |
| runErpInvalidate | Boolean! | Flag to run ERP invalidation |
| skipCostBasisForAssetClassSymbol | [String]! | List of asset class symbols to skip cost basis calculation |
| useCommentsForErpLineDescription | Boolean! | Flag to use comments for ERP line descriptions |
| useNewCostBasis | Boolean | Flag to use new cost basis calculation |