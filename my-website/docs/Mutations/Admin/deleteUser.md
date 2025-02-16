# deleteUser

## Description
Deletes a user from the database.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteUserMutation
}

mutation {
  deleteUser(userId: String!): DeleteUserMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| userId | String! | Unique identifier for the user to be deleted |