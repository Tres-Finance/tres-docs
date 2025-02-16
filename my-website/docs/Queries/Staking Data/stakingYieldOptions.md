# stakingYieldOptions

## Description
Retrieves staking yield options across various platforms and assets.

## GraphQL Schema
```graphql
query {
  stakingYieldOptions(resolveStatus: Boolean = false): [StakingYieldOptionObjectType]
}

type StakingYieldOptionObjectType {
  platform: Platform!
  assetOptions: [StakingDataAssetOptionObjectType]!
  yieldType: StakingYieldType!
}

enum Platform {
  EOS
  VANAR
  ONTOLOGY
  POLKADOT
  # ... [other platform values]
}

type StakingDataAssetOptionObjectType {
  asset: AssetSchemaObjectType!
  internalAccountOptions: [StakingYieldAccountOptionObjectType]!
}

type AssetSchemaObjectType {
  key: String
  identifier: String!
  symbol: String!
  name: String!
}

type StakingYieldAccountOptionObjectType {
  internalAccount: InternalAccountSchemaObjectType!
  earliest: Date!
  latest: Date!
  status: StakingYieldStatus
}

type InternalAccountSchemaObjectType {
  id: Int
  identifier: String!
  name: String!
}

scalar Date

enum StakingYieldStatus {
  COMPLETED
  IN_PROGRESS
  FAILED
}

enum StakingYieldType {
  DELEGATION_POOL_REWARD
  STAKE_POOL_REWARD
  REWARD
  COMMISSION
  BLOCK_REWARD
  CONSENSUS_REWARD
  MEV_REWARD
  EXECUTION_LAYER_REWARD
  STAKE_ACCOUNT_REWARD
  JITO_TIP
  AUDIUS_STAKING_REWARD
  PAYOUT
  EIGENLAYER_REWARD
  EIGENLAYER_OPERATOR_REWARD
  LIVEPEER_REWARD
  THRESHOLD_REWARD
  POLYGON_FASTLANE_COMMISSION
  INDEXER_REWARD
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| resolveStatus | Boolean | Flag to determine resolution status (default: false) |