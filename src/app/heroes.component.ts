import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';



@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',

  // styleUrls属性是一个由样式文件的文件名(包括路径)组成的数组。我们还可以列出来自多个不同位置的样式文件。
  styleUrls: ['./heroes.component.css'],
  // 注册一个HeroService提供商，来告诉注入器如何创建HeroService。
  // providers数组告诉 Angular，当它创建新的AppComponent组件时，也要创建一个HeroService的新实例。
  // providers: [HeroService]  // 移到模块去了，app.module.ts

})

// 从这里开始，这里相当于是一个传送门，定义的变量或其他位置的内部变量，可以传递到上面的component中被template使用
export class HeroesComponent  {
  title = 'Tour of Heroes';
  // hero从一个字符串字面量换成一个类，这样提高了抽象程度，将Hero定义为类可以在外部更好的构建这个类
  // 这也相当于实现了松耦合
  heroes: Hero[];
  selectedHero: Hero;
  // heroes = HEROES;
  // 注入HeroService, 添加一个构造函数，并定义一个私有属性。
  // 构造函数自己什么也不用做，它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
  // 现在，当创建AppComponent实例时，Angular 知道需要先提供一个HeroService的实例。
  constructor(
    private router: Router,
    private HeroService: HeroService) { }

  getHeroes(): void {
    // this.heroes = this.HeroService.getHeroes();
    // 变成基于承诺的，并在承诺的事情被解决时再行动。 一旦承诺的事情被成功解决（Resolve），我们就会显示英雄数据。
    // 在回调函数中，我们把服务返回的英雄数组赋值给组件的heroes属性。
    this.HeroService.getHeroesSlowly().then(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id])
  }


}

