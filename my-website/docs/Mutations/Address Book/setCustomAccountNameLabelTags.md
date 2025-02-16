# setCustomAccountNameLabelTags

## Description
Sets custom tags for an account name label.

## GraphQL Schema
```graphql
mutation {
  setCustomAccountNameLabelTags(identifier: String!, tags: [String]!): SetCustomAccountNameLabelTagsMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| identifier | String! | Identifier for the account name label |
| tags | [String]! | Array of tags to set for the account name label |