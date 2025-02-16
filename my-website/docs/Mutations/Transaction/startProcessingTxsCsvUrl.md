# startProcessingTxsCsvUrl

## Description
Starts processing a transactions CSV file from S3.

## GraphQL Schema
```graphql
mutation {
  startProcessingTxsCsvUrl(fileName: String!, s3Key: String!): StartProcessingTXSCSVMutation
}

type StartProcessingTXSCSVMutation {
  ok: GenericScalar
}

scalar GenericScalar
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| fileName | String! | Name of the file to process |
| s3Key | String! | S3 key/path where the file is stored |