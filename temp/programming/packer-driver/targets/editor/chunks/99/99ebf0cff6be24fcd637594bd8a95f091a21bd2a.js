System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Button, math, CARDS_ARRAY, GameManager, ReaveldCard, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, GameScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCARDS_ARRAY(extras) {
    _reporterNs.report("CARDS_ARRAY", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Button = _cc.Button;
      math = _cc.math;
    }, function (_unresolved_2) {
      CARDS_ARRAY = _unresolved_2.CARDS_ARRAY;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      ReaveldCard = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67016LY33pPjpMF7bkdwWyl", "GameScreen", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameScreen", GameScreen = (_dec = ccclass('GameScreen'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec(_class = (_class2 = class GameScreen extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardPrefeb", _descriptor, this);

          _initializerDefineProperty(this, "reaveldCard", _descriptor2, this);

          _initializerDefineProperty(this, "deck", _descriptor3, this);

          _initializerDefineProperty(this, "game", _descriptor4, this);

          _initializerDefineProperty(this, "mainArea", _descriptor5, this);

          _initializerDefineProperty(this, "stack1", _descriptor6, this);

          _initializerDefineProperty(this, "stack2", _descriptor7, this);

          _initializerDefineProperty(this, "stack3", _descriptor8, this);

          _initializerDefineProperty(this, "stack4", _descriptor9, this);

          _initializerDefineProperty(this, "stack5", _descriptor10, this);

          _initializerDefineProperty(this, "stack6", _descriptor11, this);

          _initializerDefineProperty(this, "stack7", _descriptor12, this);

          this.arrayOfCard = [];
          this.arrayOfCard2 = [];
          this.h = void 0;
          this.h2 = void 0;
          this.lastindex = void 0;
        }

        start() {
          this.arrayOfCard2 = _crd && CARDS_ARRAY === void 0 ? (_reportPossibleCrUseOfCARDS_ARRAY({
            error: Error()
          }), CARDS_ARRAY) : CARDS_ARRAY;
          this.Shuffel(this.arrayOfCard2);
          this.stack();
          this.onCollisionEnter(this.reaveldCard);
        }

        OnClick() {
          if (this.h == 52) {
            this.deck.interactable = false;
          } else {
            this.creatCard();
          } // console.log("here-->", this.h)
          // this.getComponent(Card).init();

        }

        creatCard() {
          //console.log("dhoom dhoom");
          // for (let i = 0; i < 1; i++) {
          let card = instantiate(this.cardPrefeb);
          this.reaveldCard.addChild(card);
          card.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).init(this.arrayOfCard2[0]);
          this.arrayOfCard2.splice(0, 1); // console.log("heere-->", this.arrayOfCard2.length)

          this.h = this.arrayOfCard.push(card);
          console.log("Array", this.h);
          card.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).faceDown.active = false;
        }

        Shuffel(data) {
          let currIndex = data.length,
              randomInadex;

          while (currIndex != 0) {
            randomInadex = Math.floor(math.random() * currIndex);
            currIndex--;
            [data[currIndex], data[randomInadex]] = [data[randomInadex], data[currIndex]];
          }

          return data;
        }

        async stacklogic(stack, num) {
          for (let i = 0; i < num; i++) {
            let card1 = instantiate(this.cardPrefeb);
            card1.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).init(this.arrayOfCard2[0]);
            this.arrayOfCard2.splice(0, 1);
            await this.delay(200, stack.addChild(card1));
            this.h2 = this.arrayOfCard.push(card1);
          }

          let lastCard = stack.children[stack.children.length - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard);
          lastCard.faceDown.active = false;
          lastCard.faceUp.active = true; // console.log("last", this.lastindex);
          //console.log("array", this.h2);
        }

        stack() {
          for (let i = 1; i <= 7; i++) {
            let stack = this.defaultPlayArea(i);
            this.stacklogic(stack, i);
          }
        }

        defaultPlayArea(stackNumber) {
          // let stack: number;
          switch (stackNumber) {
            case 1:
              return this.stack1;

            case 2:
              return this.stack2;

            case 3:
              return this.stack3;

            case 4:
              return this.stack4;

            case 5:
              return this.stack5;

            case 6:
              return this.stack6;

            case 7:
              return this.stack7;
          }
        }

        delay(milliseconds, count) {
          return new Promise(resolve => {
            setTimeout(() => {
              resolve(count);
            }, milliseconds);
          });
        }

        onCollisionEnter(event) {
          let selfcollider = event.selfCollider.getComponent("stack1");
          let otherCollider = event.otherCollider.getComponent("card");
          console.log("self", selfcollider.name);
          console.log("other", otherCollider.name);
        }

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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "deck", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "mainArea", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "stack1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stack2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stack3", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stack4", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "stack5", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "stack6", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "stack7", [_dec13], {
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
//# sourceMappingURL=99ebf0cff6be24fcd637594bd8a95f091a21bd2a.js.map