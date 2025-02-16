# syncIntegration

## Description
Synchronizes a specified integration within a given time period.

## GraphQL Schema
```graphql
schema {
  mutation: SyncIntegrationMutation
}

mutation {
  syncIntegration(endDate: DateTime, integrationName: String, startDate: DateTime): SyncIntegration
}

type SyncIntegration {
  status: String
}

scalar DateTime
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| endDate | DateTime | End date for sync integration |
| integrationName | String | Name of the integration to sync |
| startDate | DateTime | Start date for sync integration |