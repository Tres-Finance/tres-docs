# getIntegrationOauthLink

## Description
Retrieves an OAuth link for integration authentication.

## GraphQL Schema
```graphql
schema {
  mutation: GetIntegrationOauthLinkMutation
}

mutation {
  getIntegrationOauthLink(integrationName: String): GetIntegrationOuathLink
}

type GetIntegrationOuathLink {
  url: GenericScalar
}

scalar GenericScalar
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| integrationName | String | Name of the integration to get OAuth link for |