# setBatchManualFiatValue

## Description
Sets manual fiat values for multiple items in a batch.

## GraphQL Schema
```graphql
schema {
  mutation: SetBatchManualFiatValueMutation
}

mutation {
  setBatchManualFiatValue(currency: String = "usd", ids: [String], newUnitValue: Float): SetBatchManualFiatValueMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency code for fiat value (default: "usd") |
| ids | [String] | Array of string identifiers |
| newUnitValue | Float | New unit value to set for the batch |