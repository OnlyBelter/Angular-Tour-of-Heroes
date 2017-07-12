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
// 我们导入了 Angular 的Injectable函数，并作为@Injectable()装饰器使用这个函数
var core_1 = require("@angular/core");
var mock_heroes_1 = require("./mock-heroes");
// 当 TypeScript 看到@Injectable()装饰器时，就会记下本服务的元数据。 如果 Angular 需要往这个服务中注入其它依赖，就会使用这些元数据。
// HeroService可以从任何地方获取Hero数据 —— Web服务、本地存储或模拟数据源。 
// 从组件中移除数据访问逻辑意味着你可以随时更改这些实现方式，而不影响需要这些英雄数据的组件。
var HeroService = (function () {
    function HeroService() {
    }
    // 添加一个名叫getHeros的桩方法
    //   getHeroes(): Hero [] {
    //     return HEROES;
    //   }
    // 返回承诺的形式
    // 我们通过返回一个 立即解决的承诺 的方式，模拟了一个超快、零延迟的超级服务器。
    HeroService.prototype.getHeroes = function () {
        return Promise.resolve(mock_heroes_1.HEROES);
    };
    // 像getHeroes()一样，它也返回一个承诺。 但是，这个承诺会在提供模拟数据之前等待两秒钟。
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(_this.getHeroes()); }, 3000);
        });
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes()
            .then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map