# notificationsRuleTemplate

## Description
Retrieves notification rule templates with their field configurations.

## GraphQL Schema
```graphql
query {
  notificationsRuleTemplate: [NotificationRuleTemplateQuery]
}

type NotificationRuleTemplateQuery {
  name: Rule!
  requiredFields: [String]!
  optionalFields: [String]!
  excludeFields: [String]
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
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| name | Rule! | The notification rule template type |
| requiredFields | [String]! | List of required fields for the notification rule |
| optionalFields | [String]! | List of optional fields that can be included in the notification rule |
| excludeFields | [String] | List of fields to exclude from the notification rule |