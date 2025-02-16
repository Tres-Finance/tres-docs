# setCustomAccountName

## Description
Sets a custom name for an account

## GraphQL Schema
```graphql
schema {
  mutation: SetCustomAccountNameMutation
}

type SetCustomAccountNameMutation {
  setCustomAccountName(identifier: String, labelValue: String, platform: Platform): SetCustomAccountNameLabelMutation
}

type SetCustomAccountNameLabelMutation {
  accountTxsSummary: AccountTxsSummaryQuery
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| identifier | String | The identifier for the account |
| labelValue | String | The custom label value to set |
| platform | Platform | The platform enum value |