System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Color, Ranks, _dec, _class, _crd, ccclass, property, DeckOfCard;

  function _reportPossibleCrUseOfColor(extras) {
    _reporterNs.report("Color", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRanks(extras) {
    _reporterNs.report("Ranks", "./GameConstant", _context.meta, extras);
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
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "615f5YpBt5AKoRvQbPBObNF", "DeckOfCard", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", DeckOfCard = (_dec = ccclass('DeckOfCard'), _dec(_class = class DeckOfCard extends Component {
        randCard() {
          (_crd && Color === void 0 ? (_reportPossibleCrUseOfColor({
            error: Error()
          }), Color) : Color).type;
          _crd && Ranks === void 0 ? (_reportPossibleCrUseOfRanks({
            error: Error()
          }), Ranks) : Ranks;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a6cf3853e9afa2a6b344c8d638f1b818384e55b.js.map