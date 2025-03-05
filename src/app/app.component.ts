import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UiButtonComponent} from './ui-components/ui-button/ui-button.component';
import {UiComponentsModule} from './ui-components/ui-components.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UiComponentsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bizAngular';
}
