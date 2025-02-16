# transactionClassification

## Description
Retrieves transaction classification information based on specified filters and pagination parameters.

## GraphQL Schema
```graphql
query {
  transactionClassification(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    key: String
  ): TransactionClassificationQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| limit | Int | Maximum number of items to return |
| offset | Int | Number of items to skip |
| ordering | String | Field and direction to order results by |
| before | String | Cursor for pagination - fetch items before this cursor |
| after | String | Cursor for pagination - fetch items after this cursor |
| first | Int | Number of items to fetch from start |
| last | Int | Number of items to fetch from end |
| key | String | Unique identifier for transaction classification |