# getStatelessWalletsPositions

## Description
Retrieves positions of stateless wallets across various platforms.

## GraphQL Schema
```graphql
query {
  getStatelessWalletsPositions(walletIdentifiers: [String]!, platform: Platform!, timestamp: DateTime, application: String, blockNumber: Int): [PositionObjectType]
}

type PositionObjectType {
  walletIdentifier: String!
  displayName: String!
  platform: Platform!
  positionType: PositionType
  blockNumber: Int
  blockHeight: Int
  children: [AssetBalanceChildObjectType]!
  extras: ExtraPositionDataObjectType
  id: String!
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| walletIdentifiers | [String]! | Array of wallet identifiers to query positions for |
| platform | Platform! | Platform to query positions from |
| timestamp | DateTime | Optional timestamp to query positions at |
| application | String | Optional application filter |
| blockNumber | Int | Optional block number to query positions at |

## Return Fields
| Name | Type | Descriptionn                                     |
|------|------|--------------------------------------------------|
| walletIdentifier | String! | Identifier of the wallet                         |
| displayName | String! | Display name of the position                     |
| platform | Platform! | Platform where the position exists               |
| positionType | PositionType | Type of position (staking/LP/etc)                |
| blockNumber | Int | Block number of the position                     |
| blockHeight | Int | Height of the block                              |
| children | [AssetBalanceChildObjectType]! | Array of asset balances associated with position |
| extras | ExtraPositionDataObjectType | Additional position data                         |
| id | String! | Unique identifier of the position                |