# updateNotificationRule

## Description
Updates a notification rule's enabled status.

## GraphQL Schema
```graphql
schema {
  mutation: UpdateNotificationRuleMutation
}

mutation {
  updateNotificationRule(enable: Boolean!, key: Int!): UpdateNotificationRuleMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| enable | Boolean! | Flag to enable/disable the notification rule |
| key | Int! | Unique identifier for the notification rule |