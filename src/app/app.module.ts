import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as bingoReducer from './redux/bingo/bingo.reducer';
import {MatGridListModule,MatDividerModule} from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { ResultComponent } from './components/result/result.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardsComponent } from './components/cards/cards.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ResultComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatDividerModule,
    HttpClientModule,
    StoreModule.forRoot({ bingo: bingoReducer.BingoReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
