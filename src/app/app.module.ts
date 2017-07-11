import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component';

@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule // import the FormsModule before binding with [(ngModel)] 
  ],
  declarations: [ 
    AppComponent,
    HeroDetailComponent  // 每个组件都必须在一个（且只有一个）Angular模块中声明。
     ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
