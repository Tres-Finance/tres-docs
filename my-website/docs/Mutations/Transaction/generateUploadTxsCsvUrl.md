# generateUploadTxsCsvUrl

## Description
Generates a URL for downloading a transaction data CSV file.

## GraphQL Schema
```graphql
schema {
  mutation: GenerateUploadTxsCsvUrlMutation
}

mutation {
  generateUploadTxsCsvUrl: GenerateUploadTXCSVUrlMutation
}

type GenerateUploadTXCSVUrlMutation {
  url: GenericScalar
}

scalar GenericScalar
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| url | GenericScalar | Generated URL for uploading transactions CSV |