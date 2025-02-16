# manualCsv

## Description
Retrieves manual CSV data with pagination and filtering options

## GraphQL Schema
```graphql
query {
  manualCsv(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    status: String
    key: String
  ): ManualCsvQueryNodeConnection
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
| first | Int | Number of items to return from the start |
| last | Int | Number of items to return from the end |
| status | String | Filter by status |
| key | String | Filter by key |