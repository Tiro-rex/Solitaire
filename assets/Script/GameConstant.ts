import { EventEmitter } from "./EventEmitter";

export const enum Suits {
    h,
    d,
    c,
    s
};

// export const Ranks =
//     ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

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
export const CardType={
    none:0,
    faceup:1,
    facedown:2
}
export const enum Colour {
    None=0,
    Black,
    Red,

};


export const CARDS_ARRAY = [
    {
        "suit": "♠",
        "rank": "A"
    },
    {
        "suit": "♣",
        "rank": "A"
    },
    {
        "suit": "♦",
        "rank": "A"
    },
    {
        "suit": "♥",
        "rank": "A"
    },
    {
        "suit": "♥",
        "rank": 2
    },
    {
        "suit": "♥",
        "rank": 3
    },
    {
        "suit": "♥",
        "rank": 4
    },
    {
        "suit": "♥",
        "rank": 5
    },
    {
        "suit": "♥",
        "rank": 6
    },
    {
        "suit": "♥",
        "rank": 7
    },
    {
        "suit": "♥",
        "rank": 8
    },
    {
        "suit": "♥",
        "rank": 9
    },
    {
        "suit": "♥",
        "rank": 10
    },
    {
        "suit": "♥",
        "rank": "J"
    },
    {
        "suit": "♥",
        "rank": "Q"
    },
    {
        "suit": "♥",
        "rank": "K"
    },
    {
        "suit": "♦",
        "rank": 2
    },
    {
        "suit": "♦",
        "rank": 3
    },
    {
        "suit": "♦",
        "rank": 4
    },
    {
        "suit": "♦",
        "rank": 5
    },
    {
        "suit": "♦",
        "rank": 6
    },
    {
        "suit": "♦",
        "rank": 7
    },
    {
        "suit": "♦",
        "rank": 8
    },
    {
        "suit": "♦",
        "rank": 9
    },
    {
        "suit": "♦",
        "rank": 10
    },
    {
        "suit": "♦",
        "rank": "J"
    },
    {
        "suit": "♦",
        "rank": "Q"
    },
    {
        "suit": "♦",
        "rank": "K"
    },
    {
        "suit": "♣",
        "rank": 2
    },
    {
        "suit": "♣",
        "rank": 3
    },
    {
        "suit": "♣",
        "rank": 4
    },
    {
        "suit": "♣",
        "rank": 5
    },
    {
        "suit": "♣",
        "rank": 6
    },
    {
        "suit": "♣",
        "rank": 7
    },
    {
        "suit": "♣",
        "rank": 8
    },
    {
        "suit": "♣",
        "rank": 9
    },
    {
        "suit": "♣",
        "rank": 10
    },
    {
        "suit": "♣",
        "rank": "J"
    },
    {
        "suit": "♣",
        "rank": "Q"
    },
    {
        "suit": "♣",
        "rank": "K"
    },
    {
        "suit": "♠",
        "rank": 2
    },
    {
        "suit": "♠",
        "rank": 3
    },
    {
        "suit": "♠",
        "rank": 4
    },
    {
        "suit": "♠",
        "rank": 5
    },
    {
        "suit": "♠",
        "rank": 6
    },
    {
        "suit": "♠",
        "rank": 7
    },
    {
        "suit": "♠",
        "rank": 8
    },
    {
        "suit": "♠",
        "rank": 9
    },
    {
        "suit": "♠",
        "rank": 10
    },
    {
        "suit": "♠",
        "rank": "J"
    },
    {
        "suit": "♠",
        "rank": "Q"
    },
    {
        "suit": "♠",
        "rank": "K"
    }
]

export const cardMove = new EventEmitter();
