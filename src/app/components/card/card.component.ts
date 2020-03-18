import { Component, OnInit, Input, OnDestroy, OnChanges } from '@angular/core';
import { CardItem, Bingo } from 'src/app/models/bingo.model';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnChanges {
  @Input()
  public carder:[]=[];
  
  constructor() {
    
   }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(this.carder);
  }
  

  ngOnInit() {
  }
  
}
