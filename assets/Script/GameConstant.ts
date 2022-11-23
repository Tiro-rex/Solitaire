import { EventEmitter } from "./EventEmitter";

export const enum Suits {
    h,
    d,
    c,
    s
};

export const cardRanks =
    ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

export const enum Ranks {
    None,
    Ace,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Jack = 100,
    Queen = 101,
    King = 102,
};

export const Places = {
    FOUNDATION: 'FOUNDATION',
    PILE: 'PILE',
    DECK: 'DECK'
};
export const CardType = {
    none: 0,
    faceup: 1,
    facedown: 2
}
export const enum Colour {
    None = 0,
    Black,
    Red,

};

export const StackPos = {

    stack1: { x: -350, y: 0 },
    stack2: { x: -230, y: 0 },
    stack3: { x: -114, y: 0 },
    stack4: { x: 10, y: 0 },
    stack5: { x: 120, y: 0 },
    stack6: { x: 235, y: 0 },
    stack7: { x: 355, y: 0 }
}
export const TouchEnd = {
    TouchEndS1: { xr: 108.3, xl: 172.3 },
    TouchEndS2: { xr: 231.3, xl: 296.3 },
    TouchEndS3: { xr: 329.3, xl: 395.3 },
    TouchEndS4: { xr: 453.3, xl: 517.3 },
    TouchEndS5: { xr: 559.3, xl: 623.3 },
    TouchEndS6: { xr: 671.3, xl: 735.3 },
    TouchEndS7: { xr: 804.3, xl: 868.3 },
}


export const CARDS_ARRAY = [
    {
        "suit": "♠",
        "rank": "A",
        "value": 1
    },
    {
        "suit": "♣",
        "rank": "A",
        "value": 1

    },
    {
        "suit": "♦",
        "rank": "A",
        "value": 1
    },
    {
        "suit": "♥",
        "rank": "A",
        "value": 1
    },
    {
        "suit": "♥",
        "rank": 2,
        "value": 2
    },
    {
        "suit": "♥",
        "rank": 3,
        "value": 3
    },
    {
        "suit": "♥",
        "rank": 4,
        "value": 4
    },
    {
        "suit": "♥",
        "rank": 5,
        "value": 5
    },
    {
        "suit": "♥",
        "rank": 6,
        "value": 6
    },
    {
        "suit": "♥",
        "rank": 7,
        "value": 7
    },
    {
        "suit": "♥",
        "rank": 8,
        "value": 8
    },
    {
        "suit": "♥",
        "rank": 9,
        "value": 9
    },
    {
        "suit": "♥",
        "rank": 10,
        "value": 10
    },
    {
        "suit": "♥",
        "rank": "J",
        "value": 11
    },
    {
        "suit": "♥",
        "rank": "Q",
        "value": 12
    },
    {
        "suit": "♥",
        "rank": "K",
        "value": 13
    },
    {
        "suit": "♦",
        "rank": 2,
        "value": 2
    },
    {
        "suit": "♦",
        "rank": 3,
        "value": 3
    },
    {
        "suit": "♦",
        "rank": 4,
        "value": 4
    },
    {
        "suit": "♦",
        "rank": 5,
        "value": 5
    },
    {
        "suit": "♦",
        "rank": 6,
        "value": 6
    },
    {
        "suit": "♦",
        "rank": 7,
        "value": 7
    },
    {
        "suit": "♦",
        "rank": 8,
        "value": 8
    },
    {
        "suit": "♦",
        "rank": 9,
        "value": 9
    },
    {
        "suit": "♦",
        "rank": 10,
        "value": 10
    },
    {
        "suit": "♦",
        "rank": "J",
        "value": 11
    },
    {
        "suit": "♦",
        "rank": "Q",
        "value": 12
    },
    {
        "suit": "♦",
        "rank": "K",
        "value": 13
    },
    {
        "suit": "♣",
        "rank": 2,
        "value": 2
    },
    {
        "suit": "♣",
        "rank": 3,
        "value": 3
    },
    {
        "suit": "♣",
        "rank": 4,
        "value": 4
    },
    {
        "suit": "♣",
        "rank": 5,
        "value": 5
    },
    {
        "suit": "♣",
        "rank": 6,
        "value": 6
    },
    {
        "suit": "♣",
        "rank": 7,
        "value": 7
    },
    {
        "suit": "♣",
        "rank": 8,
        "value": 8
    },
    {
        "suit": "♣",
        "rank": 9,
        "value": 9
    },
    {
        "suit": "♣",
        "rank": 10,
        "value": 10
    },
    {
        "suit": "♣",
        "rank": "J",
        "value": 11
    },
    {
        "suit": "♣",
        "rank": "Q",
        "value": 12
    },
    {
        "suit": "♣",
        "rank": "K",
        "value": 13
    },
    {
        "suit": "♠",
        "rank": 2,
        "value": 2
    },
    {
        "suit": "♠",
        "rank": 3,
        "value": 3
    },
    {
        "suit": "♠",
        "rank": 4,
        "value": 4
    },
    {
        "suit": "♠",
        "rank": 5,
        "value": 5
    },
    {
        "suit": "♠",
        "rank": 6,
        "value": 6
    },
    {
        "suit": "♠",
        "rank": 7,
        "value": 7
    },
    {
        "suit": "♠",
        "rank": 8,
        "value": 8
    },
    {
        "suit": "♠",
        "rank": 9,
        "value": 9
    },
    {
        "suit": "♠",
        "rank": 10,
        "value": 10
    },
    {
        "suit": "♠",
        "rank": "J",
        "value": 11
    },
    {
        "suit": "♠",
        "rank": "Q",
        "value": 12
    },
    {
        "suit": "♠",
        "rank": "K",
        "value": 13
    }
]


export const cardMove = new EventEmitter();
export const DCard = new EventEmitter();
export const snapLogic = new EventEmitter();
export const PosSnap = new EventEmitter();