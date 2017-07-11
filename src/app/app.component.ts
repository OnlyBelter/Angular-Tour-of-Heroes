import { Component } from '@angular/core';
import { Hero } from './hero';


// 创建一个由十位英雄构成的数组（Hero类的实例构成的数组）
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice'},
  { id: 12, name: 'Narco'},
  { id: 13, name: 'Bombasto'},
  { id: 14, name: 'Celeritas'},
  { id: 15, name: 'Magneta'},
  { id: 16, name: 'RubberMan'},
  { id: 17, name: 'Dynama'},
  { id: 18, name: 'Dr IQ'},
  { id: 19, name: 'Magma'},
  { id: 20, name: 'Tornado'}
];


@Component({
  selector: 'my-app',
  // 这里的双大括号是Angular中的插值表达式绑定语法。它们表示组件的title和hero属性的值会作为字符串插入到HTML标签中间。
  // 这里的语法跟angualrJs中相同，这里相当于将html片段插入到了js中
  // 下面的<input>一行，在表单元素<input>和组件的hero.name属性之间建立双向绑定
  // 虽然NgModel是一个有效的Angular指令，但它默认情况下却是不可用的。 它属于一个可选模块FormsModule。 我们必须选择使用那个模块。
  template: `
    <h1>{{title}}</h1>
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor="let hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    <hero-detail [hero]="selectedHero"></hero-detail>
    `,
    // 当我们为一个组件指定样式时，它们的作用域将仅限于该组件。 
    // 上面的例子中，这些样式只会作用于AppComponent组件，而不会“泄露”到外部HTML中。
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .heroes {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .heroes li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .heroes li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .heroes li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .heroes .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
`],

})

// 从这里开始，这里相当于是一个传送门，定义的变量或其他位置的内部变量，可以传递到上面的component中被template使用
export class AppComponent  {
  title = 'Tour of Heroes';
  // hero从一个字符串字面量换成一个类，这样提高了抽象程度，将Hero定义为类可以在外部更好的构建这个类
  // 这也相当于实现了松耦合
  selectedHero: Hero;
  heroes = HEROES;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

