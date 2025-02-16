# createOrUpdateManualSubTransaction

## Description
Creates or updates a manual subtransaction with specified amount, asset, and transaction details

## GraphQL Schema
```graphql
mutation createOrUpdateManualSubTransaction(
  $amount: Decimal!
  $assetId: ID!
  $belongsToId: ID!
  $direction: Direction
  $fiatCurrency: Currency
  $fiatValue: Decimal
  $financialAction: FinancialAction
  $platform: Platform
  $thirdPartyIdentifier: String!
  $transactionId: ID!
  $typeId: ID!
) {
  createOrUpdateManualSubTransaction(
    amount: $amount
    assetId: $assetId
    belongsToId: $belongsToId
    direction: $direction
    fiatCurrency: $fiatCurrency
    fiatValue: $fiatValue
    financialAction: $financialAction
    platform: $platform
    thirdPartyIdentifier: $thirdPartyIdentifier
    transactionId: $transactionId
    typeId: $typeId
  ) {
    subTransaction {
      id
      amount
      asset {
        symbol
        identifier
      }
      tx {
        identifier
      }
    }
  }
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| amount | Decimal! | Required amount for the transaction |
| assetId | ID! | Required ID of the asset |
| belongsToId | ID! | Required ID of the account the transaction belongs to |
| direction | Direction | Direction of the transaction (INFLOW/OUTFLOW) |
| fiatCurrency | Currency | Currency type for fiat value |
| fiatValue | Decimal | Value in fiat currency |
| financialAction | FinancialAction | Type of financial action |
| platform | Platform | Platform where transaction occurs |
| thirdPartyIdentifier | String! | Required identifier from third party |
| transactionId | ID! | Required ID of the parent transaction |
| typeId | ID! | Required ID of the transaction type |