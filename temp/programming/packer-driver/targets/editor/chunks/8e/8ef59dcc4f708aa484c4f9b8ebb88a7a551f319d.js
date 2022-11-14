System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, Vec2, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ReaveldCard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Label = _cc.Label;
      Vec2 = _cc.Vec2;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "615f5YpBt5AKoRvQbPBObNF", "ReaveldCard", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ReaveldCard = (_dec = ccclass('ReaveldCard'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = class ReaveldCard extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardRank", _descriptor, this);

          _initializerDefineProperty(this, "cardface", _descriptor2, this);

          this.cardColor = void 0;
          this.cardFace = void 0;
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

        init() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        onTouchStart(e) {
          if (e._allTouches.length == 2) {
            this.distance = 0;
            this.distance = Vec2.distance(e._allTouches[0]._point, e._allTouches[1]._point);
          }

          this.touchStart = e.getUILocation(); // console.log("heyys", this.touchStart);
        }

        onMoveStart(e) {
          // if (e._allTouches.length == 1) {
          this.move(e); // }

          let movsd = e.getUILocation();
          console.log("heyys3 ", movsd, this.node.getPosition());
          this.node.worldPosition = this.newPosition;
        }

        onTouchEnd(e) {
          console.log("heyys", e); //  this.node.worldPosition = this.newPosition;
          // console.log("Position", this.node.worldPosition);
        }

        move(e) {
          let uiPosition = e.getUILocation();
          Vec2.subtract(this.offSet, uiPosition, this.touchStart);
          this.touchStart = uiPosition;
          let nodePos = this.node.getWorldPosition();
          let xAsis = nodePos.x - this.offSet.x;
          let yAxis = nodePos.y - this.offSet.y;
          let zoomPercentDiff = this.zoomPercentage - 100;
          const lx = -540 + 540 * zoomPercentDiff / 100;
          const dy = 420 + 960 * zoomPercentDiff / 100;
          const uy = 1500 - 960 * zoomPercentDiff / 100;
          const rx = 1620 - 540 * zoomPercentDiff / 100;

          if (xAsis < lx && yAxis < dy) {
            this.newPosition = new Vec3(lx, dy, 0);
          } else if (xAsis < lx && yAxis > uy) {
            this.newPosition = new Vec3(lx, uy, 0);
          } else if (xAsis > rx && yAxis < dy) {
            this.newPosition = new Vec3(rx, dy, 0);
          } else if (xAsis > rx && yAxis > uy) {
            this.newPosition = new Vec3(rx, uy, 0);
          } else if (xAsis > rx) {
            this.newPosition = new Vec3(rx, nodePos.y - this.offSet.y, 0);
          } else if (xAsis < lx) {
            this.newPosition = new Vec3(lx, nodePos.y - this.offSet.y, 0);
          } else if (yAxis < dy) {
            this.newPosition = new Vec3(nodePos.x - this.offSet.x, dy, 0);
          } else if (yAxis > uy) {
            this.newPosition = new Vec3(nodePos.x - this.offSet.x, uy, 0);
          } else {
            // console.log("xAxis yAxis : ", xAsis, yAxis);
            this.newPosition = new Vec3(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardface", [_dec3], {
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
//# sourceMappingURL=8ef59dcc4f708aa484c4f9b8ebb88a7a551f319d.js.map