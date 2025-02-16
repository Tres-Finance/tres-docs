# Admin Query

## Description
Retrieves a list of users within an organization and organization settings

## GraphQL Schema
```graphql
query {
  admin: AdminQuery
}

type AdminQuery {
  orgName: String
  users: [UserObjectType]
  organizationSettings: OrganizationSettingsObjectType
}

type UserObjectType {
  userId: String
  email: String
  picture: String
  name: String
  invitationExpired: DateTime
  invitationUrl: String
  userType: UserType
}

scalar DateTime

enum UserType {
  ADMIN
  MEMBER
  VIEWER
  ASSOCIATE
  PENDING
}

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
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| orgName | String | Name of the organization |
| users | [UserObjectType] | List of users in the organization |
| organizationSettings | OrganizationSettingsObjectType | Organization settings configuration |
| userId | String | Unique identifier for the user |
| email | String | User's email address |
| picture | String | URL to user's profile picture |
| name | String | User's full name |
| invitationExpired | DateTime | Timestamp when user invitation expires |
| invitationUrl | String | URL for user invitation |
| userType | UserType | Type of user (ADMIN/MEMBER/VIEWER/ASSOCIATE/PENDING) |
| calculateImpairmentForCurrencies | [Currency] | List of currencies for impairment calculation |
| calculateImpairmentForInternalAccounts | Boolean | Flag to calculate impairment for internal accounts |
| costBasisStrategy | CostBasisStrategy | Strategy used for cost basis calculation |
| useNewCostBasis | Boolean | Flag to use new cost basis calculation |
| customerTier | CustomerTier | Tier level of the customer |
| commitPriority | CommitPriority | Priority level for commit operations |
| dailyHistoricalReportFormat | ReportOutputFormat | Format for daily historical reports |