# deleteTransactionClassificationRule

## Description
Deletes a transaction classification rule.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteTransactionClassificationRuleMutation
}

mutation {
  deleteTransactionClassificationRule(key: String!): DeleteTransactionClassificationRuleMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| key | String! | Key identifier for the transaction classification rule to delete |