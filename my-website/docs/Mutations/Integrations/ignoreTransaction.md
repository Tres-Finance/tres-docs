# ignoreTransaction

## Description
Ignores one or more transactions.

## GraphQL Schema
```graphql
schema {
  mutation: IgnoreTransactionMutation
}

mutation {
  ignoreTransaction(transactionIds: [String]): IgnoreTransaction
}

type IgnoreTransaction {
  status: String
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| transactionIds | [String] | List of transaction IDs to ignore |