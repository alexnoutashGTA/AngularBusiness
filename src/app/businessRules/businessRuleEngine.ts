import {businessRule, fieldNameType} from "./busineeRuleTypes"
function oredRules(bizFields:fieldNameType) {
  return bizFields.findIndex(filed=>filed[1]===true) >=0;

}

function andedRule(bizFields:fieldNameType) {
  return bizFields.findIndex(filed=>filed[1]===false) ==-1;
}

export function businessRuleParser(bizRules:businessRule[]){
  let rulePredicate: boolean[] = [];
  bizRules.map(bizRule=>{
    const evaluation = bizRule.logicalOperator==="&"? andedRule(bizRule.filedNames): oredRules(bizRule.filedNames)
    rulePredicate.push(evaluation);
  });
  return rulePredicate.indexOf(false) <-1
}
