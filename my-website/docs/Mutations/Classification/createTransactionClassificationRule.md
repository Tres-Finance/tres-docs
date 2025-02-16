# createTransactionClassificationRule

## Description
Creates a new transaction classification rule with specified criteria.

## GraphQL Schema
```graphql
schema {
  mutation: CreateTransactionClassificationRuleMutation
}

mutation {
  createTransactionClassificationRule(
    activity: String!
    methodId: String
    parentPlatform: ParentPlatform
    recipientContactTag: String
    recipientIdentifier: String
    recipientInternalAccountTag: String
    senderContactTag: String
    senderIdentifier: String
    senderInternalAccountTag: String
  ): CreateTransactionClassificationRuleMutation
}

enum ParentPlatform {
  EOS
  ONTOLOGY
  SUBSTRATE
  KASPA
  FILECOIN
  BITGO
  ETHEREUM
  BITCOIN
  SOLANA
  BINANCE_EXCHANGE
  BINANCE_EXCHANGE_TR
  KRAKEN
  COINBASE_PRIME
  COINBASE
  COINBASE_COMMERCE
  ETHEREUM2
  COSMOS
  KUCOIN
  FALCONX
  AKASH
  ALGORAND
  MINA
  GEMINI
  NOBLE
  FTX
  FTXUS
  COINBASE_EXCHANGE
  MOONBEAM
  ACALA
  CARDANO
  AGORIC
  CASPER
  BAND
  EMONEY
  SECRET
  SENTINEL
  KAVA
  SEI
  PERSISTENCE
  OSMOSIS
  PROVENANCE
  INJECTIVE
  JUNO
  GRAVITY
  CHIHUAHUA
  STARGAZE
  COMDEX
  UMEE
  AXELAR
  EVMOS
  IRISNET
  CRESCENT
  TGRADE
  SOMMELIER
  NEAR
  NYM
  ASSET_MANTLE
  BITCANNA
  CANTO
  CRYPTOCOM
  DESMOS
  KICHAIN
  LUM
  OMNIFLIX
  REGEN
  SIFCHAIN
  LIKECOIN
  SHENTU
  AVALANCHE_P_CHAIN
  AVALANCHE_X_CHAIN
  BNB
  FETCHAI
  STRIDE
  TERRA2
  TERRA
  STACKS
  RADIX
  RADIX_BABYLON
  STARKNET
  BITFINEX
  MIXNET
  PAXFUL
  APTOS
  LUKKA
  MANUAL
  IMMUTABLEX
  FLOW
  BTCTURK
  SUI
  ASCENDEX
  DERIBIT
  DOGECOIN
  LITECOIN
  OKX
  TEZOS
  INTERNET_COMPUTER
  TRON
  CHASE
  BANK_OF_AMERICA
  BREX
  CUSTOMERS_BANK
  MERCURY
  QONTO
  BANQUE_POPULAIRE_RIVES_DE_PARIS
  REVOLUT_FR
  REVOLUT_UK
  SVB_ONLINE
  KUJIRA
  NEUTRON
  QUASAR
  QUICKSILVER
  ARCHWAY
  POCKET
  HUOBI
  BITCOIN_CASH
  DYDX
  COPPER
  GATEIO
  CELESTIA
  HEDERA
  KYVE
  BITSONG
  CHAINFLIP
  MULTIVERSX
  OASIS
  CONCORDIUM
  BITCOIN_SV
  CHECKOUT
  VERTEX
  MARS
  CHEQD
  QREDO
  RIPPLE
  HAQQ
  ZETACHAIN
  COREUM
  SAGA
  PASSAGE
  XION
  ONOMY
  STELLAR
  TON
  BYBIT
  VEGA
  COBO
  ARWEAVE
  BTC_MARKETS
  NERVOS
  FIREBLOCKS
  KADENA
  BITSTAMP
  ALEO
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| activity | String! | Required activity identifier |
| methodId | String | Method identifier for the classification rule |
| parentPlatform | ParentPlatform | Platform enum value for parent platform |
| recipientContactTag | String | Tag for recipient contact |
| recipientIdentifier | String | Identifier for the recipient |
| recipientInternalAccountTag | String | Internal account tag for recipient |
| senderContactTag | String | Tag for sender contact |
| senderIdentifier | String | Identifier for the sender |
| senderInternalAccountTag | String | Internal account tag for sender |