import { NgModule }  from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }  from './dashboard.component';
import { HeroesComponent }     from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

const routes: Routes = [
      {
        path: 'heroes',
        component: HeroesComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        // 重定向路由
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        // 配置带参数的路由
        // 路径中的冒号 (:) 表示:id是一个占位符，当导航到这个HeroDetailComponent组件时，它将被填入一个特定英雄的id。
        path: 'detail/:id',
        component: HeroDetailComponent
      }

];

@NgModule({
    // forRoot()方法提供了路由需要的路由服务提供商和指令，并基于当前浏览器 URL 初始化导航。
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}