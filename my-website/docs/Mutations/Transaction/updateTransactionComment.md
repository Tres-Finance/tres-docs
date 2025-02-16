# updateTransactionComment

## Description
Updates a transaction's comment.

## GraphQL Schema
```graphql
schema {
  mutation: UpdateTransactionCommentMutation
}

mutation {
  updateTransactionComment(comment: String!, fileKey: String, id: Float!): UpdateTransactionCommentMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| comment | String! | Comment text to update |
| fileKey | String | Optional file key associated with the transaction |
| id | Float! | ID of the transaction to update |