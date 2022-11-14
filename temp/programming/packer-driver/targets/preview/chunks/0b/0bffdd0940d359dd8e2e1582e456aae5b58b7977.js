System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, CARDS_ARRAY, Color, Ranks, Suits, _dec, _class, _crd, s52SuitsColors, s52Ranks, ccclass, property, Card;

  function _reportPossibleCrUseOfCARDS_ARRAY(extras) {
    _reporterNs.report("CARDS_ARRAY", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfColor(extras) {
    _reporterNs.report("Color", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRanks(extras) {
    _reporterNs.report("Ranks", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSuits(extras) {
    _reporterNs.report("Suits", "./GameConstant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_unresolved_2) {
      CARDS_ARRAY = _unresolved_2.CARDS_ARRAY;
    }, function (_unresolved_3) {
      Color = _unresolved_3.Color;
      Ranks = _unresolved_3.Ranks;
      Suits = _unresolved_3.Suits;
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
          for (var i = 0; i < (_crd && CARDS_ARRAY === void 0 ? (_reportPossibleCrUseOfCARDS_ARRAY({
            error: Error()
          }), CARDS_ARRAY) : CARDS_ARRAY).length; i++) {}
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0bffdd0940d359dd8e2e1582e456aae5b58b7977.js.map