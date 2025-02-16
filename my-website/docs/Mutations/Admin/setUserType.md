# setUserType

## Description
Updates a user's type.

## GraphQL Schema
```graphql
schema {
  mutation: SetUserTypeMutation
}

mutation {
  setUserType(userId: String!, userType: UserType): SetUserTypeMutation
}

enum UserType {
  ADMIN
  MEMBER
  VIEWER
  ASSOCIATE
  PENDING
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| userId | String! | Unique identifier for the user |
| userType | UserType | Type of user role to set (ADMIN/MEMBER/VIEWER/ASSOCIATE/PENDING) |