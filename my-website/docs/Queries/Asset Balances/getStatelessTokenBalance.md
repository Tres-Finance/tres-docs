# getStatelessTokenBalance

## Description
Retrieves the balance of a stateless token for specified wallets on a given platform.

## GraphQL Schema
```graphql
query {
  getStatelessTokenBalance(walletIdentifiers: [String]!, platform: Platform!, assetIdentifier: String!, timestamp: DateTime, blockNumber: Int, includeSubAccounts: Boolean): [AssetBalanceChildObjectType]
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

enum BalanceState {
  LOCKED
  CLAIMABLE
  UNLOCKING
  LIQUID
  WALLET
  VIRTUAL
  CLAIMED
  WITHDRAWN
  UNDER_DELEGATION
  FAILED
}

enum StatelessBalanceErrorCodes {
  SUCCESS
  BALANCE_NOT_SUPPORTED
  UNKNOWN_ERROR
  ASSET_NOT_FOUND
  INTERNAL_ACCOUNT_NOT_FOUND
  RUNNING_BALANCE_NOT_RECONCILED
}

scalar Decimal

enum StatlessBalanceSource {
  RUNNING_BALNACE
  ONCHAIN
  NONE
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| walletIdentifiers | [String]! | Array of wallet identifiers to query balances for |
| platform | Platform! | Platform to query balances from |
| assetIdentifier | String! | Identifier of the asset to query balance for |
| timestamp | DateTime | Optional timestamp to query balance at |
| blockNumber | Int | Optional block number to query balance at |
| includeSubAccounts | Boolean | Optional flag to include sub-accounts in balance query |