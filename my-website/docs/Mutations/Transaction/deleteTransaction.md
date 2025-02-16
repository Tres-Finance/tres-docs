# deleteTransaction

## Description
Deletes a transaction.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteTransactionMutation
}

mutation {
  deleteTransaction(id: String!): DeleteTransactionMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| id | String! | Unique identifier of the transaction to delete |