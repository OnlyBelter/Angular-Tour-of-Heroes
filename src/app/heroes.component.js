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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroesComponent = (function () {
    // heroes = HEROES;
    // 注入HeroService, 添加一个构造函数，并定义一个私有属性。
    // 构造函数自己什么也不用做，它在参数中定义了一个私有的heroService属性，并把它标记为注入HeroService的靶点。
    // 现在，当创建AppComponent实例时，Angular 知道需要先提供一个HeroService的实例。
    function HeroesComponent(router, HeroService) {
        this.router = router;
        this.HeroService = HeroService;
        this.title = 'Tour of Heroes';
    }
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        // this.heroes = this.HeroService.getHeroes();
        // 变成基于承诺的，并在承诺的事情被解决时再行动。 一旦承诺的事情被成功解决（Resolve），我们就会显示英雄数据。
        // 在回调函数中，我们把服务返回的英雄数组赋值给组件的heroes属性。
        this.HeroService.getHeroesSlowly().then(function (heroes) { return _this.heroes = heroes; });
    };
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    HeroesComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.HeroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroesComponent.prototype.delete = function (hero) {
        var _this = this;
        this.HeroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    return HeroesComponent;
}());
HeroesComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: './heroes.component.html',
        // styleUrls属性是一个由样式文件的文件名(包括路径)组成的数组。我们还可以列出来自多个不同位置的样式文件。
        styleUrls: ['./heroes.component.css'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        hero_service_1.HeroService])
], HeroesComponent);
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=heroes.component.js.map