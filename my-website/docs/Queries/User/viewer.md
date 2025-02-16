# viewer

## Description
Gets information about the currently authenticated user and their organization settings.

## GraphQL Schema
```graphql
query {
  viewer: UserQuery
}

type UserQuery {
  id: ID!
  password: String!
  lastLogin: DateTime
  isSuperuser: Boolean!
  username: String!
  firstName: String!
  lastName: String!
  email: String!
  isStaff: Boolean!
  isActive: Boolean!
  dateJoined: DateTime!
  orgName: String
  displayName: String
  canExecuteCommit: [String]
  organizationSettings: OrganizationSettingsObjectType
}

scalar DateTime

type OrganizationSettingsObjectType {
  calculateImpairmentForCurrencies: [Currency]!
  calculateCostBasisForCurrencies: [Currency]!
  calculateCostBasisByInternalAccount: Boolean!
  costBasisStrategy: CostBasisStrategy!
  useNewCostBasis: Boolean!
  calculateImpairmentForInternalAccounts: Boolean!
  avoidDeletingOldResults: Boolean!
  saveResultsInS3: Boolean!
  saveFullInventory: Boolean!
  allowShort: Boolean!
  useExactTimestampForCostBasisReport: Boolean!
  excludedInternalAccountsIds: [Int]!
  screenshotEnabled: Boolean!
  disabledCommitSteps: [String]!
  bypassPendingTxsCheck: Boolean!
  disableAutoCommit: Boolean!
  bypassCleanTxWithNoSubTx: Boolean!
  bypassSpecialFiatValuesCalculation: Boolean!
  autoScheduledCommitHours: [Int]!
  bypassFiatValuesFailedCalculation: Boolean!
  minLastSyncedAt: DateTime!
  disablePositions: Boolean!
  ignoreMethodIdsForInternalTransfers: [String]!
  ignoreSenderRecipientForInternalTransfers: [String]!
  doNotStartCommitOnNewAccounts: Boolean!
  filterAssetsDistributionWidgetGtZero: Boolean!
  customerTier: CustomerTier!
  commitPriority: CommitPriority!
  readinessEnabled: Boolean!
  storeArchivedBalances: Boolean!
  hideReconciliation: Boolean!
  enableHistoricalReport: Boolean!
  defaultDatetimeFilterEnabled: Boolean!
  proofOfFunds: ProofOfFundsSettingsObjectType
  allowInternalAccountCreation: Boolean!
  displayNotesAsActions: Boolean!
  showNotesAsAction: Boolean!
  allowRealtimeNotifications: Boolean!
  peggedStableCoinsToFiat: [PeggingPairObjectType]!
  acceptableSwapFiatValueAlignmentRate: Float!
  useCommentsForErpLineDescription: Boolean!
  skipCostBasisForAssetClassSymbol: [String]!
  runErpInvalidate: Boolean!
  enableApAr: Boolean!
  showSyncingStatusWidget: Boolean!
  hideOptionContracts: Boolean!
  enableCoaMapping: Boolean!
  refreshTokenOnJob: Boolean!
  mockIntegrationConnection: Boolean!
  fetchXeroDepartmentAndEntityTrackingCategories: Boolean!
  updateOrgStakingData: Boolean!
  separateUnlockingAndLocked: Boolean!
  dailyHistoricalReportTargetHour: Int!
  dailyHistoricalReportGracePeriod: Int!
  dailyHistoricalReportFormat: ReportOutputFormat!
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

enum CustomerTier {
  FREE
  TRIAL
  POC
  IDLE
  INTERNAL
}

enum CommitPriority {
  LOW
  NORMAL
  HIGH
}

type ProofOfFundsSettingsObjectType {
  dashboardUrl: String!
}

type PeggingPairObjectType {
  currency: Currency!
  assetName: String!
}

enum ReportOutputFormat {
  XLSX
  CSV
  PDF
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| calculateImpairmentForCurrencies | [Currency]! | List of currencies for impairment calculation |
| calculateCostBasisForCurrencies | [Currency]! | List of currencies for cost basis calculation |
| calculateCostBasisByInternalAccount | Boolean! | Flag to calculate cost basis by internal account |
| costBasisStrategy | CostBasisStrategy! | Strategy used for cost basis calculation |
| useNewCostBasis | Boolean! | Flag to use new cost basis calculation |
| calculateImpairmentForInternalAccounts | Boolean! | Flag to calculate impairment for internal accounts |
| avoidDeletingOldResults | Boolean! | Flag to prevent deletion of old results |
| saveResultsInS3 | Boolean! | Flag to save results in S3 |
| saveFullInventory | Boolean! | Flag to save full inventory |
| allowShort | Boolean! | Flag to allow short positions |
| useExactTimestampForCostBasisReport | Boolean! | Flag to use exact timestamp for cost basis report |
| excludedInternalAccountsIds | [Int]! | List of internal account IDs to exclude |
| screenshotEnabled | Boolean! | Flag to enable screenshots |
| disabledCommitSteps | [String]! | List of disabled commit steps |
| bypassPendingTxsCheck | Boolean! | Flag to bypass pending transactions check |
| disableAutoCommit | Boolean! | Flag to disable auto commit |
| bypassCleanTxWithNoSubTx | Boolean! | Flag to bypass clean transactions with no sub-transactions |
| bypassSpecialFiatValuesCalculation | Boolean! | Flag to bypass special fiat values calculation |
| autoScheduledCommitHours | [Int]! | List of hours for auto-scheduled commits |
| bypassFiatValuesFailedCalculation | Boolean! | Flag to bypass failed fiat values calculation |