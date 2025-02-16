# notificationRule

## Description
Retrieves notification rules with optional filtering and pagination parameters

## GraphQL Schema
```graphql
query {
  notificationRule(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    rule_In: [String]
    createdAt: DateTime
    createdAt_Gt: DateTime
    createdAt_Lt: DateTime
    threshold: Int
    threshold_Gt: Int
    threshold_Lt: Int
    side: String
    enable: Boolean
    id: Float
  ): NotificationRuleQueryNodeConnection
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
| first | Int | Number of items to return from start |
| last | Int | Number of items to return from end |
| rule_In | [String] | Filter by rules included in this list |
| createdAt | DateTime | Filter by exact creation timestamp |
| createdAt_Gt | DateTime | Filter by creation timestamp greater than |
| createdAt_Lt | DateTime | Filter by creation timestamp less than |
| threshold | Int | Filter by exact threshold value |
| threshold_Gt | Int | Filter by threshold greater than |
| threshold_Lt | Int | Filter by threshold less than |
| side | String | Filter by side |
| enable | Boolean | Filter by enabled status |
| id | Float | Filter by exact ID |