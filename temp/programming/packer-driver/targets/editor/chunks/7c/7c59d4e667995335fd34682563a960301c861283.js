System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventEmitter, _crd, Suits, Ranks, Places, CardType, Colour, CARDS_ARRAY, cardMove, DCard;

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

      _export("Ranks", Ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']); // export const enum Ranks {
      //     None,
      //     Ace,
      //     Two,
      //     Three,
      //     Four,
      //     Five,
      //     Six,
      //     Seven,
      //     Eight,
      //     Nine,
      //     Ten,
      //     Eleven,
      //     Twelve,
      //     Thirteen,
      //     Jack = 100,
      //     Queen = 101,
      //     King = 102,
      // };


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
//# sourceMappingURL=7c59d4e667995335fd34682563a960301c861283.js.map