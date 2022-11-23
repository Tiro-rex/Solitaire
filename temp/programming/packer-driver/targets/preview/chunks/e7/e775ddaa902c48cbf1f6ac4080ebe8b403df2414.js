System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, PolygonCollider2D, Contact2DType, _dec, _class, _crd, ccclass, property, WinPile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      PolygonCollider2D = _cc.PolygonCollider2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64adESo+BLWpLdnXpD0A2h", "WinPile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("WinPile", WinPile = (_dec = ccclass('WinPile'), _dec(_class = class WinPile extends Component {
        onLoad() {
          var winCollider = this.node.getComponent(PolygonCollider2D);
          winCollider.on(Contact2DType.BEGIN_CONTACT, this.onContact, this);
        }

        onContact(self, other) {
          console.log("self", self);
          console.log("other", other);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e775ddaa902c48cbf1f6ac4080ebe8b403df2414.js.map