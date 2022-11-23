System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, WinPile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64adESo+BLWpLdnXpD0A2h", "WinPile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WinPile", WinPile = (_dec = ccclass('WinPile'), _dec(_class = class WinPile extends Component {
        start() {// let winCollider = this.node.getComponent(BoxCollider);
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
//# sourceMappingURL=bebf64759b2dc8b3bbcb7a530579eb10471c453d.js.map