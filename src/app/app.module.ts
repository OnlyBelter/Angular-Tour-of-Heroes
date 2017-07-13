import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule}     from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroService }          from './hero.service';
import { HeroSearchComponent }  from './hero-search.component';

import { AppRoutingModule }    from './app-routing.module';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule, // import the FormsModule before binding with [(ngModel)] 
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
   // 每个组件都必须在一个（且只有一个）Angular模块中声明。
  declarations: [
    AppComponent,  // 根组件，title和导航
    DashboardComponent,
    HeroDetailComponent, 
    HeroesComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService
  ],
  // 通过引导根AppModule来启动应用
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
