import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UiButtonComponent} from './ui-button/ui-button.component';
import {BusinessService} from '../businessService/business-service';

@NgModule({
  declarations: [UiButtonComponent],
  imports: [
    CommonModule
  ],
  exports:[UiButtonComponent],
  providers:[BusinessService]
})
export class UiComponentsModule { }
