# deleteRule

## Description
Deletes a rule by its identifier.

## GraphQL Schema
```graphql
schema {
  mutation: DeleteRuleMutation
}

mutation {
  deleteRule(identifier: String): DeleteRule
}

type DeleteRule {
  status: String
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| identifier | String | Unique identifier for the rule to be deleted |