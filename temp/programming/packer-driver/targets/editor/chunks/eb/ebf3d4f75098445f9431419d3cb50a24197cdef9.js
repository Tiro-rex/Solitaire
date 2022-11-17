System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Prefab, Collider2D, PhysicsSystem2D, Contact2DType, ActionTypes, ReaveldCard, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Pile;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Prefab = _cc.Prefab;
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

      _export("Pile", Pile = (_dec = ccclass('Pile'), _dec2 = property(Prefab), _dec(_class = (_class2 = class Pile extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardPrefeb", _descriptor, this);

          this.stackNumber = void 0;
          this.arrayOfCard = [];
          this.h2 = void 0;
        }

        init(data, arrayOfCard) {
          this.stackNumber = data;
          this.arrayOfCard = arrayOfCard;
          PhysicsSystem2D.instance.enable = true;
          let coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
          this.stacklogic(data);
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

        stacklogic(data) {
          for (let i = 0; i < 7; i++) {
            // let card1 = instantiate(this.cardPrefeb);
            // card1.getComponent(ReaveldCard).init(this.arrayOfCard[0]);
            let card1 = this.arrayOfCard.splice(0, 1);
            let carsof = this.node.addChild(card1[0]);
            console.log(card1[0]); // await this.delay(200, this.node.addChild(card1[0]));
            // this.h2 = this.arrayOfCard.push(card1);
            // }

            let lastCard = this.node.children[this.node.children.length - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard);
            lastCard.faceDown.active = false;
            lastCard.faceUp.active = true; // console.log("last", this.lastindex);
            //console.log("array", this.h2);
          }
        } // delay(milliseconds: number, count): Promise<number> {
        //     return new Promise<number>(resolve => {
        //         setTimeout(() => {
        //             resolve(count);
        //         }, milliseconds);
        //     });
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardPrefeb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ebf3d4f75098445f9431419d3cb50a24197cdef9.js.map