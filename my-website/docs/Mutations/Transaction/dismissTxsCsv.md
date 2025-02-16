# dismissTxsCsv

## Description
Dismisses a transaction CSV file.

## GraphQL Schema
```graphql
schema {
  mutation: DismissTxsCsvMutation
}

mutation {
  dismissTxsCsv(csvId: ID, status: String): DismissTxsCsvMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| csvId | ID | Identifier for the CSV file to dismiss |
| status | String | Status to set for the CSV dismissal |