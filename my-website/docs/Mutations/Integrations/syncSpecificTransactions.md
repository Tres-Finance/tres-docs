# syncSpecificTransactions

## Description
Synchronizes specific transactions by their IDs

## GraphQL Schema
```graphql
schema {
  mutation: SyncSpecificTransactionsMutation
}

mutation {
  syncSpecificTransactions(entitySourceType: String = "transaction", transactionIds: [String]): SyncSpecificTransactions
}

type SyncSpecificTransactions {
  status: String
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| entitySourceType | String | Type of entity source (default: "transaction") |
| transactionIds | [String] | Array of transaction IDs to sync |