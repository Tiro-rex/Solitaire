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


export const CARDS_ARRAY = [
    {
        "suit": "♠",
        "rank": "A",
        "value":1
    },
    {
        "suit": "♣",
        "rank": "A",
        "value":1
        
    },
    {
        "suit": "♦",
        "rank": "A",
        "value":1
    },
    {
        "suit": "♥",
        "rank": "A",
        "value":1
    },
    {
        "suit": "♥",
        "rank": 2,
        "value":2
    },
    {
        "suit": "♥",
        "rank": 3,
        "value":3
    },
    {
        "suit": "♥",
        "rank": 4,
        "value":4
    },
    {
        "suit": "♥",
        "rank": 5,
        "value":5
    },
    {
        "suit": "♥",
        "rank": 6,
        "value":6
    },
    {
        "suit": "♥",
        "rank": 7,
        "value":7
    },
    {
        "suit": "♥",
        "rank": 8,
        "value":8
    },
    {
        "suit": "♥",
        "rank": 9,
        "value":9
    },
    {
        "suit": "♥",
        "rank": 10,
        "value":10
    },
    {
        "suit": "♥",
        "rank": "J",
        "value":11
    },
    {
        "suit": "♥",
        "rank": "Q",
        "value":12
    },
    {
        "suit": "♥",
        "rank": "K",
        "value":13
    },
    {
        "suit": "♦",
        "rank": 2,
        "value":2
    },
    {
        "suit": "♦",
        "rank": 3,
        "value":3
    },
    {
        "suit": "♦",
        "rank": 4,
        "value":4
    },
    {
        "suit": "♦",
        "rank": 5,
        "value":5
    },
    {
        "suit": "♦",
        "rank": 6,
        "value":6
    },
    {
        "suit": "♦",
        "rank": 7,
        "value":7
    },
    {
        "suit": "♦",
        "rank": 8,
        "value":8
    },
    {
        "suit": "♦",
        "rank": 9,
        "value":9
    },
    {
        "suit": "♦",
        "rank": 10,
        "value":10
    },
    {
        "suit": "♦",
        "rank": "J",
        "value":11
    },
    {
        "suit": "♦",
        "rank": "Q",
        "value":12
    },
    {
        "suit": "♦",
        "rank": "K",
        "value":13
    },
    {
        "suit": "♣",
        "rank": 2,
        "value":2
    },
    {
        "suit": "♣",
        "rank": 3,
        "value":3
    },
    {
        "suit": "♣",
        "rank": 4,
        "value":4
    },
    {
        "suit": "♣",
        "rank": 5,
        "value":5
    },
    {
        "suit": "♣",
        "rank": 6,
        "value":6
    },
    {
        "suit": "♣",
        "rank": 7,
        "value":7
    },
    {
        "suit": "♣",
        "rank": 8,
        "value":8
    },
    {
        "suit": "♣",
        "rank": 9,
        "value":9
    },
    {
        "suit": "♣",
        "rank": 10,
        "value":10
    },
    {
        "suit": "♣",
        "rank": "J",
        "value":11
    },
    {
        "suit": "♣",
        "rank": "Q",
        "value":12
    },
    {
        "suit": "♣",
        "rank": "K",
        "value":13
    },
    {
        "suit": "♠",
        "rank": 2,
        "value":2
    },
    {
        "suit": "♠",
        "rank": 3,
        "value":3
    },
    {
        "suit": "♠",
        "rank": 4,
        "value":4
    },
    {
        "suit": "♠",
        "rank": 5,
        "value":5
    },
    {
        "suit": "♠",
        "rank": 6,
        "value":6
    },
    {
        "suit": "♠",
        "rank": 7,
        "value":7
    },
    {
        "suit": "♠",
        "rank": 8,
        "value":8
    },
    {
        "suit": "♠",
        "rank": 9,
        "value":9
    },
    {
        "suit": "♠",
        "rank": 10,
        "value":10
    },
    {
        "suit": "♠",
        "rank": "J",
        "value":11
    },
    {
        "suit": "♠",
        "rank": "Q",
        "value":12
    },
    {
        "suit": "♠",
        "rank": "K",
        "value":13
    }
]

export const cardMove = new EventEmitter();
export const DCard = new EventEmitter();
export const snapParent =new EventEmitter();