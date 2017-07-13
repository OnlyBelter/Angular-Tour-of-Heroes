import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Hero }           from './hero';
@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {}
  // 我们不再调用toPromise方法，而是从http.get方法中返回一个Observable对象，
  // 之后调用RxJS的map操作符来从返回数据中提取英雄。
  search(term: string): Observable<Hero[]> {
    return this.http
               .get(`app/heroes/?name=${term}`)
               .map(response => response.json().data as Hero[]);
  }
}
