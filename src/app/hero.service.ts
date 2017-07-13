// 我们遵循的文件命名约定是：服务名称的小写形式（基本名），加上.service后缀。 
// 如果服务名称包含多个单词，我们就把基本名部分写成中线形式 (dash-case)。 
// 例如，SpecialSuperHeroService服务应该被定义在special-super-hero.service.ts文件中。

// 我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

// 有很多像toPromise这样的操作符，用于扩展Observable，为其添加有用的能力。
// 如果我们希望得到那些能力，只要从 RxJS 库中导入它们就可以了
import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
// import { HEROES } from './mock-heroes';

// 当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
// HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 
// 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
@Injectable()
export class HeroService {
  // 添加一个名叫getHeros的桩方法
//   getHeroes(): Hero [] {
//     return HEROES;
//   }


  private heroesUrl = "api/heroes";  // URL to web api

  constructor(private http: Http) { }

  // 返回承诺的形式
  // 我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);
    return this.http.get(this.heroesUrl)
               // 我们先利用toPromise操作符把Observable直接转换成Promise对象
               .toPromise()
               // 在 promise 的then()回调中，我们调用 HTTP 的Reponse对象的json方法，以提取出其中的数据。
               // 这个由json方法返回的对象只有一个data属性。 这个data属性保存了英雄数组，这个数组才是调用者真正想要的。
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);  // for demo purposes only
    return Promise.reject(error.message || error);
  }

  // 像getHeroes()一样，它也返回一个承诺。 但是，这个承诺会在提供模拟数据之前等待两秒钟。
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      setTimeout(() => resolve(this.getHeroes()), 3000);
    });
  }

  getHero(id: number): Promise<Hero> {
    // return this.getHeroes()
    //            .then(heroes => heroes.find(hero => hero.id === id));
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Hero)
               .catch(this.handleError);
  }

  private headers = new Headers({'Content-Type': 'application/json'});
  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
        .put(url, JSON.stringify(hero), {headers: this.headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.http
        .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data as Hero)
        .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
        .toPromise()
        .then(() => null)
        .catch(this.handleError);
  }
}

