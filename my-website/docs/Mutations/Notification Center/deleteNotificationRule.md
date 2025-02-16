# deleteNotificationRule

## Description
Deletes a notification rule.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteNotificationRuleMutation
}

mutation {
  deleteNotificationRule(id: ID!): DeleteNotificationRuleMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| id | ID! | Unique identifier for the notification rule to delete |