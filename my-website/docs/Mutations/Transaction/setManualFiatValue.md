# setManualFiatValue

## Description
Sets a manual fiat value for a specific item.

## GraphQL Schema
```graphql
schema {
  mutation: SetManualFiatValueMutation
}

mutation {
  setManualFiatValue(currency: String = "usd", id: String, newFiatValue: String): SetManualFiatValueMutation
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| currency | String | Currency code (defaults to "usd") |
| id | String | Identifier for the value to update |
| newFiatValue | String | New fiat value to set |