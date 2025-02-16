# restoreSubTx

## Description
Restores a specific subtransaction by ID.

## GraphQL Schema
```graphql
schema {
  mutation: RestoreSubTxMutation
}

mutation {
  restoreSubTx(subTxId: String!): RestoreSubTxMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| subTxId | String! | Identifier of the sub-transaction to restore |