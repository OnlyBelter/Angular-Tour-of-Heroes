import { Component, Input } from '@angular/core';
import { Hero } from './hero';

// 要定义一个组件，我们总是要先导入符号Component。
// @Component装饰器为组件提供了Angular元数据。 CSS选择器的名字hero-detail会匹配元素的标签名，用于在父组件的模板中标记出当前组件的位置。
@Component({
  selector: 'hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>`

})

// 总是export这个组件类，因为你必然会在别处import它。
export class HeroDetailComponent {
  // 通过在hero属性前面加上@Input装饰器，来表明它是一个输入属性。
  @Input() hero: Hero;
}