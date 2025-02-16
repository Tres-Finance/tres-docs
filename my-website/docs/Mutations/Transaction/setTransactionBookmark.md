# setTransactionBookmark

## Description
Sets a bookmark on a transaction.

## GraphQL Schema
```graphql
schema {
  mutation: SetTransactionBookmarkMutation
}

mutation {
  setTransactionBookmark(active: Boolean!, bookmarkValue: String!, identifier: String!, platform: String!): SetTransactionBookmarkMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| active | Boolean! | Flag indicating if the bookmark should be active |
| bookmarkValue | String! | Value of the bookmark to set |
| identifier | String! | Unique identifier for the transaction |
| platform | String! | Platform where the transaction occurs |