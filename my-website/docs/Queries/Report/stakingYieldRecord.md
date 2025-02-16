# stakingYieldRecord

## Description
Retrieves staking yield records based on specified filters and criteria

## GraphQL Schema
```graphql
query {
  stakingYieldRecord(
    currency: String
    exportName: String
    exportFormat: String
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    asset_Identifier: String
    belongsTo_Identifier_In: [String]
    belongsTo_Identifier: String
    platform_In: [String]
    platform: String
    yieldType_In: [String]
    yieldType: String
    startDate_Lte: Date
    startDate_Gte: Date
    startDate: Date
    endDate_Lte: Date
    endDate_Gte: Date
    endDate: Date
    validatorIdentifier_In: [String]
    validatorIdentifier: String
  ): StakingYieldRecordQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency identifier |
| exportName | String | Name for export |
| exportFormat | String | Format for export |
| limit | Int | Maximum number of records to return |
| offset | Int | Number of records to skip |
| ordering | String | Field to order results by |
| before | String | Cursor for pagination before |
| after | String | Cursor for pagination after |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| asset_Identifier | String | Filter by asset identifier |
| belongsTo_Identifier_In | [String] | Filter by multiple belonging identifiers |
| belongsTo_Identifier | String | Filter by single belonging identifier |
| platform_In | [String] | Filter by multiple platforms |
| platform | String | Filter by single platform |
| yieldType_In | [String] | Filter by multiple yield types |
| yieldType | String | Filter by single yield type |
| startDate_Lte | Date | Filter by start date less than or equal |
| startDate_Gte | Date | Filter by start date greater than or equal |
| startDate | Date | Filter by exact start date |
| endDate_Lte | Date | Filter by end date less than or equal |
| endDate_Gte | Date | Filter by end date greater than or equal |
| endDate | Date | Filter by exact end date |
| validatorIdentifier_In | [String] | Filter by multiple validator identifiers |
| validatorIdentifier | String | Filter by single validator identifier |