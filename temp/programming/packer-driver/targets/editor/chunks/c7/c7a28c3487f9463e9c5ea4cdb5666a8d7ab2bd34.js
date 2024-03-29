System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventEmitter, _crd, Suits, cardRanks, Ranks, Places, CardType, Colour, CARDS_ARRAY, cardMove, DCard;

  function _reportPossibleCrUseOfEventEmitter(extras) {
    _reporterNs.report("EventEmitter", "./EventEmitter", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventEmitter = _unresolved_2.EventEmitter;
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

      ;

      _export("cardRanks", cardRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']);

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

      _export("CardType", CardType = {
        none: 0,
        faceup: 1,
        facedown: 2
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

      _export("cardMove", cardMove = new (_crd && EventEmitter === void 0 ? (_reportPossibleCrUseOfEventEmitter({
        error: Error()
      }), EventEmitter) : EventEmitter)());

      _export("DCard", DCard = new (_crd && EventEmitter === void 0 ? (_reportPossibleCrUseOfEventEmitter({
        error: Error()
      }), EventEmitter) : EventEmitter)());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c7a28c3487f9463e9c5ea4cdb5666a8d7ab2bd34.js.map