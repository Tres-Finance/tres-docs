# inviteUser

## Description
Invites one or more users to the system.

## GraphQL Schema
```graphql
schema {
  mutation: InviteUserMutation
}

mutation {
  inviteUser(emails: [String]!, userType: UserType): InviteUserMutation
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
| emails | [String]! | List of email addresses to invite |
| userType | UserType | Type of user role to assign (ADMIN/MEMBER/VIEWER/ASSOCIATE/PENDING) |