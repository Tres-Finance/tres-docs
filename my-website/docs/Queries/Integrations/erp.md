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
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of items to return from the beginning |
| last | Int | Number of items to return from the end |
| id | Float | Filter by specific ID |
| integratedApp | String | Filter by integrated application |

## Return Fields
| Name | Type | Description |
|------|------|-------------|
| pageInfo | PageInfoExtra! | Pagination information including hasNextPage and hasPreviousPage |
| results | [ErpQuery]! | Array of ERP query results |
| totalCount | Int | Total number of items in the result set |