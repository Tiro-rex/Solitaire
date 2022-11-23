System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Collider, PhysicsSystem, _dec, _class, _crd, ccclass, property, WinPile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider = _cc.Collider;
      PhysicsSystem = _cc.PhysicsSystem;
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
          PhysicsSystem.instance.enable = true;
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
//# sourceMappingURL=5c84603840fb7ef09729dee47b2f6e2e438692a0.js.map