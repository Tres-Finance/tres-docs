# collectAudit

## Description
Retrieves audit information about commits with filtering and pagination options

## GraphQL Schema
```graphql
query {
  collectAudit(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    commitId: UUID
    status_In: [String]
    status: String
    commitType: String
  ): CollectAuditQueryNodeConnection
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
| commitId | UUID | Unique identifier for the commit |
| status_In | [String] | Filter by multiple status values |
| status | String | Filter by specific status |
| commitType | String | Type of commit to filter by |