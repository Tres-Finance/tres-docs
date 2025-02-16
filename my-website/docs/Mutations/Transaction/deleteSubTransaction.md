# deleteSubTransaction

## Description
Deletes a subtransaction by ID.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteSubTransactionMutation
}

mutation {
  deleteSubTransaction(id: String!): DeleteSubTransactionMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| id | String! | Unique identifier of the sub-transaction to delete |