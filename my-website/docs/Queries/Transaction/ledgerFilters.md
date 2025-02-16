# ledgerFilters

## Description
Retrieves a list of all available platforms in the ledger system

## GraphQL Schema
```graphql
query {
  ledgerFilters: LedgerFiltersOptionsQuery
}

type LedgerFiltersOptionsQuery {
  actions: [FilterQueryType]
  platforms: [FilterQueryType]
  allPlatforms: [Platform]
  extendedPlatforms: [FilterQueryType]
  allActivities: [FilterQueryType]
  assets: [AssetNameFilterQueryType]
  thirdPartyAccounts: [FilterQueryType]
  internalAccounts: [InternalAccountQuery]
  applications: [FilterQueryType]
  protocols: [FilterQueryType]
  activities: [FilterQueryType]
  allParentPlatforms: [FilterQueryType]
  allOnchainParentPlatforms: [FilterQueryType]
  functions: [FilterQueryType]
  tags: [FilterQueryType]
  customNameLabelTags: [FilterQueryType]
  syncingStatus: [FilterQueryType]
  hasRollupTransactions: Boolean
  hasBalanceDiffTransactions: Boolean
}

type FilterQueryType {
  id: String
  displayName: String
}

type AssetNameFilterQueryType {
  id: String
  displayName: String
  name: String
  verificationStatus: String
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| limit | Int | Maximum number of items to return |
| offset | Int | Number of items to skip |
| ordering | String | Field and direction to order results by |
| before | String | Cursor for reverse pagination |
| after | String | Cursor for forward pagination |
| first | Int | Number of items to return from the beginning |
| last | Int | Number of items to return from the end |
| status | String | Filter by invoice status |
| source | String | Filter by invoice source |
| organization | ID | Filter by organization ID |