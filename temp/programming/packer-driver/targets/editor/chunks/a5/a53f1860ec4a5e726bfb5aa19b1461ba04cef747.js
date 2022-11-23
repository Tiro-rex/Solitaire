System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Collider2D, PhysicsSystem2D, Contact2DType, cardMove, snapLogic, ReaveldCard, _dec, _class, _crd, ccclass, property, Pile;

  function _reportPossibleCrUseOfcardMove(extras) {
    _reporterNs.report("cardMove", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsnapLogic(extras) {
    _reporterNs.report("snapLogic", "./GameConstant", _context.meta, extras);
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
      Collider2D = _cc.Collider2D;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      cardMove = _unresolved_2.cardMove;
      snapLogic = _unresolved_2.snapLogic;
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
        constructor(...args) {
          super(...args);
          this.offCard = void 0;
          this.cardR = void 0;
          this.snapParent = void 0;
        }

        // snapcard: boolean = false;
        start() {
          PhysicsSystem2D.instance.enable = true;
          let coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.cardR.getComponent(ReaveldCard)
        }

        onDisable() {
          this.node.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        async init(array, len, count) {
          // console.log(array, len, count);
          // if (len == 1) {
          //     console.log("ifloop")
          //     this.node.addChild(array[count - 1]);
          // }
          // else {
          for (let i = 0; i < len; i++) {
            await this.delay(200, this.node.addChild(array[count + i]));
          } // }


          this.node.children[len - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).faceDown.active = false;
        }

        onBeginContact(self, other) {
          this.snapParent = self.node;
          this.cardR = other.node;
          (_crd && snapLogic === void 0 ? (_reportPossibleCrUseOfsnapLogic({
            error: Error()
          }), snapLogic) : snapLogic).emit("ParentforSnap", {
            Sp: this.snapParent,
            c: this.cardR
          }); // console.log("hhihihi", self);
          // console.log({ sp: this.snapParent, c: this.cardR });
          // console.log("Snaping Parent", this.snapParent);

          if (self.tag == 1 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
          }

          if (self.tag == 2 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
          }

          if (self.tag == 3 && window.moveCard) {
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
            console.log("stack-->", self.tag);
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
        } // checkBeforesnap() {
        //     console.log("card", value)
        // }
        // checkindex()
        // {
        //     let index = this.node.children.length;
        //     if(index==0){
        //         this.snapParent.addChildc
        //     }
        // }


        snapCardToParent(card) {
          let indexforstack = this.snapParent.children.length;
          let index = this.node.children.length;
          this.node.removeChild(card);
          this.node.children[index - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).faceDown.active = false;
          let value = this.cardR.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).value;

          if (indexforstack <= 0) {
            return;
          }

          let cardInStack = this.snapParent.children[index - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).value;

          if (index == 0) {
            this.node.addChild(card);
          }

          console.log("card  ", value.toString());
          console.log("cardStack  ", cardInStack.toString());

          if (value + 1 == cardInStack) {
            this.snapParent.addChild(card);
          } else {
            console.log("elsePart");
          } // this.snapParent.children[indexforstack - 1].getComponent(ReaveldCard).faceDown.active = false;


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
//# sourceMappingURL=a53f1860ec4a5e726bfb5aa19b1461ba04cef747.js.map