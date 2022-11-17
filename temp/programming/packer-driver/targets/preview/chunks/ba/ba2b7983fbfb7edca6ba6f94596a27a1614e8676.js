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
          var coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        onBeginContact(self, other) {
          if (other.tag == 1) {
            console.log("stack1");
          }

          if (other.tag == 2) {
            console.log("stack2");
          }

          if (other.tag == 3) {
            console.log("stack3");
          }

          if (other.tag == 4) {
            console.log("stack4");
          }

          if (other.tag == 5) {
            console.log("stack5");
          }

          if (other.tag == 6) {
            console.log("stack6");
          }

          if (other.tag == 7) {
            console.log("stack7");
          } // let selfcollider = event.selfCollider;
          // let otherCollider = event.otherCollider;
          // console.log("self", selfcollider);
          // console.log("other", otherCollider);

        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ba2b7983fbfb7edca6ba6f94596a27a1614e8676.js.map