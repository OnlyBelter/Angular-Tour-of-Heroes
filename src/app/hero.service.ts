// 我们遵循的文件命名约定是：服务名称的小写形式（基本名），加上.service后缀。 
// 如果服务名称包含多个单词，我们就把基本名部分写成中线形式 (dash-case)。 
// 例如，SpecialSuperHeroService服务应该被定义在special-super-hero.service.ts文件中。

// 我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数
import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// 当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
// HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 
// 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
@Injectable()
export class HeroService {
  // 添加一个名叫getHeros的桩方法
//   getHeroes(): Hero [] {
//     return HEROES;
//   }
  // 返回承诺的形式
  // 我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  // 像getHeroes()一样，它也返回一个承诺。 但是，这个承诺会在提供模拟数据之前等待两秒钟。
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 3000);
    });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
               .then(heroes => heroes.find(hero => hero.id === id));
  }
}

