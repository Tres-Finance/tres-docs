# restoreTx

## Description
Restores a transaction by ID.

## GraphQL Schema
```graphql
schema {
  mutation: RestoreTxMutation
}

mutation {
  restoreTx(transactionId: String!): RestoreTxMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| transactionId | String! | ID of the transaction to restore |