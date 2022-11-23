System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Collider, _dec, _class, _crd, ccclass, property, WinPile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider = _cc.Collider;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64adESo+BLWpLdnXpD0A2h", "WinPile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WinPile", WinPile = (_dec = ccclass('WinPile'), _dec(_class = class WinPile extends Component {
        start() {
          var winCollider = this.node.getComponent(Collider);
          winCollider.on("onCollisionEnter", this.onCollisionEnter, this);
        }

        onCollisionEnter(self, other) {
          console.log("self", self);
          console.log("other", other);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=16cdd78352a935a2a76f339acbf2cd9eb9860a8e.js.map