System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec2, Collider2D, PhysicsSystem2D, Contact2DType, cardMove, ReaveldCard, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Pile;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Node = _cc.Node;
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

      _export("Pile", Pile = (_dec = ccclass('Pile'), _dec2 = property(Node), _dec(_class = (_class2 = class Pile extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "DeckOfcard", _descriptor, this);

          this.offSet = new Vec2();
          this.cardR = void 0;
          this.snapParent = void 0;
          this.snapcard = false;
        }

        start() {
          PhysicsSystem2D.instance.enable = true;
          var coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.cardR.getComponent(ReaveldCard)
        }

        init(array, len, count) {
          var _this = this;

          return _asyncToGenerator(function* () {
            //console.log(array, len, count);
            for (var i = 0; i < len; i++) {
              yield _this.delay(200, _this.node.addChild(array[count - 1 + i]));
            }

            _this.node.children[len - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).faceDown.active = false;
          })();
        }

        onBeginContact(self, other) {
          this.snapParent = self.node; // if (self.tag == 1 && window.moveCard) {

          (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
            error: Error()
          }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          this.snapcard = true;
          console.log("stack-->", self.tag);
          console.log("SnapP", this.snapParent); // console.log("here----> <");
          //   //  }
          //     if (self.tag == 2 && window.moveCard) {
          //         cardMove.on("snapCard", this.snapCardToParent, this)
          //         this.snapcard = true;
          //         console.log("stack-->", self.tag);
          //     }
          //     if (self.tag == 3 && window.moveCard) {
          //         console.log("stack-->", self.tag);
          //         this.snapcard = true;
          //         cardMove.on("snapCard", this.snapCardToParent, this)
          //     }
          //     if (self.tag == 4 && window.moveCard) {
          //         cardMove.on("snapCard", this.snapCardToParent, this)
          //         this.snapcard = true;
          //         console.log("stack-->", self.tag);
          //     }
          //         cardMove.on("snapCard", this.snapCardToParent, this)
          //         this.snapcard = true;
          //     if (self.tag == 5 && window.moveCard) {
          //         console.log("stack-->", self.tag);
          //     }
          //     if (self.tag == 6 && window.moveCard) {
          //         cardMove.on("snapCard", this.snapCardToParent, this)
          //         this.snapcard = true;
          //         console.log("stack-->", self.tag);
          //     }
          //     if (self.tag == 7 && window.moveCard) {
          //         cardMove.on("snapCard", this.snapCardToParent, this)
          //         this.snapcard = true;
          //         console.log("stack-->", self.tag);
          //     }
        }

        snapCardToParent(card, len) {
          // console.log("Card In Snap", card);
          // console.log("before 1-->", this.snapParent.children.length);
          // console.log("before 2-->", this.node.children.length);
          // if (this.snapcard) {
          card.getParent();
          this.node.removeChild(card);
          var index = this.node.children.length;
          this.snapParent.addChild(card);
          (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
            error: Error()
          }), cardMove) : cardMove).removeListener("snapCard", this.snapCardToParent, this);
          this.node.children[index - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).faceDown.active = false; // }
          //console.log("hereris the LastIndex", lastindex)
          // console.log("after 1-->", this.snapParent.children.length);
          // console.log("after 2-->", this.node.children.length);
        } //Algo


        SortAlgo() {///  this.node.removeChild
        }

        delay(milliseconds, count) {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(count);
            }, milliseconds);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DeckOfcard", [_dec2], {
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
//# sourceMappingURL=1f7caeaed32c04f3b1843200515c60b1ceb7771a.js.map