System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Label, Vec2, Vec3, Color, cardMove, DCard, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ReaveldCard;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfcardMove(extras) {
    _reporterNs.report("cardMove", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDCard(extras) {
    _reporterNs.report("DCard", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameScreen(extras) {
    _reporterNs.report("GameScreen", "./GameScreen", _context.meta, extras);
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
      cardMove = _unresolved_2.cardMove;
      DCard = _unresolved_2.DCard;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "615f5YpBt5AKoRvQbPBObNF", "ReaveldCard", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("default", ReaveldCard = (_dec = ccclass('ReaveldCard'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = (_class2 = class ReaveldCard extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardRank", _descriptor, this);

          _initializerDefineProperty(this, "cardRank2", _descriptor2, this);

          _initializerDefineProperty(this, "cardFace", _descriptor3, this);

          _initializerDefineProperty(this, "faceUp", _descriptor4, this);

          _initializerDefineProperty(this, "faceDown", _descriptor5, this);

          this.cardColor = void 0;
          this.cardace = void 0;
          this.cardNumber = void 0;
          this.touchStart = new Vec2();
          this.offSet = new Vec2();
          this.newPosition = new Vec3();
          this.lastPosition = new Vec2();
          this.zoomPercentage = 100;
          this.lastZoomPercentage = 100;
          this.gameS = void 0;
          this.parentToCheck = void 0;
        }

        onLaod() {}

        init(data) {
          // let get = this.game.Shuffel(data)
          // console.log(get);
          this.cardFace.string = data.suit;
          this.cardRank.string = data.rank;
          this.cardRank2.string = data.rank;
          this.cardNumber = data.rank;

          if (this.cardFace.string == '♥' || this.cardFace.string == '♦') {
            this.cardace = data.suit;
            this.cardRank.color = new Color(255, 0, 0);
            this.cardRank2.color = new Color(255, 0, 0);
            this.cardFace.color = new Color(255, 0, 0);
          } else if (this.cardFace.string == '♠' || this.cardFace.string == '♣') {
            this.cardRank.color = new Color(0, 0, 0, 255);
            this.cardRank2.color = new Color(0, 0, 0, 255);
            this.cardFace.color = new Color(0, 0, 0, 255);
          }

          this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          this.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
          this.MatchingAlgo(data);
        }

        onTouchStart(e) {
          this.touchStart = e.getUILocation();
          Vec2.subtract(this.offSet, this.node.getParent().getPosition(), this.touchStart); //  console.log("heyys", this.cardace, this.cardNumber);
          //console.log("Parent", this.node)

          this.parentToCheck = this.node.getParent().name;
        }

        onMoveStart(e) {
          this.lastPosition = e.getUILocation();
          Vec2.subtract(this.offSet, this.touchStart, this.lastPosition);
          let nodePos = this.node.getPosition();
          this.node.setPosition(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.5);
          this.touchStart = this.lastPosition; // this.node.removeFromParent();

          window.moveCard = true;
        }

        onTouchEnd(p) {
          if (this.parentToCheck.toString() == 'ReavledCard') {
            //console.log("herere_==><")
            (_crd && DCard === void 0 ? (_reportPossibleCrUseOfDCard({
              error: Error()
            }), DCard) : DCard).emit("fromDeck", this.node);
          } else {
            // console.log(this.parentToCheck.toString());
            (_crd && cardMove === void 0 ? (_reportPossibleCrUseOfcardMove({
              error: Error()
            }), cardMove) : cardMove).emit("snapCard", this.node);
          }
        }

        MatchingAlgo(data) {
          data.rank.sort((a, b) => {
            if (a.data.rank > b.data.rank) return -1;
            if (a.data.rank < b.data.rank) return 1;
            if (a.data.suit > b.data.suit) return -1;
            if (a.data.suit < b.data.suit) return 1;
            if (a.data.colour > b.data.colour) return -1;
            if (a.data.colour > b.data.colour) return 1;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardRank", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardRank2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cardFace", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "faceUp", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "faceDown", [_dec6], {
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
//# sourceMappingURL=dad1d911b07f94c5316c80ec4ac871d5b884cb95.js.map