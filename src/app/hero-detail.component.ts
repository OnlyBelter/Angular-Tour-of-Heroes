import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { HeroService }    from './hero.service';
import { Hero } from './hero';

// 要定义一个组件，我们总是要先导入符号Component。
// @Component装饰器为组件提供了Angular元数据。 CSS选择器的名字hero-detail会匹配元素的标签名，用于在父组件的模板中标记出当前组件的位置。
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})

// 总是export这个组件类，因为你必然会在别处import它。
export class HeroDetailComponent implements OnInit {
  // 通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性。
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
  ) {}
  
  hero: Hero;

  ngOnInit(): void {
    // 英雄的id是数字，而路由参数的值总是字符串。 所以我们需要通过 JavaScript 的 (+) 操作符把路由参数的值转成数字。
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.hero = hero);
  }
  goBack(): void {
    this.location.back();
  }

}