# markInternalTransfer

## Description
Marks an internal transfer between two STX IDs.

## GraphQL Schema
```graphql
schema {
  mutation: MarkInternalTransferMutation
}

mutation {
  markInternalTransfer(stxId1: Int!, stxId2: Int!): MarkInternalTransferMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| stxId1 | Int! | First internal transfer ID |
| stxId2 | Int! | Second internal transfer ID |

## Return Fields
| Name | Type | Description |
|------|------|-------------|
| markInternalTransfer | MarkInternalTransferMutation | Result of marking internal transfer |