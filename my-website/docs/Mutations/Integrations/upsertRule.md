# UpsertRule Mutation

## Description
Upserts a rule in the system.

## GraphQL Schema
```graphql
schema {
  mutation: UpsertRuleMutation
}

mutation {
  upsertRule(rule: GenericScalar): UpsertRule
}

type UpsertRule {
  status: String
}

scalar GenericScalar
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| rule | GenericScalar | Input parameter for the upsertRule mutation |