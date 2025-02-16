# deleteInvite

## Description
Deletes an invite for a specific user.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteInviteMutation
}

mutation {
  deleteInvite(userId: String!): DeleteInviteMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| userId | String! | User ID to delete invite for |