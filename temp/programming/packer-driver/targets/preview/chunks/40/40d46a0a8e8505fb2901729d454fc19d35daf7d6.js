System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Color, Suits, _dec, _class, _crd, ccclass, property, DeckOfCard;

  function _reportPossibleCrUseOfColor(extras) {
    _reporterNs.report("Color", "./GameConstant", _context.meta, extras);
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
      Color = _unresolved_2.Color;
      Suits = _unresolved_2.Suits;
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
          }), Color) : Color).type ? 1 : 0;
          _crd && Suits === void 0 ? (_reportPossibleCrUseOfSuits({
            error: Error()
          }), Suits) : Suits;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=40d46a0a8e8505fb2901729d454fc19d35daf7d6.js.map