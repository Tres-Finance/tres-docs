# erpStatus

## Description
Retrieves ERP status information for a list of transaction IDs.

## GraphQL Schema
```graphql
query {
  erpStatus: ErpStatusQuery
}

type ErpStatusQuery {
  statuses(txIds: [String]!): [ErpStatusResp]
}

type ErpStatusResp {
  txId: Decimal!
  syncId: String
  syncingStatus: String!
  syncingType: String
  syncingErrorType: String
  lastSynced: DateTime
  aparLastSynced: DateTime
  aparSyncingStatus: String
  aparSyncId: String
}

scalar Decimal
scalar DateTime
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| txIds | [String]! | Array of transaction IDs to query status for |