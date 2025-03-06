import { Injectable } from '@angular/core';
import {businessRule} from '../businessRules/busineeRuleTypes';

@Injectable()
export class BusinessService {

  //This information should be inject from store
  //For this example this configuration is in the service
  bizRule: businessRule = {
    logicalOperator: "&",
    filedNames: [["firstNameEdited", true], ["firstNameValidated", false]]
  };
  constructor() {

  }
  getConfig():businessRule[]{
    return [this.bizRule];
  }
}
