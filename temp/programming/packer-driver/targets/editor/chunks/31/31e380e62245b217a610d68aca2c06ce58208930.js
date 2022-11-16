System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Card;

  function _reportPossibleCrUseOfPile(extras) {
    _reporterNs.report("Pile", "./Pile", _context.meta, extras);
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
          this.pile = void 0;
          this.pileIndex = 0;

          this.pileChanged = () => {};

          this.pileIndexChanged = () => {};

          this.faceUpChanged = () => {};

          this.faceUp_ = false;
        }

        get faceUp() {
          return this.faceUp_;
        }

        set faceUp(faceUp) {
          if (this.faceUp_ === faceUp) return;
          const oldFaceUp = this.faceUp_; //const op=new
          // 
        }

        doSetFaceUp(faceUp) {
          this.faceUp_ = faceUp;
          this.faceUpChanged();
        }

        onPileChanged(newPile, newPileIndex) {
          if (this.pile === newPile) {//this.onPileChanged(newPileIndex);
          } else {
            this.pile = newPile;
            this.pileIndex = newPileIndex;
          }

          if (this.pile) {}

          this.pileChanged();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=31e380e62245b217a610d68aca2c06ce58208930.js.map