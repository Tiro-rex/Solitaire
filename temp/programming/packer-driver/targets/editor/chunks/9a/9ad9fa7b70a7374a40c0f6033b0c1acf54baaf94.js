System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Card;

  function _reportPossibleCrUseOfReaveldCard(extras) {
    _reporterNs.report("ReaveldCard", "./ReaveldCard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c874DX5NxCEKiD+vqcSPLF", "Card", undefined);

      //const s52SuitsColors: [Suits, Color][] = [[Suits.SPADES, Color.Black],[Suits.CLUBS, Color.Black],[Suits.HEARTS, Color.Red], [Suits.DIAMONDS, Color.Red]];
      //const s52Ranks: Ranks[] = [Ranks.Ace, Ranks.Two, Ranks.Three, Ranks.Four, Ranks.Five, Ranks.Six, Ranks.Seven, Ranks.Eight, Ranks.Nine, Ranks.Ten, Ranks.Jack, Ranks.Queen, Ranks.King];
      ({
        ccclass,
        property
      } = _decorator);

      _export("Card", Card = (_dec = ccclass('Card'), _dec(_class = class Card extends Component {
        constructor(...args) {
          super(...args);
          this.rcard = void 0;
          this.Ace = void 0;
        }

        start() {
          this.Ace = this.rcard.cardRank.string == 'A';
        }

        mainArea() {
          this.node.setParent(this.Ace, true);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9ad9fa7b70a7374a40c0f6033b0c1acf54baaf94.js.map