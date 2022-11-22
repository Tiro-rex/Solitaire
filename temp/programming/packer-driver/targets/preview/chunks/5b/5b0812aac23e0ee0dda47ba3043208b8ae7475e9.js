System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Vec2, Collider2D, PhysicsSystem2D, Contact2DType, cardMove, ReaveldCard, _dec, _class, _crd, ccclass, property, Pile;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
          this.snapcard = false;
        }

        start() {
          PhysicsSystem2D.instance.enable = true;
          var coll = this.node.getComponent(Collider2D);
          coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this); // this.cardR.getComponent(ReaveldCard)
        }

        onDisable() {
          this.node.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        init(array, len, count) {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log(array, len, count);

            if (len == 1) {
              _this.node.addChild(array[count - 1]);
            } else {
              for (var i = 0; i < len; i++) {
                _this.node.addChild(array[count - 2 + i]);
              }
            }

            _this.node.children[len - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).faceDown.active = false;
          })();
        }

        onBeginContact(self, other) {
          this.snapParent = this.node; // console.log("Snaping Parent", this.snapParent);

          if (self.tag == 1 && window.moveCard) {
            this.snapcard = true;
            console.log("stack-->", self.tag);
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }

          if (self.tag == 2 && window.moveCard) {
            this.snapcard = true;
            console.log("stack-->", self.tag);
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }

          if (self.tag == 3 && window.moveCard) {
            console.log("stack-->", self.tag);
            this.snapcard = true;
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }

          if (self.tag == 4 && window.moveCard) {
            this.snapcard = true;
            console.log("stack-->", self.tag);
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }

          if (self.tag == 5 && window.moveCard) {
            console.log("stack-->", self.tag);
            this.snapcard = true;
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }

          if (self.tag == 6 && window.moveCard) {
            console.log("stack-->", self.tag);
            this.snapcard = true;
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }

          if (self.tag == 7 && window.moveCard) {
            console.log("stack-->", self.tag);
            this.snapcard = true;
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).on("snapCard", this.snapCardToParent, this);
          }
        }

        snapCardToParent(card) {
          this.node.removeChild(card);
          var index = this.node.children.length;
          this.snapParent.addChild(card);
          this.snapcard = true;
          (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
            error: Error()
          }), cardMove) : cardMove).removeListener("snapCard", this.snapCardToParent, this);
          this.node.children[index - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).faceDown.active = false;
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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5b0812aac23e0ee0dda47ba3043208b8ae7475e9.js.map