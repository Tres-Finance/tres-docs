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

enum Platform {
  EOS
  VANAR
  ONTOLOGY
  POLKADOT
  KUSAMA
  ACALA
  # ... [other platform values]
}

enum PositionType {
  STAKING
  DELEGATED_TO_ACCOUNT
  LP
  LENDING
  BORROWING
  VESTING
  AIRDROP
}

type AssetBalanceChildObjectType {
  assetIdentifier: String!
  walletIdentifier: String!
  state: BalanceState!
  errorCode: StatelessBalanceErrorCodes!
  originalAmount: Decimal
  amount: Decimal
  symbol: String
  balanceSource: StatlessBalanceSource!
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| walletIdentifiers | [String]! | Array of wallet identifiers to query |
| platform | Platform! | Platform enum value to specify the blockchain platform |
| timestamp | DateTime | Optional timestamp for the query |
| application | String | Optional application identifier |
| blockNumber | Int | Optional block number to query at specific blockchain height |