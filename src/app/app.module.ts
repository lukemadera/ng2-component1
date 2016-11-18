import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule }   from '@angular/router';

import {
    MyIconModule,
} from "../../index"

import { AppComponent } from './app.component';

import {MyIconDemoComponent} from "./my-icon-demo/my-icon-demo.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'my-icon', component:MyIconDemoComponent},
      {path: '', redirectTo: '/my-icon', pathMatch: 'full'},
      {path: '**', redirectTo: ''},
    ]),

    MyIconModule,
  ],
  declarations: [
    AppComponent,
    MyIconDemoComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
