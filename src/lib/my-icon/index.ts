import {
  NgModule,
  ModuleWithProviders,
} from '@angular/core';
import {CommonModule} from '@angular/common';
import { MyIconComponent } from './my-icon.component';

@NgModule({
  imports: [CommonModule],
  exports: [MyIconComponent],
  declarations: [MyIconComponent],
})
export class MyIconModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MyIconModule,
      providers: []
    };
  }
}