System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Collider2D, PhysicsSystem2D, Contact2DType, ActionTypes, _dec, _class, _crd, ccclass, property, Pile;

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "./GameConstant", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Collider2D = _cc.Collider2D;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
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
          if (self.tag == 1 || (_crd && ActionTypes === void 0 ? (_reportPossibleCrUseOfActionTypes({
            error: Error()
          }), ActionTypes) : ActionTypes).MOVE_CARD) {
            console.log("stack1");
          }

          if (self.tag == 2) {
            console.log("stack2");
          }

          if (self.tag == 3) {
            console.log("stack3");
          }

          if (self.tag == 4) {
            console.log("stack4");
          }

          if (self.tag == 5) {
            console.log("stack5");
          }

          if (self.tag == 6) {
            console.log("stack6");
          }

          if (self.tag == 7) {
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
//# sourceMappingURL=fd43e1875c3195e6d1fe7c93c7674c7748bb3d11.js.map