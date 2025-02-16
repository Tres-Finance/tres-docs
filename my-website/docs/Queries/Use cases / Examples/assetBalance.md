# assetBalance

## Description
Retrieves asset balances with optional filtering by currency, date, account, state and other criteria.

## GraphQL Schema
```graphql
query {
  assetBalance(
    currency: String
    dt: DateTime
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    id: Float
    id_In: [String]
    belongsTo_Id: Float
    belongsTo_Id_In: [String]
    asset_Platform: String
    asset_Platform_In: [String]
    belongsTo_Identifier: String
    belongsTo_Identifier_In: [String]
    asset_Type: String
    asset_Type_In: [String]
    asset_Name_Icontains: String
    parentBalance_Isnull: Boolean
    asset_AssetClass_Id: Float
    asset_AssetClass_Id_In: [String]
    state: String
    state_In: [String]
    status: String
    groupTime: DateTime
    groupTime_In: [DateTime]
    groupTime_Gte: DateTime
    groupTime_Lte: DateTime
    groupId: UUID
    groupId_In: [UUID]
    onlyUnderDelegation: Boolean
    excludeUnderDelegation: Boolean
    includeNonReady: Boolean
    parentBalance_Position_Application: String
    tags_Overlap: [String]
    includeArchived: Boolean
  ): AssetBalanceQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency filter for asset balance |
| dt | DateTime | Date/time filter |
| limit | Int | Maximum number of items to return |
| offset | Int | Number of items to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of items to return from start |
| last | Int | Number of items to return from end |
| id | Float | Filter by specific ID |
| id_In | [String] | Filter by multiple IDs |
| belongsTo_Id | Float | Filter by owner ID |
| belongsTo_Id_In | [String] | Filter by multiple owner IDs |
| asset_Platform | String | Filter by asset platform |
| asset_Platform_In | [String] | Filter by multiple asset platforms |
| belongsTo_Identifier | String | Filter by owner identifier |
| belongsTo_Identifier_In | [String] | Filter by multiple owner identifiers |
| asset_Type | String | Filter by asset type |
| asset_Type_In | [String] | Filter by multiple asset types |
| asset_Name_Icontains | String | Filter by partial asset name match |
| parentBalance_Isnull | Boolean | Filter for null parent balances |
| asset_AssetClass_Id | Float | Filter by asset class ID |
| asset_AssetClass_Id_In | [String] | Filter by multiple asset class IDs |
| state | String | Filter by balance state |
| state_In | [String] | Filter by multiple balance states |
| status | String | Filter by status |
| groupTime | DateTime | Filter by group time |
| groupTime_In | [DateTime] | Filter by multiple group times |
| groupTime_Gte | DateTime | Filter by group time greater than or equal |
| groupTime_Lte | DateTime | Filter by group time less than or equal |
| groupId | UUID | Filter by group ID |
| groupId_In | [UUID] | Filter by multiple group IDs |
| onlyUnderDelegation | Boolean | Filter for delegated balances only |
| excludeUnderDelegation | Boolean | Exclude delegated balances |
| includeNonReady | Boolean | Include non-ready balances |
| parentBalance_Position_Application | String | Filter by parent balance position application |
| tags_Overlap | [String] | Filter by overlapping tags |
| includeArchived | Boolean | Include archived balances |