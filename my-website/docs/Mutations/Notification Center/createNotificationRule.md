# createNotificationRule

## Description
Creates a notification rule with specified parameters and delivery methods.

## GraphQL Schema
```graphql
schema {
  mutation: CreateNotificationRuleMutation
}

mutation {
  createNotificationRule(
    allEvm: Boolean
    assetClassId: Int
    belongsTo: Int
    bestEffort: Boolean
    createdBy: String
    currency: Currency
    deliveryMethod: [DeliveryMethod]!
    enable: Boolean
    priority: Priority
    rule: Rule
    side: UnderOver
    threshold: Int
    unit: Unit
  ): NotificationRuleMutation
}

type NotificationRuleMutation {
  id: Int
  success: Boolean
}

enum Currency {
  USD
  EUR
  IDR
  CHF
  ILS
  GBP
  TRY
  AUD
  CAD
  JPY
  AED
  NZD
  SEK
  CLP
}

enum DeliveryMethod {
  SLACK
  EMAIL
  TELEGRAM
  DISCORD
}

enum Priority {
  LOW
  MEDIUM
  HIGH
}

enum Rule {
  EXPOSURE_TO_ASSET
  TX_ACTIVITY
  FIRST_TX_WITH_ASSET
  RECONCILIATION
  NET_WORTH
  REALIZED_PNL
  ASSET_CLASS_RATIO_FROM_BALANCE
  REWARD_POSITION
  REWARD_CLAIMED
  REPORT_READY
  SLASHING_MONITORING
  COMMIT_COMPLETED
}

enum UnderOver {
  UNDER
  OVER
}

enum Unit {
  PERCENT
  TOKEN
  FIAT
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| allEvm | Boolean | Flag indicating if rule applies to all EVM chains |
| assetClassId | Int | ID of the asset class |
| belongsTo | Int | ID of the entity this rule belongs to |
| bestEffort | Boolean | Flag for best effort execution |
| createdBy | String | Creator of the notification rule |
| currency | Currency | Currency enum value for the rule |
| deliveryMethod | [DeliveryMethod]! | Required list of delivery methods for notifications |
| enable | Boolean | Flag to enable/disable the rule |
| priority | Priority | Priority level of the notification |
| rule | Rule | Type of notification rule |
| side | UnderOver | Threshold direction (under/over) |
| threshold | Int | Threshold value for the rule |
| unit | Unit | Unit type for the threshold |