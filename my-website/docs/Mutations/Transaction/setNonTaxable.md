# setNonTaxable

## Description
Sets items as non-taxable or taxable based on provided IDs.

## GraphQL Schema
```graphql
schema {
  mutation: SetNonTaxableMutation
}

mutation {
  setNonTaxable(ids: [String], isNonTaxable: Boolean): SetBatchNonTaxableMutation
}

type SetBatchNonTaxableMutation {
  success: Boolean
}
```

## Arguments
| Name | Type | Description |
|------|------|-------------|
| ids | [String] | Array of string identifiers |
| isNonTaxable | Boolean | Flag to set non-taxable status |