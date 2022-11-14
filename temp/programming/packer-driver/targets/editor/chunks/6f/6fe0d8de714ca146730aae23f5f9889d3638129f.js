System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Color, Ranks, Suits, GameScreen, ReaveldCard, _dec, _class, _crd, s52SuitsColors, s52Ranks, ccclass, property, Card;

  function _reportPossibleCrUseOfColor(extras) {
    _reporterNs.report("Color", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRanks(extras) {
    _reporterNs.report("Ranks", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSuits(extras) {
    _reporterNs.report("Suits", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScreen(extras) {
    _reporterNs.report("GameScreen", "./GameScreen", _context.meta, extras);
  }

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
    }, function (_unresolved_2) {
      Color = _unresolved_2.Color;
      Ranks = _unresolved_2.Ranks;
      Suits = _unresolved_2.Suits;
    }, function (_unresolved_3) {
      GameScreen = _unresolved_3.GameScreen;
    }, function (_unresolved_4) {
      ReaveldCard = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8c874DX5NxCEKiD+vqcSPLF", "Card", undefined);

      s52SuitsColors = [[(_crd && Suits === void 0 ? (_reportPossibleCrUseOfSuits({
        error: Error()
      }), Suits) : Suits).SPADES, (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
        error: Error()
      }), Color) : Color).Black], [(_crd && Suits === void 0 ? (_reportPossibleCrUseOfSuits({
        error: Error()
      }), Suits) : Suits).CLUBS, (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
        error: Error()
      }), Color) : Color).Black], [(_crd && Suits === void 0 ? (_reportPossibleCrUseOfSuits({
        error: Error()
      }), Suits) : Suits).HEARTS, (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
        error: Error()
      }), Color) : Color).Red], [(_crd && Suits === void 0 ? (_reportPossibleCrUseOfSuits({
        error: Error()
      }), Suits) : Suits).DIAMONDS, (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
        error: Error()
      }), Color) : Color).Red]];
      s52Ranks = [(_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Ace, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Two, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Three, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Four, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Five, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Six, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Seven, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Eight, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Nine, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Ten, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Jack, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).Queen, (_crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
        error: Error()
      }), Ranks) : Ranks).King];
      ({
        ccclass,
        property
      } = _decorator);

      _export("Card", Card = (_dec = ccclass('Card'), _dec(_class = class Card extends Component {
        randCardGenrate() {
          for (const [Suits, Color] of s52SuitsColors) {
            for (const rank of s52Ranks) {
              const card = this.getComponent(_crd && GameScreen === void 0 ? (_reportPossibleCrUseOfGameScreen({
                error: Error()
              }), GameScreen) : GameScreen);
              let color = this.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
                error: Error()
              }), ReaveldCard) : ReaveldCard);

              if (s52SuitsColors) {
                color.cardRank.color.set(255, 0, 0);
              } else {
                color.cardFace.color.set(0, 0, 0);
              }
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6fe0d8de714ca146730aae23f5f9889d3638129f.js.map