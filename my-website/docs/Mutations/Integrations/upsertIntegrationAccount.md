# upsertIntegrationAccount

## Description
Creates or updates an integration account with specified details.

## GraphQL Schema
```graphql
mutation {
  upsertIntegrationAccount(
    integrationAccountId: Int
    integrationId: Int!
    name: String!
    type: AccountType!
    value: String!
  ): upsertIntegrationAccountMutation
}

type upsertIntegrationAccountMutation {
  isSuccessful: Boolean
  createdNew: Boolean
  integrationAccountId: String
}

enum AccountType {
  ASSET
  LIABILITY
  EQUITY
  INCOME
  EXPENSE
  NETSUITE_CLASS
  NETSUITE_DEPARTMENT
  XERO_DEPARTMENT
  XERO_ENTITY
  SUBSIDIARY
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| integrationAccountId | Int | Optional ID for existing integration account |
| integrationId | Int! | Required ID of the integration |
| name | String! | Required name for the integration account |
| type | AccountType! | Required type of account from AccountType enum |
| value | String! | Required value for the integration account |