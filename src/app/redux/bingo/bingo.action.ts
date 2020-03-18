import { Action } from '@ngrx/store';

export enum BingoActionTypes {
    NewCards = '[Bingo Component] New Cards',
    GetResult = '[Bingo Component] Get Result',
    ValidateResult = '[Bingo Component] Validate Result'
  }
  export class ActionEx implements Action {
    readonly type;
    payload: any;
  }
  export class BingoNewCards implements ActionEx {
    readonly type = BingoActionTypes.NewCards;
    constructor(public payload: any) {
    }
  }
  export class BingoGetResult implements ActionEx {
    readonly type = BingoActionTypes.GetResult;
    constructor(public payload: any) {
    }
  }
  export class BingoValidateResult implements ActionEx {
    readonly type = BingoActionTypes.ValidateResult;
    constructor(public payload: any) {
    }
  }