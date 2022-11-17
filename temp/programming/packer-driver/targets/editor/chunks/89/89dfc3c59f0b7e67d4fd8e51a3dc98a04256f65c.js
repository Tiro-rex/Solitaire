System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec2, Collider2D, PhysicsSystem2D, Contact2DType, _dec, _class, _crd, ccclass, property, Pile;

  function _reportPossibleCrUseOfReaveldCard(extras) {
    _reporterNs.report("ReaveldCard", "./ReaveldCard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
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
        constructor(...args) {
          super(...args);
          this.offSet = new Vec2();
          this.cardR = void 0;
        }

        start() {
          PhysicsSystem2D.instance.enable = true;
          let coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.cardR.getComponent(ReaveldCard)
        }

        onBeginContact(self, other) {
          if (self.tag == 1 && window.moveCard) {
            let newPos = self.node.getParent().getPosition();
            console.log("Postion collider", newPos); //other.node.setPosition(newPos);
            //other.node.setSiblingIndex(1);

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
//# sourceMappingURL=89dfc3c59f0b7e67d4fd8e51a3dc98a04256f65c.js.map