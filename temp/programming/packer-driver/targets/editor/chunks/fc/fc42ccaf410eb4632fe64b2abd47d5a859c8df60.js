System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Pile;

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
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

      _cclegacy._RF.push({}, "48346LAGsxENaIdWIZ3zlCs", "Pile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pile", Pile = (_dec = ccclass('Pile'), _dec(_class = class Pile extends Component {
        constructor(...args) {
          super(...args);

          this.cardsChanged = () => {};

          this.maxFanChanged = () => {};

          this.cards_ = [];
          this.maxFan_ = 999;
        }

        get length() {
          return this.cards_.length;
        }

        get maxFan() {
          return this.maxFan_;
        }

        set maxFan(maxFan) {
          maxFan = Math.max(0, maxFan);
          if (this.maxFan_ === maxFan) return;
          const oldMaxFan = this.maxFan_;
          const op = new PileMaxFanoperation(this, oldMaxFan, maxFan);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fc42ccaf410eb4632fe64b2abd47d5a859c8df60.js.map