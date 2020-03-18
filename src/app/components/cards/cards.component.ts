import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Bingo, CardModel } from 'src/app/models/bingo.model';

@Component({
  selector: 'cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit, OnDestroy {
  private cards: []=[];
  private cardSubscription: Subscription;

  constructor(private store: Store<Bingo>) {
     
   }

  ngOnDestroy(): void {
    this.cardSubscription.unsubscribe()
  }

  ngOnInit() {
    this.cardSubscription = this.store.select((state: any) =>state.bingo.cards).subscribe((card) => {
      Object.assign(this.cards,card) ;
    });
  }

}
