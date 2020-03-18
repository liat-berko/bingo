import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CardItem } from '../models/bingo.model';
import { ProxyService } from './proxy.service';
import { Observable, observable } from 'rxjs';
import {map, filter, refCount} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BingoService {

  constructor(private http: HttpClient,
              private proxyService: ProxyService) {     
  }

  public between(min, max) {  
    return Math.floor(
      Math.random() * (max - min) + min
    )
  }

  public getCards(count): Observable<CardItem[]> {
      const params = new HttpParams()
        .set('count', count);      
        return this.proxyService.execute("cards",params).pipe(map(
          (item: CardItem[]) => {
            return item     
          }
         ));
  }   

  public getResults()  {
   return this.proxyService.execute("result",new HttpParams())
   .pipe(map(
    (item: number[]) => {
      return item     
    }
   ));


  }
}
