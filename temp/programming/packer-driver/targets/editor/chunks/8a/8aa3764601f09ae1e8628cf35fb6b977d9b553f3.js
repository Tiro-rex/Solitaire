System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, Suits, Ranks, RanksValues, Places, ActionTypes, Color;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d3311ryTlCQpEXdZ3nmuSj", "GameConstant", undefined);

      _export("Suits", Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
      });

      _export("Ranks", Ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']);

      _export("RanksValues", RanksValues = {
        A: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        8: 8,
        9: 9,
        10: 10,
        J: 11,
        Q: 12,
        K: 13
      });

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
        type: {
          0: 'RED_CARD',
          1: 'BLACK_CARD'
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8aa3764601f09ae1e8628cf35fb6b977d9b553f3.js.map