# setBatchCustomActivity

## Description
Sets custom labels for a batch of activities

## GraphQL Schema
```graphql
schema {
  mutation: SetBatchCustomActivityMutation
}

mutation {
  setBatchCustomActivity(customLabels: [CustomLabelInput]!): SetBatchCustomActivityLabelMutation
}

type SetBatchCustomActivityLabelMutation {
  labels: [CustomActivityLabelQuery]
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| customLabels | [CustomLabelInput]! | Array of custom label inputs |
| identifier | String | Identifier string for the custom label |
| labelValue | String | Value of the custom label |
| platform | Platform | Platform enum value for the custom label |