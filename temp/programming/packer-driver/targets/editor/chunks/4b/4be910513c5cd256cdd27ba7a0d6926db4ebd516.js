System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Collider2D, PhysicsSystem2D, Contact2DType, _dec, _class, _crd, ccclass, property, Pile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48346LAGsxENaIdWIZ3zlCs", "Pile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pile", Pile = (_dec = ccclass('Pile'), _dec(_class = class Pile extends Component {
        start() {
          PhysicsSystem2D.instance.enable = true;
          let coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        onBeginContact(self, other) {
          if (self.tag == 1 && window.moveCard) {
            console.log("stack-->", self.tag);
          }

          if (self.tag == 2 && window.moveCard) {
            console.log("stack-->", self.tag);
          }

          if (self.tag == 3 && window.moveCard) {
            console.log("stack-->", self.tag);
          }

          if (self.tag == 4 && window.moveCard) {
            console.log("stack-->", self.tag);
          }

          if (self.tag == 5 && window.moveCard) {
            console.log("stack-->", self.tag);
          }

          if (self.tag == 6 && window.moveCard) {
            console.log("stack-->", self.tag);
          }

          if (self.tag == 7 && window.moveCard) {
            console.log("stack-->", self.tag);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4be910513c5cd256cdd27ba7a0d6926db4ebd516.js.map