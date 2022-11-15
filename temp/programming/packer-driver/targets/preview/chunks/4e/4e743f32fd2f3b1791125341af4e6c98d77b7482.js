System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Card;

  return {
    setters: [function (_cc) {
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
        randCardGenrate() {//for(let i ; i>CARDS_ARRAY.length;i++){
          //}
          //     for(const[Suits,Color]of s52SuitsColors){
          //     for(const rank of s52Ranks){
          //         const card = this.getComponent(GameScreen);
          //         let color=this.getComponent(ReaveldCard)
          //         if(s52SuitsColors){
          //         color.cardRank.color.set(255,0,0);
          //         }
          //         else{
          //         color.cardFace.color.set(0,0,0);
          //         }
          //     }
          // }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e743f32fd2f3b1791125341af4e6c98d77b7482.js.map