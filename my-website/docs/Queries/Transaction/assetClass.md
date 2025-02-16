# assetClass

## Description
Retrieves a paginated list of asset classes with optional filtering by currency, name, verification status, and asset type.

## GraphQL Schema
```graphql
query {
  assetClass(
    currency: String
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    name: String
    name_In: [String]
    verificationStatus: String
    assetType: String
    showRelated: Boolean
  ): AssetClassQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency filter for asset class |
| limit | Int | Maximum number of items to return |
| offset | Int | Number of items to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of items to return from start |
| last | Int | Number of items to return from end |
| name | String | Filter by asset class name |
| name_In | [String] | Filter by multiple asset class names |
| verificationStatus | String | Filter by verification status |
| assetType | String | Filter by asset type |
| showRelated | Boolean | Include related asset classes |