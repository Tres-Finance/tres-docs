# updateTransactionClassificationRule

## Description
Updates a transaction classification rule with a new activity.

## GraphQL Schema
```graphql
schema {
  mutation: UpdateTransactionClassificationRuleMutation
}

mutation {
  updateTransactionClassificationRule(activity: String!, key: String!): UpdateTransactionClassificationRuleMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| activity | String! | Activity identifier for the transaction classification rule |
| key | String! | Key identifier for the transaction classification rule |