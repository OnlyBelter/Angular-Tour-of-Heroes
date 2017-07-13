// 我们遵循的文件命名约定是：服务名称的小写形式（基本名），加上.service后缀。 
// 如果服务名称包含多个单词，我们就把基本名部分写成中线形式 (dash-case)。 
// 例如，SpecialSuperHeroService服务应该被定义在special-super-hero.service.ts文件中。
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// 我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// 有很多像toPromise这样的操作符，用于扩展Observable，为其添加有用的能力。
// 如果我们希望得到那些能力，只要从 RxJS 库中导入它们就可以了
require("rxjs/add/operator/toPromise");
// import { HEROES } from './mock-heroes';
// 当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
// HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 
// 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        // 添加一个名叫getHeros的桩方法
        //   getHeroes(): Hero [] {
        //     return HEROES;
        //   }
        this.heroesUrl = "api/heroes"; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    // 返回承诺的形式
    // 我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
    HeroService.prototype.getHeroes = function () {
        // return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    // 像getHeroes()一样，它也返回一个承诺。 但是，这个承诺会在提供模拟数据之前等待两秒钟。
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getHeroes()); }, 3000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        // return this.getHeroes()
        //            .then(heroes => heroes.find(hero => hero.id === id));
        var url = this.heroesUrl + "/" + id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.update = function (hero) {
        var url = this.heroesUrl + "/" + hero.id;
        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(function () { return hero; })
            .catch(this.handleError);
    };
    HeroService.prototype.create = function (name) {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    HeroService.prototype.delete = function (id) {
        var url = this.heroesUrl + "/" + id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map