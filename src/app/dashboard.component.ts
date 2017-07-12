import { Component, OnInit } from '@angular/core';

import { Hero }        from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: [ './dashboard.component.css' ]
})

export class DashboardComponent implements OnInit {
    // 创建一个heroes数组属性
    heroes: Hero[];
    // 在构造函数中注入HeroService，并且把它保存在一个私有的heroService字段中
    constructor(private HeroService: HeroService) { }
    
    // 在 Angular 的ngOnInit生命周期钩子里面调用服务来获得英雄数据。
    ngOnInit(): void {
        // 下面iAmHeroes是HeroService的返回值
        this.HeroService.getHeroes()
          .then(iAmHeroes => this.heroes = iAmHeroes.slice(1, 5));
    }
}