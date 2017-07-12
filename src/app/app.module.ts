import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import { RouterModule }  from '@angular/router';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)] 
    AppRoutingModule,
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    HeroDetailComponent,  // 每个组件都必须在一个（且只有一个）Angular模块中声明。
    HeroesComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
