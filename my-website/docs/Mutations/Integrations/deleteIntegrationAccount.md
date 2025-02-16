# deleteIntegrationAccount

## Description
Deletes an integration account.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteIntegrationAccountMutation
}

mutation {
  deleteIntegrationAccount(integrationAccountId: Int!, integrationId: Int!): deleteIntegrationAccountMutation
}

type deleteIntegrationAccountMutation {
  deleted: Boolean
  message: String
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| integrationAccountId | Int! | ID of the integration account to delete |
| integrationId | Int! | ID of the integration |