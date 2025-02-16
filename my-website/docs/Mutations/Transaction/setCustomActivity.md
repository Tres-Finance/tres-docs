# setCustomActivity

## Description
Sets a custom activity label for a transaction

## GraphQL Schema
```graphql
schema {
  mutation: SetCustomActivityMutation
}

type SetCustomActivityMutation {
  setCustomActivity(identifier: String, labelValue: String, platform: Platform): SetCustomActivityLabelMutation
}

type SetCustomActivityLabelMutation {
  label: CustomActivityLabelQuery
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| identifier | String | Identifier for the custom activity |
| labelValue | String | Value for the custom activity label |
| platform | Platform | Platform enum value for the activity |