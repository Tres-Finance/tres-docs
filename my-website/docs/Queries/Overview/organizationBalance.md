# organizationBalance

## Description
Retrieves organization balance information with filtering options for currency, date, and asset classes.

## GraphQL Schema
```graphql
query {
  organizationBalance(
    dt: DateTime
    currency: String
    balanceDate: DateTime
    exportName: String
    exportFormat: String
    applyFilterToChildren: Boolean
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    id: Float
    id_In: [String]
    assetClass_Assets_Platform: String
    assetClass_Assets_Platform_In: [String]
    calculatedAssetBalances_Asset_Platform: String
    assetClass_Assets_Type: String
    assetClass_Assets_Type_In: [String]
    assetClass_Assets_Identifier_Icontains: String
    assetClass_In: [ID]
    assetClass: ID
    assetClass_Assets_Name: String
    assetClass_Assets_Name_In: [String]
    assetClass_Assets_Name_Icontains: String
    state: String
    state_In: [String]
    position: ID
    position_In: [ID]
    position_Isnull: Boolean
    position_Type: String
    position_Type_In: [String]
    name_Icontains: String
    haveValue: Boolean
    showZeros: Boolean
    costBasisEligible: Boolean
    internalAccountIds: [String]
    balanceName: String
    excludeUnderDelegation: Boolean
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    results {
      id
      amount
      calculatedBalance
      state
      name
      status
      fiatValue {
        value
        fiatCurrency
      }
    }
    totalCount
  }
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| dt | DateTime | Date and time filter |
| currency | String | Currency code |
| balanceDate | DateTime | Balance date filter |
| exportName | String | Name for export file |
| exportFormat | String | Format for export |
| applyFilterToChildren | Boolean | Whether to apply filters to child records |
| limit | Int | Maximum number of records to return |
| offset | Int | Number of records to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination (before) |
| after | String | Cursor for pagination (after) |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| id | Float | ID filter |
| id_In | [String] | List of IDs to filter by |
| assetClass_Assets_Platform | String | Platform filter for asset class assets |
| assetClass_Assets_Platform_In | [String] | List of platforms to filter asset class assets |
| calculatedAssetBalances_Asset_Platform | String | Platform filter for calculated asset balances |
| assetClass_Assets_Type | String | Asset type filter |
| assetClass_Assets_Type_In | [String] | List of asset types to filter by |
| assetClass_Assets_Identifier_Icontains | String | Asset identifier contains filter |
| assetClass_In | [ID] | List of asset class IDs to filter by |
| assetClass | ID | Asset class ID filter |
| assetClass_Assets_Name | String | Asset name filter |
| assetClass_Assets_Name_In | [String] | List of asset names to filter by |
| assetClass_Assets_Name_Icontains | String | Asset name contains filter |
| state | String | Balance state filter |
| state_In | [String] | List of states to filter by |
| position | ID | Position ID filter |
| position_In | [ID] | List of position IDs to filter by |
| position_Isnull | Boolean | Filter for null positions |
| position_Type | String | Position type filter |
| position_Type_In | [String] | List of position types to filter by |
| name_Icontains | String | Name contains filter |
| haveValue | Boolean | Filter for records with value |
| showZeros | Boolean | Include zero balances |
| costBasisEligible | Boolean | Filter for cost basis eligible records |
| internalAccountIds | [String] | List of internal account IDs |
| balanceName | String | Balance name filter |
| excludeUnderDelegation | Boolean | Exclude under delegation records |