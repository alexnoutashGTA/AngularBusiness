import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UiButtonComponent} from './ui-components/ui-button/ui-button.component';
import {UiComponentsModule} from './ui-components/ui-components.module';
import {ButtonUiProps} from './businessRules/busineeRuleTypes';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent {
  title = 'bizAngular';
  theme = {
    blue: {
      default: "#3f51b5",
      hover: "#283593",
      disabled:"#ada6a9"
    },
    pink: {
      default: "#e91e63",
      hover: "#ad1457",
      disabled:"#ada6a9"
    },
  };
  uiProps: ButtonUiProps= {uiProps:{text: "disabled button example", theme:this.theme}}
}
