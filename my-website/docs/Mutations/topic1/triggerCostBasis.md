# triggerCostBasis

## Description
Triggers cost basis calculation for specified asset classes.

## GraphQL Schema
```graphql
mutation {
  triggerCostBasis(assetClassIds: [Int]): TriggerCostBasisMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| assetClassIds | [Int] | Array of asset class IDs to trigger cost basis calculation for |