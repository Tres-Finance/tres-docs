# getApiKey

## Description
Generates an API key for authentication using client credentials.

## GraphQL Schema
```graphql
schema {
  mutation: GetApiKeyMutation
}

mutation {
  getApiKey(clientId: String!, clientSecret: String!): GetApiKeyMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| clientId | String! | Client identifier for authentication |
| clientSecret | String! | Secret key for client authentication |