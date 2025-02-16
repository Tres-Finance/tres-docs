# updateCostBasisStrategyByDate

## Description
Updates cost basis strategies for different time periods.

## GraphQL Schema
```graphql
schema {
  mutation: UpdateCostBasisStrategyByDateMutation
}

mutation {
  updateCostBasisStrategyByDate(defaultStrategy: CostBasisStackBasedStrategy!, strategyPeriods: [CBStrategyPeriod]!): UpdateCostBasisStrategyByDateMutation
}

enum CostBasisStackBasedStrategy {
  FIFO
  FIFO_IMPAIRMENT
  LIFO
  MAX_GAINS
  MAX_LOSSES
}

input CBStrategyPeriod {
  startDate: DateTime!
  endDate: DateTime!
  strategy: CostBasisStackBasedStrategy!
}

scalar DateTime
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| defaultStrategy | CostBasisStackBasedStrategy! | Default strategy to use for cost basis calculations (FIFO/FIFO_IMPAIRMENT/LIFO/MAX_GAINS/MAX_LOSSES) |
| strategyPeriods | [CBStrategyPeriod]! | List of time periods with specific cost basis strategies |