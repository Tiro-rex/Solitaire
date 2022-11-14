System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Vec3, Vec2, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, GameController;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDeck(extras) {
    _reporterNs.report("Deck", "./DeckOfCard", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64adESo+BLWpLdnXpD0A2h", "GameController", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameController", GameController = (_dec = ccclass('GameController'), _dec2 = property(Node), _dec(_class = (_class2 = class GameController extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardDeck", _descriptor, this);

          this.distance = 0;
          this.touchStart = new Vec2();
          this.newPosition = new Vec3();
          this.offSet = new Vec2();
          this.isMoving = false;
        }

        OnLoad() {
          this.cardDeck.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.cardDeck.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
          this.cardDeck.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        onTouchStart(e) {
          // console.log('onTouchStart camera : ', e.getUILocation());
          // this.touch = true;
          if (e._allTouches.length == 2) {
            this.distance = 0;
            this.distance = Vec2.distance(e._allTouches[0]._point, e._allTouches[1]._point);
          }

          this.touchStart = e.getUILocation();
        }

        onMove(e) {
          // this.lastPosition = this.node.getWorldPosition() as unknown as Vec2;
          if (e._allTouches.length == 1) {
            this.swapNode(e);
            this.isMoving = true;
          }
        }

        swapNode(e) {
          // this.node.worldPosition = new Vec3(this.lastPosition.x, this.lastPosition.y, 0);
          var uiPosition = e.getUILocation();
          Vec2.subtract(this.offSet, uiPosition, this.onTouchStart);
          this.touchStart = uiPosition;
          var nodePos = this.node.getWorldPosition();
          var xAsis = nodePos.x - this.offSet.x;
          var yAxis = nodePos.y - this.offSet.y; // console.log("xAxis yAxis : ", xAsis, yAxis);

          this.newPosition = new Vec3(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0);
        }

        start() {}

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardDeck", [_dec2], {
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
//# sourceMappingURL=23279abd48de4f3ed1dbd7b67c1c54b6db27d9b8.js.map