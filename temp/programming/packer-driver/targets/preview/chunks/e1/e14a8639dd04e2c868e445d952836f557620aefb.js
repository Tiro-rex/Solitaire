System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Color, Ranks, Suits, GameScreen, _dec, _class, _crd, s52SuitsColors, s52Ranks, ccclass, property, Card;

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
      }), Suits) : Suits).HEARTS, (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
        error: Error()
      }), Color) : Color).Red], [(_crd && Suits === void 0 ? (_reportPossibleCrUseOfSuits({
        error: Error()
      }), Suits) : Suits).DIAMONDS, (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
        error: Error()
      }), Color) : Color).Red], [(_crd && Suits === void 0 ? (_reportPossibleCrUseOfSuits({
        error: Error()
      }), Suits) : Suits).CLUBS, (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
        error: Error()
      }), Color) : Color).Black]];
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
          for (var [_Suits, _Color] of s52SuitsColors) {
            for (var rank of s52Ranks) {
              var card = _crd && GameScreen === void 0 ? (_reportPossibleCrUseOfGameScreen({
                error: Error()
              }), GameScreen) : GameScreen;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e14a8639dd04e2c868e445d952836f557620aefb.js.map