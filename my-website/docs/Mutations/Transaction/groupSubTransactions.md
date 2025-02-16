# groupSubTransactions

## Description
Groups subtransactions together based on provided IDs

## GraphQL Schema
```graphql
schema {
  mutation: GroupSubTransactionsMutation
}

mutation {
  groupSubTransactions(assetId: ID!, belongsToId: ID!, transactionId: ID!): GroupSubTransactionsMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| assetId | ID! | Unique identifier for the asset |
| belongsToId | ID! | Identifier specifying what the transaction belongs to |
| transactionId | ID! | Unique identifier for the transaction |