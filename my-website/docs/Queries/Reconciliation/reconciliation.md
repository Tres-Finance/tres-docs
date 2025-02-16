# Reconciliation Query

## Description
Retrieves reconciliation results filtered by IDs, asset names, and end date.

## GraphQL Schema
```graphql
query {
  reconciliation(
    endDate: DateTime
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    belongsToId_In: [ID]
    asset_Name_In: [String]
  ): ReconciliationQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| endDate | DateTime | End date for reconciliation query |
| limit | Int | Maximum number of records to return |
| offset | Int | Number of records to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination before |
| after | String | Cursor for pagination after |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| belongsToId_In | [ID] | Filter by multiple belonging IDs |
| asset_Name_In | [String] | Filter by multiple asset names |