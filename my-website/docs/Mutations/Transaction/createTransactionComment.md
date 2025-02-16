# createTransactionComment

## Description
Creates a new transaction comment with optional file attachment.

## GraphQL Schema
```graphql
mutation {
  createTransactionComment(
    comment: String!
    fileKey: String
    identifier: String!
    platform: String!
  ): CreateTransactionCommentMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| comment | String! | Comment text for the transaction |
| fileKey | String | Optional file key associated with the comment |
| identifier | String! | Unique identifier for the transaction |
| platform | String! | Platform where the transaction occurs |