# accountTxsSummary

## Description
Retrieves a summary of account transactions with filtering and pagination options.

## GraphQL Schema
```graphql
query {
  accountTxsSummary(
    limit: Int
    offset: Int
    ordering: String
    before: String
    after: String
    first: Int
    last: Int
    fiatCurrency: String
    fiatCurrency_In: [String]
    excludeInternalAccounts: Boolean
    accountDirection: String
    identificationState: String
    search: String
  ): AccountTxsSummaryQueryNodeConnection
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| limit | Int | Maximum number of items to return |
| offset | Int | Number of items to skip |
| ordering | String | Field and direction to order results by |
| before | String | Cursor for pagination - before |
| after | String | Cursor for pagination - after |
| first | Int | Number of records to return from start |
| last | Int | Number of records to return from end |
| fiatCurrency | String | Fiat currency to use for calculations |
| fiatCurrency_In | [String] | List of fiat currencies to filter by |
| excludeInternalAccounts | Boolean | Whether to exclude internal accounts |
| accountDirection | String | Direction of account transactions |
| identificationState | String | State of identification |
| search | String | Search term to filter results |