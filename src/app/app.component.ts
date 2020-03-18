import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BingoService } from './services/bingo.service';
import { Bingo } from './models/bingo.model';
import { BingoNewCards, BingoGetResult } from './redux/bingo/bingo.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bingo';

  constructor(private store: Store<Bingo>,
    private bingoService: BingoService){
      
      this.bingoService.getCards(6).subscribe(cards=>{
        this.store.dispatch(new BingoNewCards(cards));
      })

      this.bingoService.getResults().subscribe(results=>{
        this.store.dispatch(new BingoGetResult(results));
      })
    }
  
}
