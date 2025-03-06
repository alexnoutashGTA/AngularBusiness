type BusinessRuleTypes = {
  businessRules: businessRule[]
};

export type fieldNameType = [string,boolean][];

export type businessRule = {
  logicalOperator:string,
  filedNames: fieldNameType
};

type ButtonAccessibilityProps ={
  accProps: {
    name: string
  }
}

// UI Components access all content parameters as props
// This approach leads developers to provide content parameter as parameter, perhaps retrived
// from a CMS (contentful etc.)
// One parameter and a theme is included in this type as an example
type ButtonUiProps = {
  uiProps: {
    text: string,
    theme: object
  }
}

// Overall props include business rules needed for forms as well
type ButtonProps = ButtonAccessibilityProps & ButtonUiProps & BusinessRuleTypes;


export default BusinessRuleTypes
