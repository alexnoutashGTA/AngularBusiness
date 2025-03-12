import {Component, input, OnInit, signal} from '@angular/core';
import {BusinessService} from '../../businessService/business-service';
import {businessRuleParser} from '../../businessRules/businessRuleEngine';
import {BusinessRuleTypes, ButtonAccessibilityProps, ButtonUiProps} from '../../businessRules/busineeRuleTypes';

@Component({
  selector: 'app-ui-button',
  standalone: false,
    template: `
    @if (enabled()) {
    <button>enabled</button>
    }
    @else{<button disabled>{{uiProps().uiProps.text}}</button>}
  `,
  styleUrl: './ui-button.component.css'
})

export class UiButtonComponent implements OnInit {

   enabled = signal(false);

  accessibilityProps = input<ButtonAccessibilityProps>(); // InputSignal<string>
  uiProps = input.required<ButtonUiProps>(); // InputSignal<string>

  businessRuleProps = input.required<BusinessRuleTypes>();


  ngOnInit(){(
    console.log(this.uiProps().uiProps.text));
    this.enabled.set(businessRuleParser(this.businessRuleProps().businessRules));
  }


}
