# undoIgnoreTransaction

## Description
Undoes the ignored status of specified transactions

## GraphQL Schema
```graphql
schema {
  mutation: UndoIgnoreTransactionMutation
}

mutation {
  undoIgnoreTransaction(transactionIds: [String]): UndoIgnoreTransaction
}

type UndoIgnoreTransaction {
  status: String
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| transactionIds | [String] | Array of transaction IDs to undo ignore status for |