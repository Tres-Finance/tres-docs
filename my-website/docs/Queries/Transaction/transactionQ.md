---
sidebar_label: 'transaction'
sidebar_position: 1
---
# Transaction

## Description
Retrieves transaction data with detailed filtering options and returns transaction information including assets, comments, and related financial details.

## GraphQL Schema
```graphql
query {
  transaction(
    exportName: String
    exportFormat: String
    outputFormat: String
    isPending: Boolean
    currency: String
    applyFilterToChildren: Boolean
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    children_SenderId_In: [ID]
    children_RecipientId_In: [ID]
    children_Recipient_Identifier_In: [String]
    children_Sender_Identifier_In: [String]
    children_OriginalRecipient_Identifier_In: [String]
    children_OriginalSender_Identifier_In: [String]
    children_BelongsTo_Identifier_In: [String]
    decodedFunctionName: String
    decodedFunctionName_In: [String]
    classification_MethodId: String
    classification_MethodId_In: [String]
    classification_Action: String
    classification_Action_In: [String]
    classification_Activity: String
    platform: String
    platform_In: [String]
    success: Boolean
    success_In: [Boolean]
    identifier: String
    identifier_In: [String]
    identifier_Contains: String
    blockNumber: Int
    blockNumber_Lte: Int
    blockNumber_Gte: Int
    children_Asset_Symbol_Icontains: String
    methodId: String
    methodId_In: [String]
    methodId_Contains: String
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    results {
      id
      timestamp
      identifier
      blockNumber
      success
      methodId
      decodedFunctionName
      platform
      children {
        id
        amount
        asset {
          symbol
          identifier
        }
      }
    }
    totalCount
  }
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| exportName | String | Name of the export |
| exportFormat | String | Format of the export |
| outputFormat | String | Format of the output |
| isPending | Boolean | Filter for pending transactions |
| currency | String | Currency filter |
| applyFilterToChildren | Boolean | Apply filters to child transactions |
| limit | Int | Maximum number of transactions to return |
| offset | Int | Number of transactions to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| children_SenderId_In | [ID] | Filter by sender IDs |
| children_RecipientId_In | [ID] | Filter by recipient IDs |
| children_Recipient_Identifier_In | [String] | Filter by recipient identifiers |
| children_Sender_Identifier_In | [String] | Filter by sender identifiers |
| children_OriginalRecipient_Identifier_In | [String] | Filter by original recipient identifiers |
| children_OriginalSender_Identifier_In | [String] | Filter by original sender identifiers |
| children_BelongsTo_Identifier_In | [String] | Filter by belonging identifiers |
| decodedFunctionName | String | Filter by decoded function name |
| decodedFunctionName_In | [String] | Filter by multiple decoded function names |
| classification_MethodId | String | Filter by classification method ID |
| classification_MethodId_In | [String] | Filter by multiple classification method IDs |
| classification_Action | String | Filter by classification action |
| classification_Action_In | [String] | Filter by multiple classification actions |
| classification_Activity | String | Filter by classification activity |
| platform | String | Filter by platform |
| platform_In | [String] | Filter by multiple platforms |
| success | Boolean | Filter by transaction success status |
| success_In | [Boolean] | Filter by multiple success statuses |
| identifier | String | Filter by transaction identifier |
| identifier_In | [String] | Filter by multiple identifiers |
| identifier_Contains | String | Filter by partial identifier match |
| blockNumber | Int | Filter by block number |
| blockNumber_Lte | Int | Filter by block number less than or equal |
| blockNumber_Gte | Int | Filter by block number greater than or equal |
| children_Asset_Symbol_Icontains | String | Filter by partial asset symbol match |
| methodId | String | Filter by method ID |
| methodId_In | [String] | Filter by multiple method IDs |
| methodId_Contains | String | Filter by partial method ID match |