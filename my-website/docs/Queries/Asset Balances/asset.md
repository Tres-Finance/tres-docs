# asset

## Description
Retrieves metadata about a specific asset based on identifier and platform

## GraphQL Schema
```graphql
query {
  asset(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    platform: String
    key: String
    key_In: [String]
    identifier: String
    identifier_In: [String]
    assetClass_VerificationStatus: String
    distinct: Boolean
  ): AssetQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| limit | Int | Maximum number of items to return |
| offset | Int | Number of items to skip |
| ordering | String | Field and direction to order results by |
| before | String | Cursor for pagination - before marker |
| after | String | Cursor for pagination - after marker |
| first | Int | Number of items to return from start |
| last | Int | Number of items to return from end |
| platform | String | Filter by platform |
| key | String | Filter by asset key |
| key_In | [String] | Filter by multiple asset keys |
| identifier | String | Filter by asset identifier |
| identifier_In | [String] | Filter by multiple asset identifiers |
| assetClass_VerificationStatus | String | Filter by asset class verification status |
| distinct | Boolean | Return only distinct results |