# subTransaction

## Description
Retrieves detailed information about a sub-transaction with filtering and pagination options

## GraphQL Schema
```graphql
query {
  subTransaction(
    currency: String
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    asset_AssetClass_In: [ID]
    senderId_In: [ID]
    recipientId_In: [ID]
    recipient_Identifier_In: [String]
    sender_Identifier_In: [String]
    belongsTo_In: [ID]
    fiatValues_Isnull: Boolean
    id: Float
    id_In: [String]
    tx_DecodedFunctionName: String
    tx_DecodedFunctionName_In: [String]
    tx_Classification_MethodId: String
    tx_Classification_MethodId_In: [String]
    tx_Classification_Action: String
    tx_Classification_Action_In: [String]
    tx_Classification_Activity: String
    tx_Classification_Activity_In: [String]
    platform: String
    platform_In: [String]
    tx_Identifier: String
    tx_Identifier_In: [String]
    tx_Id: String
    tx_Id_In: [Float]
    tx_Timestamp_Gt: DateTime
    tx_Timestamp_Lt: DateTime
    tx_MethodId: String
    tx_BlockNumber: Int
    tx_BlockNumber_Lte: Int
    tx_BlockNumber_Gte: Int
    timestamp_Gt: DateTime
    timestamp_Lt: DateTime
    createdAt_Gt: DateTime
    createdAt_Lt: DateTime
    updatedAt_Gt: DateTime
    updatedAt_Lt: DateTime
    balanceFactor: Float
    asset_Identifier: String
    asset_Identifier_In: [String]
    asset_Symbol_Icontains: String
    tags_Overlap: [String]
    includeCbIssue: Boolean
    belongsTo_Identifier_In: [String]
    belongsTo_Name_In: [String]
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    results {
      id
      createdAt
      updatedAt
      # ... other fields
    }
    totalCount
  }
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency filter for transactions |
| limit | Int | Maximum number of transactions to return |
| offset | Int | Number of transactions to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| asset_AssetClass_In | [ID] | Filter by asset class IDs |
| senderId_In | [ID] | Filter by sender IDs |
| recipientId_In | [ID] | Filter by recipient IDs |
| recipient_Identifier_In | [String] | Filter by recipient identifiers |
| sender_Identifier_In | [String] | Filter by sender identifiers |
| belongsTo_In | [ID] | Filter by belonging account IDs |
| fiatValues_Isnull | Boolean | Filter transactions with null fiat values |
| id | Float | Filter by specific transaction ID |
| id_In | [String] | Filter by multiple transaction IDs |
| tx_DecodedFunctionName | String | Filter by decoded function name |
| tx_DecodedFunctionName_In | [String] | Filter by multiple decoded function names |
| tx_Classification_MethodId | String | Filter by transaction method ID |
| tx_Classification_MethodId_In | [String] | Filter by multiple method IDs |
| tx_Classification_Action | String | Filter by transaction action |
| tx_Classification_Action_In | [String] | Filter by multiple actions |
| tx_Classification_Activity | String | Filter by transaction activity |
| tx_Classification_Activity_In | [String] | Filter by multiple activities |
| platform | String | Filter by platform |
| platform_In | [String] | Filter by multiple platforms |
| tx_Identifier | String | Filter by transaction identifier |
| tx_Identifier_In | [String] | Filter by multiple transaction identifiers |
| tx_Id | String | Filter by transaction ID |
| tx_Id_In | [Float] | Filter by multiple transaction IDs |
| tx_Timestamp_Gt | DateTime | Filter transactions after timestamp |
| tx_Timestamp_Lt | DateTime | Filter transactions before timestamp |
| tx_MethodId | String | Filter by method ID |
| tx_BlockNumber | Int | Filter by block number |
| tx_BlockNumber_Lte | Int | Filter by block number less than or equal |
| tx_BlockNumber_Gte | Int | Filter by block number greater than or equal |
| timestamp_Gt | DateTime | Filter by timestamp after |
| timestamp_Lt | DateTime | Filter by timestamp before |
| createdAt_Gt | DateTime | Filter by creation date after |
| createdAt_Lt | DateTime | Filter by creation date before |
| updatedAt_Gt | DateTime | Filter by update date after |
| updatedAt_Lt | DateTime | Filter by update date before |
| balanceFactor | Float | Filter by balance factor |
| asset_Identifier | String | Filter by asset identifier |
| asset_Identifier_In | [String] | Filter by multiple asset identifiers |
| asset_Symbol_Icontains | String | Filter by asset symbol (case-insensitive) |
| tags_Overlap | [String] | Filter by overlapping tags |
| includeCbIssue | Boolean | Include cost basis issues |
| belongsTo_Identifier_In | [String] | Filter by belonging account identifiers |
| belongsTo_Name_In | [String] | Filter by belonging account names |