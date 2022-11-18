System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec2, Collider2D, PhysicsSystem2D, Contact2DType, cardMove, ReaveldCard, _dec, _class, _crd, ccclass, property, Pile;

  function _reportPossibleCrUseOfcardMove(extras) {
    _reporterNs.report("cardMove", "./GameConstant", _context.meta, extras);
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
      Vec2 = _cc.Vec2;
      Collider2D = _cc.Collider2D;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      cardMove = _unresolved_2.cardMove;
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
        constructor() {
          super(...arguments);
          this.offSet = new Vec2();
          this.cardR = void 0;
          this.snapParent = void 0;
        }

        start() {
          PhysicsSystem2D.instance.enable = true;
          var coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.cardR.getComponent(ReaveldCard)
        }

        init(array, len, count) {
          //console.log(array, len, count);
          for (var i = 0; i < len; i++) {
            //   let card1 = array.splice(0, 1);
            this.node.addChild(array[count - 1 + i]);
          }

          this.node.children[len - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).faceDown.active = false;
        }

        onBeginContact(self, other) {
          this.snapParent = self.node; // other.node.getComponent(ReaveldCard)

          if (self.tag == 1 && window.moveCard) {
            // //let newPos = self.node.getPosition();
            // this.node.addChild(other.node);
            // console.log("Parent-->", Parent)
            // // console.log("Postion collider", newPos);
            // //other.node.setPosition(newPos);
            // //other.node.setSiblingIndex(1);
            console.log("stack-->", self.tag); // cardMove.on("snapCard", this.snapCardToParent, this)
          }

          if (self.tag == 2 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
          }

          if (self.tag == 3 && window.moveCard) {
            console.log("stack-->", self.tag);
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }

          if (self.tag == 4 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
          }

          if (self.tag == 5 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
          }

          if (self.tag == 6 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
          }

          if (self.tag == 7 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
          }
        }

        snapCardToParent(card) {
          console.log("Card In Snap", card);
          this.snapParent.addChild(card);
          (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
            error: Error()
          }), cardMove) : cardMove).removeListener("snapCard", this.snapCardToParent, this);
        }

        delay(milliseconds, count) {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(count);
            }, milliseconds);
          });
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0abd709f1489d52ee26f7d01f9825230bb905730.js.map