import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: [ './app.component.css' ],
})

// AppComponent现在加上了路由器，并能显示路由到的视图了。 
// 因此，为了把它从其它种类的组件中区分出来，我们称这类组件为路由器组件。
export class AppComponent {
  title = 'Tour of Heroes';
}

// RouterModule.forRoot([
//     // Routes是一个路由定义的数组
//     // 
//   {
//       path: 'heroes',
//       component: HeroesComponent
//   }

// ])