# auditLog

## Description
Retrieves audit logs based on specified filters like currency, timestamp range, and export format.

## GraphQL Schema
```graphql
query {
  auditLog(
    currency: String
    exportName: String
    exportFormat: String
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    timestamp_Lte: DateTime
    timestamp_Gte: DateTime
  ): LogEntryQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency filter for audit log entries |
| exportName | String | Name for the exported file |
| exportFormat | String | Format of the export file |
| limit | Int | Maximum number of entries to return |
| offset | Int | Number of entries to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| timestamp_Lte | DateTime | Filter entries with timestamp less than or equal to |
| timestamp_Gte | DateTime | Filter entries with timestamp greater than or equal to |