# deleteTransactionComment

## Description
Deletes a comment from a transaction.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteTransactionCommentMutation
}

mutation {
  deleteTransactionComment(comment: String!, id: Float!): DeleteTransactionCommentMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| comment | String! | Comment text to be deleted |
| id | Float! | ID of the transaction comment to delete |