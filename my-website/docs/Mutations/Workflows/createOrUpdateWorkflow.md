# createOrUpdateWorkflow

## Description
Creates or updates a workflow with specified details.

## GraphQL Schema
```graphql
schema {
  mutation: CreateOrUpdateWorkflowMutation
}

mutation {
  createOrUpdateWorkflow(action: JSONString, currency: String!, description: String, id: String, name: String!, trigger: JSONString, type: String!): CreateOrUpdateWorkflow
}

type CreateOrUpdateWorkflow {
  status: ID
}

scalar JSONString
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| action | JSONString | JSON string containing workflow action configuration |
| currency | String! | Required currency code for the workflow |
| description | String | Optional description of the workflow |
| id | String | Optional workflow ID for updating existing workflow |
| name | String! | Required name of the workflow |
| trigger | JSONString | JSON string containing workflow trigger configuration |
| type | String! | Required workflow type |