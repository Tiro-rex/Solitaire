System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Vec2, Vec3, ReaveldCard, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ReaveldCard = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67016LY33pPjpMF7bkdwWyl", "GameScreen", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameScreen", GameScreen = (_dec = ccclass('GameScreen'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class GameScreen extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefeb", _descriptor, this);

          _initializerDefineProperty(this, "reaveldCard", _descriptor2, this);

          this.distance = void 0;
          this.touchStart = new Vec2();
          this.arrayOfCard = [];
          this.h = void 0;
          this.isMoving = void 0;
          this.offSet = new Vec2();
          this.newPosition = new Vec3();
          this.lastPosition = new Vec2();
        }

        OnLoad() {
          this.reaveldCard.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.reaveldCard.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
          this.reaveldCard.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        swapNode(e) {
          var uiPosition = e.getUILocation();
          Vec2.subtract(this.offSet, uiPosition, this.touchStart);
          this.touchStart = uiPosition;
          var nodePos = this.node.getWorldPosition();
          this.newPosition = new Vec3(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0);
        }

        onTouchEnd() {
          this.isMoving = false; // console.log("touchend : ", this.newPosition)

          this.node.worldPosition = this.newPosition;
        }

        OnClick() {
          this.getDeckOfCard();
        }

        getDeckOfCard() {
          //console.log("dhoom dhoom");
          for (var i = 0; i < 1; i++) {
            var card = instantiate(this.cardPrefeb);
            this.reaveldCard.addChild(card);
            card.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).init();
            this.h = this.arrayOfCard.push(card);
            console.log("Array", this.h);
          }
        } // init(){
        //     this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
        //     this.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
        //     this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardPrefeb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "reaveldCard", [_dec3], {
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
//# sourceMappingURL=e611db39e8fe81fbee94a94ce38fbac25afb8419.js.map