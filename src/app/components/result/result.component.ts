import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { Bingo } from 'src/app/models/bingo.model';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit, OnDestroy, OnChanges {
  private results: []=[];
  private resultSubscription: Subscription;
  constructor(private store: Store<Bingo>) {

   } 
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    //validate cards
  }
  ngOnDestroy(): void {
    this.resultSubscription.unsubscribe();
  }

  ngOnInit() {
    this.resultSubscription = this.store.select((state: any) =>state.bingo.results).subscribe((result) => {
      this.updateResult(result,result.length,this)
    });    
  }
  updateResult(result,n,me){
    var interval = setInterval(function(){
      if (n > 0){
        n--;
        me.results.push(result[n]);
        console.log(result[n])
        
      }
  }, 2000);
  }
}
