# filterOptions

## Description
Retrieves filter options for various categories like platforms, actions, and transaction tags.

## GraphQL Schema
```graphql
query {
  filterOptions: FiltersOptionsQuery
}

type FiltersOptionsQuery {
  actions: [FilterQueryType]
  applications: [FilterQueryType]
  assets: [AssetNameFilterQueryType]
  functions: [FilterQueryType]
  platforms: [FilterQueryType]
  protocols: [FilterQueryType]
  transactionsTags: [FilterQueryType]
  methodIds: [FilterQueryType]
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
| id | String | Unique identifier |
| displayName | String | Display name for the filter |
| name | String | Asset name (only for AssetNameFilterQueryType) |
| verificationStatus | String | Verification status of the asset (only for AssetNameFilterQueryType) |