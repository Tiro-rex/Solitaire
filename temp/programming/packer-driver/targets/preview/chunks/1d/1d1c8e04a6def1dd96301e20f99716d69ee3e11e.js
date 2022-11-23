System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, BoxCollider, _dec, _class, _crd, ccclass, property, WinPile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      BoxCollider = _cc.BoxCollider;
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
          var winCollider = this.node.getComponent(BoxCollider);
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
//# sourceMappingURL=1d1c8e04a6def1dd96301e20f99716d69ee3e11e.js.map