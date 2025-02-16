# Report Query

## Description
Retrieves report data with optional filtering and pagination options

## GraphQL Schema
```graphql
query {
  report(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    id: Float
    id_In: [String]
    id_Icontains: Float
    name: String
    name_In: [String]
    name_Icontains: String
    reportType: String
    reportType_In: [String]
    reportType_Icontains: String
    status: String
    status_In: [String]
    status_Icontains: String
    createdAt: DateTime
    createdAt_Lt: DateTime
    createdAt_Gt: DateTime
    createdAt_Lte: DateTime
    createdAt_Gte: DateTime
    createdAt_Icontains: DateTime
    exportFormat: String
    exportFormat_In: [String]
    exportFormat_Icontains: String
    currency: String
    currency_In: [String]
    currency_Icontains: String
  ) {
    pageInfo {
      hasNextPage
      hasPreviousPage
    }
    results {
      id
      name
      status
      createdAt
      reportType
      link
      exportFormat
      outputFormat
      currency
      timestamp
      variables
      progress
    }
    totalCount
  }
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| limit | Int | Maximum number of items to return |
| offset | Int | Number of items to skip |
| ordering | String | Field and direction to order results by |
| before | String | Cursor for reverse pagination |
| after | String | Cursor for forward pagination |
| first | Int | Number of items to return from start |
| last | Int | Number of items to return from end |
| id | Float | Filter by exact ID match |
| id_In | [String] | Filter by IDs in provided list |
| id_Icontains | Float | Filter by ID containing value |
| name | String | Filter by exact name match |
| name_In | [String] | Filter by names in provided list |
| name_Icontains | String | Filter by name containing value |
| reportType | String | Filter by exact report type |
| reportType_In | [String] | Filter by report types in provided list |
| reportType_Icontains | String | Filter by report type containing value |
| status | String | Filter by exact status |
| status_In | [String] | Filter by statuses in provided list |
| status_Icontains | String | Filter by status containing value |
| createdAt | DateTime | Filter by exact creation date |
| createdAt_Lt | DateTime | Filter by creation date less than value |
| createdAt_Gt | DateTime | Filter by creation date greater than value |
| createdAt_Lte | DateTime | Filter by creation date less than or equal to value |
| createdAt_Gte | DateTime | Filter by creation date greater than or equal to value |
| createdAt_Icontains | DateTime | Filter by creation date containing value |
| exportFormat | String | Filter by exact export format |
| exportFormat_In | [String] | Filter by export formats in provided list |
| exportFormat_Icontains | String | Filter by export format containing value |
| currency | String | Filter by exact currency |
| currency_In | [String] | Filter by currencies in provided list |
| currency_Icontains | String | Filter by currency containing value |