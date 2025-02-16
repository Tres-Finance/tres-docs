# Position Query

## Description
Retrieves a paginated list of positions with optional filtering by currency, balance, type and asset class

## GraphQL Schema
```graphql
query {
  position(
    currency: String
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    currentBalance_BelongsTo_In: [ID]
    currentBalance_BelongsTo_Identifier: String
    type: String
    assetClass_In: [String]
    excludeUnderDelegation: Boolean
  ): PositionQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency filter for positions |
| limit | Int | Maximum number of positions to return |
| offset | Int | Number of positions to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| currentBalance_BelongsTo_In | [ID] | Filter by multiple balance owners |
| currentBalance_BelongsTo_Identifier | String | Filter by balance owner identifier |
| type | String | Filter by position type |
| assetClass_In | [String] | Filter by multiple asset classes |
| excludeUnderDelegation | Boolean | Exclude positions under delegation |