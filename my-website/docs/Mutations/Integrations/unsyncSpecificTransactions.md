# unsyncSpecificTransactions

## Description
Unsyncs specific transactions by their IDs.

## GraphQL Schema
```graphql
schema {
  mutation: UnsyncSpecificTransactionsMutation
}

mutation {
  unsyncSpecificTransactions(transactionIds: [String]): UnsyncSpecificTransactions
}

type UnsyncSpecificTransactions {
  status: String
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| transactionIds | [String] | Array of transaction IDs to unsync |