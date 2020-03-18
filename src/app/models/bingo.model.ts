
export interface CardItem {
    color: string;
    text: number;
    isMarked: boolean
}

export interface CardModel {
    items: CardItem[];
    text: number;
    isMarked: boolean
}

export interface Bingo {
    cards: CardModel[],
    results: number[],
    win: boolean
}
