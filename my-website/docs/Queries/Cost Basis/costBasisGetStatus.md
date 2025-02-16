# costBasisGetStatus

## Description
Gets the current status of a cost basis calculation.

## GraphQL Schema
```graphql
query {
  costBasisGetStatus: CostBasisGetStatusQuery
}

type CostBasisGetStatusQuery {
  status: CostBasisStatusResult
}

enum CostBasisStatusResult {
  DONE
  IN_PROGRESS
  ITEM_NOT_FOUND
}
```

## Arguments
This query does not accept any arguments.
