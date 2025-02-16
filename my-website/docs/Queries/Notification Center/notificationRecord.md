# notificationRecord

## Description
Retrieves notification records with optional filtering and pagination parameters.

## GraphQL Schema
```graphql
query {
  notificationRecord(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    createdAt: DateTime
    createdAt_Gt: DateTime
    createdAt_Lt: DateTime
    status: String
    commitId: String
    id: Float
  ): NotificationRecordQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| limit | Int | Maximum number of records to return |
| offset | Int | Number of records to skip |
| ordering | String | Field and direction to order results by |
| before | String | Cursor for pagination - records before this value |
| after | String | Cursor for pagination - records after this value |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| createdAt | DateTime | Filter by exact creation timestamp |
| createdAt_Gt | DateTime | Filter by creation timestamp greater than value |
| createdAt_Lt | DateTime | Filter by creation timestamp less than value |
| status | String | Filter by notification status |
| commitId | String | Filter by specific commit ID |
| id | Float | Filter by notification record ID |