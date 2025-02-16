# createManualErp

## Description
Creates a manual ERP entry using a CSV file, currency, and integration name.

## GraphQL Schema
```graphql
schema {
  mutation: CreateManualErpMutation
}

mutation {
  createManualErp(csvS3Key: String!, currency: Currency!, integrationName: String!): CreateManualErpMutation
}

enum Currency {
  USD
  EUR
  IDR
  CHF
  ILS
  GBP
  TRY
  AUD
  CAD
  JPY
  AED
  NZD
  SEK
  CLP
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| csvS3Key | String! | S3 key for the CSV file |
| currency | Currency! | Currency enum value for the transaction |
| integrationName | String! | Name of the integration |