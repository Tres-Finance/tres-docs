# ERP Query

## Description
Retrieves ERP data with pagination and filtering options.

## GraphQL Schema
```graphql
query {
  erp(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    id: Float
    integratedApp: String
  ): ErpQueryNodeConnection
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
| id | Float | Filter by specific ID |
| integratedApp | String | Filter by integrated application |