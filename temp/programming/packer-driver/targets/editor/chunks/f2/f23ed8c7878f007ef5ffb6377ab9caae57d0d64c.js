System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Suits, Ranks, Places, ActionTypes, Color, CARDS_ARRAY;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d3311ryTlCQpEXdZ3nmuSj", "GameConstant", undefined);

      _export("Suits", Suits = {
        HEARTS: 0,
        DIAMONDS: 1,
        CLUBS: 2,
        SPADES: 3
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

      _export("Color", Color = {
        None: 0,
        Black: 1,
        Red: 2
      });

      ;

      _export("CARDS_ARRAY", CARDS_ARRAY = [{
        "suit": "hearts",
        "rank": 2
      }, {
        "suit": "hearts",
        "rank": 3
      }, {
        "suit": "hearts",
        "rank": 4
      }, {
        "suit": "hearts",
        "rank": 5
      }, {
        "suit": "hearts",
        "rank": 6
      }, {
        "suit": "hearts",
        "rank": 7
      }, {
        "suit": "hearts",
        "rank": 8
      }, {
        "suit": "hearts",
        "rank": 9
      }, {
        "suit": "hearts",
        "rank": 10
      }, {
        "suit": "hearts",
        "rank": "J"
      }, {
        "suit": "hearts",
        "rank": "Q"
      }, {
        "suit": "hearts",
        "rank": "K"
      }, {
        "suit": "hearts",
        "rank": "A"
      }, {
        "suit": "diamonds",
        "rank": 2
      }, {
        "suit": "diamonds",
        "rank": 3
      }, {
        "suit": "diamonds",
        "rank": 4
      }, {
        "suit": "diamonds",
        "rank": 5
      }, {
        "suit": "diamonds",
        "rank": 6
      }, {
        "suit": "diamonds",
        "rank": 7
      }, {
        "suit": "diamonds",
        "rank": 8
      }, {
        "suit": "diamonds",
        "rank": 9
      }, {
        "suit": "diamonds",
        "rank": 10
      }, {
        "suit": "diamonds",
        "rank": "J"
      }, {
        "suit": "diamonds",
        "rank": "Q"
      }, {
        "suit": "diamonds",
        "rank": "K"
      }, {
        "suit": "diamonds",
        "rank": "A"
      }, {
        "suit": "clubs",
        "rank": 2
      }, {
        "suit": "clubs",
        "rank": 3
      }, {
        "suit": "clubs",
        "rank": 4
      }, {
        "suit": "clubs",
        "rank": 5
      }, {
        "suit": "clubs",
        "rank": 6
      }, {
        "suit": "clubs",
        "rank": 7
      }, {
        "suit": "clubs",
        "rank": 8
      }, {
        "suit": "clubs",
        "rank": 9
      }, {
        "suit": "clubs",
        "rank": 10
      }, {
        "suit": "clubs",
        "rank": "J"
      }, {
        "suit": "clubs",
        "rank": "Q"
      }, {
        "suit": "clubs",
        "rank": "K"
      }, {
        "suit": "clubs",
        "rank": "A"
      }, {
        "suit": "spades",
        "rank": 2
      }, {
        "suit": "spades",
        "rank": 3
      }, {
        "suit": "spades",
        "rank": 4
      }, {
        "suit": "spades",
        "rank": 5
      }, {
        "suit": "spades",
        "rank": 6
      }, {
        "suit": "spades",
        "rank": 7
      }, {
        "suit": "spades",
        "rank": 8
      }, {
        "suit": "spades",
        "rank": 9
      }, {
        "suit": "spades",
        "rank": 10
      }, {
        "suit": "spades",
        "rank": "J"
      }, {
        "suit": "spades",
        "rank": "Q"
      }, {
        "suit": "spades",
        "rank": "K"
      }, {
        "suit": "spades",
        "rank": "A"
      }]);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f23ed8c7878f007ef5ffb6377ab9caae57d0d64c.js.map