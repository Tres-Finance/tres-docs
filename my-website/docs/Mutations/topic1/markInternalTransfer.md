# markInternalTransfer

## Description
Marks an internal transfer between two STX IDs.

## GraphQL Schema
```graphql
mutation {
  markInternalTransfer(stxId1: Int!, stxId2: Int!): MarkInternalTransferMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| stxId1 | Int! | First internal transfer ID to mark |
| stxId2 | Int! | Second internal transfer ID to mark |