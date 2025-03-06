import {Component, OnInit, signal} from '@angular/core';
import {BusinessService} from '../../businessService/business-service';
import {businessRuleParser} from '../../businessRules/businessRuleEngine';

@Component({
  selector: 'app-ui-button',
  standalone: false,
    template: `
    @if (enabled()) {
    <button>enabled</button>
    }
    @else{<button>disabled</button>}
  `,
  styleUrl: './ui-button.component.css'
})
export class UiButtonComponent implements OnInit {

   enabled = signal(false);
   test=true;

  constructor(private bizService: BusinessService) {
  }
  ngOnInit(){
    this.enabled.set(businessRuleParser(this.bizService.getConfig()));
  }


}
