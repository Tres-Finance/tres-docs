# createOrUpdateManualTransaction

## Description
Creates or updates a manual transaction with specified identifier, platform, and timestamp

## GraphQL Schema
```graphql
schema {
  mutation: CreateOrUpdateManualTransactionMutation
}

mutation createOrUpdateManualTransaction($identifier: String!, $platform: Platform, $timestamp: DateTime!, $transactionId: ID) {
  createOrUpdateManualTransaction(identifier: $identifier, platform: $platform, timestamp: $timestamp, transactionId: $transactionId) {
    transaction {
      id
      identifier
      timestamp
      platform
    }
  }
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| identifier | String! | Required identifier string |
| platform | Platform | Platform enumeration value |
| timestamp | DateTime! | Required timestamp |
| transactionId | ID | Optional transaction ID |