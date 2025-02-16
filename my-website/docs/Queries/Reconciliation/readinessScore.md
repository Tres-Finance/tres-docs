# readinessScore

## Description
Retrieves the readiness score for an organization

## GraphQL Schema
```graphql
query {
  readinessScore: ReadinessScoreQuery
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
| status | String | Filter by status |
| source | String | Filter by source |
| organization | ID | Filter by organization ID |