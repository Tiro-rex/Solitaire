System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Label, Vec2, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _class3, _crd, ccclass, property, ReaveldCard;

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

      _export("default", ReaveldCard = (_dec = ccclass('ReaveldCard'), _dec2 = property(Label), _dec3 = property(Label), _dec(_class = (_class2 = (_class3 = class ReaveldCard extends Component {
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
          this.touchTracking_ = false;
          this.touchId_ = 0;
          this.touchInDeadZone_ = false;
          this.touchStartX_ = 0;
          this.touchStartY_ = 0;
          this.lastTouchEndTimeStamp_ = 0;
        }

        init() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        onTouchStart(e, id, x, y, timeStamp) {
          if (!this.touchTracking_) {
            this.touchId_ = id;
            this.touchTracking_ = true;
            this.touchInDeadZone_ = true;
            this.touchStartX_ = x;
            this.touchStartY_ = y;
          }

          console.log("heyys");
          this.touchStart = e.getUILocation();
          console.log("heyys", this.touchStart);
        }

        onMoveStart(e, id, x, y, timeStamp) {
          if (this.touchTracking_ && this.touchId_ === id) {
            let dx = x - this.touchStartX_;
            let dy = y - this.touchStartY_;

            if (this.touchInDeadZone_) {
              const dLenSq = dx * dx + dy * dy;

              if (dLenSq > 5 * 5) {
                const dlen = Math.sqrt(dLenSq);
                dx /= dlen;
                dy /= dlen;
                this.touchStartX_ += 5 * dx;
                this.touchStartY_ += 5 * dy;
                this.touchInDeadZone_ = false;
              }
            }
          }

          console.log("heyys3 ", e.getUILocation);
        }

        onTouchEnd(e) {
          console.log("heyys", e); // this.node.worldPosition = this.newPosition;

          console.log("Position", this.node.worldPosition);
        }

      }, _class3.TOUCH_DEADZONE = 5, _class3.TOUCH_DEADZONE_SQ = 5 * 5, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardRank", [_dec2], {
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
//# sourceMappingURL=f7e16a6217a707fd976e3b0b98a26b07d9c011b2.js.map