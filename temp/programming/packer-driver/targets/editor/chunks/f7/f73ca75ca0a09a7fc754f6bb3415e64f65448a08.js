System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Suits, Ranks, Places, ActionTypes, Colour, CARDS_ARRAY;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d3311ryTlCQpEXdZ3nmuSj", "GameConstant", undefined);

      _export("Suits", Suits = {
        h: 0,
        d: 1,
        c: 2,
        s: 3
      });

      ; // export const Ranks =
      //     ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

      _export("Ranks", Ranks = {
        None: 0,
        Ace: 1,
        Two: 2,
        Three: 3,
        Four: 4,
        Five: 5,
        Six: 6,
        Seven: 7,
        Eight: 8,
        Nine: 9,
        Ten: 10,
        Eleven: 11,
        Twelve: 12,
        Thirteen: 13,
        Jack: 100,
        Queen: 101,
        King: 102
      });

      ;

      _export("Places", Places = {
        FOUNDATION: 'FOUNDATION',
        PILE: 'PILE',
        DECK: 'DECK'
      });

      _export("ActionTypes", ActionTypes = {
        TURN_CARD: 'TURN_CARD',
        MOVE_CARD: 'MOVE_CARD'
      });

      _export("Colour", Colour = {
        None: 0,
        Black: 1,
        Red: 2
      });

      ;

      _export("CARDS_ARRAY", CARDS_ARRAY = [{
        "suit": "♠",
        "rank": "A"
      }, {
        "suit": "♣",
        "rank": "A"
      }, {
        "suit": "♦",
        "rank": "A"
      }, {
        "suit": "♥",
        "rank": "A"
      }, {
        "suit": "♥",
        "rank": 2
      }, {
        "suit": "♥",
        "rank": 3
      }, {
        "suit": "♥",
        "rank": 4
      }, {
        "suit": "♥",
        "rank": 5
      }, {
        "suit": "♥",
        "rank": 6
      }, {
        "suit": "♥",
        "rank": 7
      }, {
        "suit": "♥",
        "rank": 8
      }, {
        "suit": "♥",
        "rank": 9
      }, {
        "suit": "♥",
        "rank": 10
      }, {
        "suit": "♥",
        "rank": "J"
      }, {
        "suit": "♥",
        "rank": "Q"
      }, {
        "suit": "♥",
        "rank": "K"
      }, {
        "suit": "♦",
        "rank": 2
      }, {
        "suit": "♦",
        "rank": 3
      }, {
        "suit": "♦",
        "rank": 4
      }, {
        "suit": "♦",
        "rank": 5
      }, {
        "suit": "♦",
        "rank": 6
      }, {
        "suit": "♦",
        "rank": 7
      }, {
        "suit": "♦",
        "rank": 8
      }, {
        "suit": "♦",
        "rank": 9
      }, {
        "suit": "♦",
        "rank": 10
      }, {
        "suit": "♦",
        "rank": "J"
      }, {
        "suit": "♦",
        "rank": "Q"
      }, {
        "suit": "♦",
        "rank": "K"
      }, {
        "suit": "♣",
        "rank": 2
      }, {
        "suit": "♣",
        "rank": 3
      }, {
        "suit": "♣",
        "rank": 4
      }, {
        "suit": "♣",
        "rank": 5
      }, {
        "suit": "♣",
        "rank": 6
      }, {
        "suit": "♣",
        "rank": 7
      }, {
        "suit": "♣",
        "rank": 8
      }, {
        "suit": "♣",
        "rank": 9
      }, {
        "suit": "♣",
        "rank": 10
      }, {
        "suit": "♣",
        "rank": "J"
      }, {
        "suit": "♣",
        "rank": "Q"
      }, {
        "suit": "♣",
        "rank": "K"
      }, {
        "suit": "♠",
        "rank": 2
      }, {
        "suit": "♠",
        "rank": 3
      }, {
        "suit": "♠",
        "rank": 4
      }, {
        "suit": "♠",
        "rank": 5
      }, {
        "suit": "♠",
        "rank": 6
      }, {
        "suit": "♠",
        "rank": 7
      }, {
        "suit": "♠",
        "rank": 8
      }, {
        "suit": "♠",
        "rank": 9
      }, {
        "suit": "♠",
        "rank": 10
      }, {
        "suit": "♠",
        "rank": "J"
      }, {
        "suit": "♠",
        "rank": "Q"
      }, {
        "suit": "♠",
        "rank": "K"
      }]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f73ca75ca0a09a7fc754f6bb3415e64f65448a08.js.map