# generateUploadFileUrl

## Description
Generates a URL for file upload to a specified bucket.

## GraphQL Schema
```graphql
schema {
  mutation: GenerateUploadFileUrlMutation
}

mutation {
  generateUploadFileUrl(bucket: BucketNames = TRES_UPLOAD_FILES, identifier: String!, key: String!): GenerateUploadFileUrlMutation
}

enum BucketNames {
  TRES_UPLOAD_FILES
  MANUAL_ERP
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| bucket | BucketNames | Storage bucket name (defaults to TRES_UPLOAD_FILES) |
| identifier | String! | Required unique identifier for the file |
| key | String! | Required storage key/path for the file |