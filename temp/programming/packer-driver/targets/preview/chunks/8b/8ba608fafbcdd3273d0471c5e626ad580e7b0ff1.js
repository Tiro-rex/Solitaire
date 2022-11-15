System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Vec2, Vec3, Color, GameManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ReaveldCard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "615f5YpBt5AKoRvQbPBObNF", "ReaveldCard", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ReaveldCard = (_dec = ccclass('ReaveldCard'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec(_class = (_class2 = class ReaveldCard extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardRank", _descriptor, this);

          _initializerDefineProperty(this, "cardFace", _descriptor2, this);

          _initializerDefineProperty(this, "game", _descriptor3, this);

          this.cardColor = void 0;
          this.cardace = void 0;
          this.cardNumber = void 0;
          this.isMoving = void 0;
          this.distance = void 0;
          this.touchStart = new Vec2();
          this.offSet = new Vec2();
          this.newPosition = new Vec3();
          this.lastPosition = new Vec2();
          this.zoomPercentage = 100;
          this.lastZoomPercentage = 100;
        }

        init(data) {
          // CARDS_ARRAY.values()
          // console.log(data)
          this.cardFace.string = data.suit;
          this.cardRank.string = data.rank;
          this.cardNumber = data.rank;
          this.cardace = data.suit;

          if (this.cardFace.string == 'h' || this.cardFace.string == 'd') {
            this.cardRank.color = new Color(255, 0, 0);
            this.cardFace.color = new Color(255, 0, 0);
          } else if (this.cardFace.string == 's' || this.cardFace.string == 'c') {
            this.cardRank.color = new Color(0, 0, 0, 255);
            this.cardFace.color = new Color(0, 0, 0, 255);
          }

          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this)); // this.game.mainArea();
        }

        onTouchStart(e) {
          if (e._allTouches.length == 2) {
            this.distance = 0;
            this.distance = Vec2.distance(e._allTouches[0]._point, e._allTouches[1]._point);
          }

          this.touchStart = e.getUILocation();
          Vec2.subtract(this.offSet, this.node.getParent().getPosition(), this.touchStart);
          console.log("heyys", this.cardace, this.cardNumber);
        }

        onMoveStart(e) {
          // if (e._allTouches.length == 1) {
          // this.move(e);
          // }
          this.lastPosition = e.getUILocation();
          Vec2.subtract(this.offSet, this.touchStart, this.lastPosition);
          var nodePos = this.node.getPosition();
          this.node.setPosition(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.5);
          this.touchStart = this.lastPosition;
          console.log("heyys3 ", this.node.getPosition());
          console.log("lastPos", this.lastPosition); // this.node.worldPosition = this.newPosition;
          // this.newPosition = new Vec3(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.);
        }

        onTouchEnd(e) {
          // console.log("heyys", e);
          this.node.worldPosition = this.newPosition;
          console.log("Position", this.node.worldPosition);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardFace", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec4], {
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
//# sourceMappingURL=8ba608fafbcdd3273d0471c5e626ad580e7b0ff1.js.map