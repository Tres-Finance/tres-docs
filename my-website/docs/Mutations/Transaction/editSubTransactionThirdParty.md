# editSubTransactionThirdParty

## Description
Updates the third-party identifier of a sub-transaction.

## GraphQL Schema
```graphql
mutation {
  editSubTransactionThirdParty(id: ID!, thirdPartyIdentifier: String!): EditSubTransactionThirdPartyMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| id | ID! | Unique identifier for the sub-transaction |
| thirdPartyIdentifier | String! | Identifier for the third party |