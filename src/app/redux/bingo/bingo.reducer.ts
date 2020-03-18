import {ActionEx, BingoActionTypes} from './bingo.action';
import { Bingo, CardModel } from 'src/app/models/bingo.model';
export const initialState: Bingo = {
    cards: [] = [],
    results: []=[],
    win: false
};
export function BingoReducer(state = initialState, action: ActionEx) {
  switch (action.type) {
    case BingoActionTypes.NewCards:
        let cards = [...state.cards,...action.payload];       
        return { cards: cards, results: state.results, win: state.win };
    case BingoActionTypes.GetResult:
        let result = [...state.results,...action.payload];
        return { cards: state.cards, results: result, win: state.win  };
    case BingoActionTypes.ValidateResult:
        let rslu = true;
        return { cards: state.cards, results: result, win: rslu  };
    default:
      return state;
  }
}