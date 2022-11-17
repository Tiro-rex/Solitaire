System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Collider2D, PhysicsSystem2D, Contact2DType, ActionTypes, ReaveldCard, _dec, _class, _crd, ccclass, property, Pile;

  function _reportPossibleCrUseOfActionTypes(extras) {
    _reporterNs.report("ActionTypes", "./GameConstant", _context.meta, extras);
  }

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
      instantiate = _cc.instantiate;
      Collider2D = _cc.Collider2D;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      ActionTypes = _unresolved_2.ActionTypes;
    }, function (_unresolved_3) {
      ReaveldCard = _unresolved_3.default;
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

        async stacklogic(stack, num) {
          for (let i = 0; i < num; i++) {
            let card1 = instantiate(this.cardPrefeb);
            card1.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).init(this.arrayOfCard2[0]);
            this.arrayOfCard2.splice(0, 1);
            await this.delay(200, stack.addChild(card1));
            this.h2 = this.arrayOfCard.push(card1);
          }

          let lastCard = stack.children[stack.children.length - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard);
          lastCard.faceDown.active = false;
          lastCard.faceUp.active = true; // console.log("last", this.lastindex);
          //console.log("array", this.h2);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8a6b7846419bda7b249d9a785d2c06d078c59d3.js.map