# internalAccount

## Description
Retrieves internal account information based on specified filters and pagination parameters.

## GraphQL Schema
```graphql
query {
  internalAccount(
    currency: String
    balanceType: [String]
    exportName: String
    exportFormat: String
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    name: String
    name_In: [String]
    name_Icontains: String
    identifier: String
    identifier_In: [String]
    identifier_Icontains: String
    id: Float
    id_In: [String]
    parentPlatform: String
    parentPlatform_In: [String]
    platform_In: [String]
    assetClass_In: [String]
    tags_Overlap: [String]
    isSynced: Boolean
    orderByFiatValue: Boolean
  ): InternalAccountQueryNodeConnection
}

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency filter for internal accounts |
| balanceType | [String] | Types of balances to filter by |
| exportName | String | Name for the export file |
| exportFormat | String | Format of the export file |
| limit | Int | Maximum number of records to return |
| offset | Int | Number of records to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| name | String | Filter by internal account name |
| name_In | [String] | Filter by multiple internal account names |
| name_Icontains | String | Filter by partial internal account name match |
| identifier | String | Filter by internal account identifier |
| identifier_In | [String] | Filter by multiple internal account identifiers |
| identifier_Icontains | String | Filter by partial identifier match |
| id | Float | Filter by internal account ID |
| id_In | [String] | Filter by multiple internal account IDs |
| parentPlatform | String | Filter by parent platform |
| parentPlatform_In | [String] | Filter by multiple parent platforms |
| platform_In | [String] | Filter by multiple platforms |
| assetClass_In | [String] | Filter by multiple asset classes |
| tags_Overlap | [String] | Filter by overlapping tags |
| isSynced | Boolean | Filter by sync status |
| orderByFiatValue | Boolean | Order results by fiat value |