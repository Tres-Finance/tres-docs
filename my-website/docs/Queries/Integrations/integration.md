# Integration Query

## Description
Retrieves a paginated list of integrations with their details and connection status.

## GraphQL Schema
```graphql
query {
  integration(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    id: Float
    integratedApp: String
  ): IntegrationsQueryNodeConnection
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
| id | Float | Filter by integration ID |
| integratedApp | String | Filter by integrated application name |