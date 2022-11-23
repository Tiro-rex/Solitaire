System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Button, math, DCard, PosSnap, CARDS_ARRAY, Pile, ReaveldCard, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, GameScreen;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfDCard(extras) {
    _reporterNs.report("DCard", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPosSnap(extras) {
    _reporterNs.report("PosSnap", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCARDS_ARRAY(extras) {
    _reporterNs.report("CARDS_ARRAY", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPile(extras) {
    _reporterNs.report("Pile", "./Pile", _context.meta, extras);
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
      DCard = _unresolved_2.DCard;
      PosSnap = _unresolved_2.PosSnap;
    }, function (_unresolved_3) {
      CARDS_ARRAY = _unresolved_3.CARDS_ARRAY;
    }, function (_unresolved_4) {
      Pile = _unresolved_4.Pile;
    }, function (_unresolved_5) {
      ReaveldCard = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "67016LY33pPjpMF7bkdwWyl", "GameScreen", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      window.moveCard = false;

      _export("GameScreen", GameScreen = (_dec = ccclass('GameScreen'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec(_class = (_class2 = class GameScreen extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefeb", _descriptor, this);

          _initializerDefineProperty(this, "reaveldCard", _descriptor2, this);

          _initializerDefineProperty(this, "deck", _descriptor3, this);

          _initializerDefineProperty(this, "resetdeckButton", _descriptor4, this);

          _initializerDefineProperty(this, "stack1", _descriptor5, this);

          _initializerDefineProperty(this, "stack2", _descriptor6, this);

          _initializerDefineProperty(this, "stack3", _descriptor7, this);

          _initializerDefineProperty(this, "stack4", _descriptor8, this);

          _initializerDefineProperty(this, "stack5", _descriptor9, this);

          _initializerDefineProperty(this, "stack6", _descriptor10, this);

          _initializerDefineProperty(this, "stack7", _descriptor11, this);

          this.allCardsArrays = [];
          this.SuffeledArray = [];
          this.h = void 0;
          this.h2 = [];
          this.lastindex = void 0;
          this.count = void 0;
          this.initiallyGeneratedCard = 0;
          this.playingCard = void 0;
          this.deckSnap = void 0;
        }

        // instantiationOfStack=true;
        onLaod() {}

        start() {
          (_crd && PosSnap === void 0 ? (_reportPossibleCrUseOfPosSnap({
            error: Error()
          }), PosSnap) : PosSnap).on("stackPos", this.snapCard, this); // PhysicsSystem2D.instance.enable = true;
          // this.stackcoll();

          this.SuffeledArray = _crd && CARDS_ARRAY === void 0 ? (_reportPossibleCrUseOfCARDS_ARRAY({
            error: Error()
          }), CARDS_ARRAY) : CARDS_ARRAY;
          this.Shuffel(this.SuffeledArray);
          this.generateAllCards(this.SuffeledArray);
          this.initilizeStack(); // snapLogic.on("ParentforSnap", this.snapForDeck, this)
        }

        OnClick() {
          if (this.initiallyGeneratedCard == 52) {
            this.deck.node.active = false;
            this.deck.interactable = false;
          } else {
            this.deckCard(this.allCardsArrays); // DCard.on("fromDeck", this.removeParentFrokmdeck, this);
          }
        }

        OnResetDeck() {
          this.reaveldCard.removeAllChildren();
          this.initiallyGeneratedCard = this.count;
          this.deck.node.active = true;
          this.deck.interactable = true;
        }

        deckCard(cardArray) {
          var card = cardArray[this.initiallyGeneratedCard++];
          this.reaveldCard.addChild(card);
          card.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).faceDown.active = false;
          this.h = this.h2.push(card); // window.moveCard = true;
        }

        removeParentFrokmdeck(card) {
          // snapLogic.on("ParentforSnap", this.snapForDeck, this)
          this.reaveldCard.removeChild(card);
          console.log("RemoveDeck");
          this.initiallyGeneratedCard += 1;
          this.count += 1;
          (_crd && DCard === void 0 ? (_reportPossibleCrUseOfDCard({
            error: Error()
          }), DCard) : DCard).removeListener("fromDeck", this.removeParentFrokmdeck, this);
        }

        snapForDeck(Sp) {
          console.log("gameScreenEvent", Sp); // let value = this.reaveldCard.children[1].getComponent(ReaveldCard).value
          // console.log("deck value", value
          // Sp.Sp.addChild();
          // lastCard.TOUCH_END();
        }

        snapCard(card) {
          console.log("herehr", card.Card.x);
          var stack1 = this.stack1.getPosition();
          var stack2 = this.stack2.getPosition();
          var stack3 = this.stack3.getPosition();
          var stack4 = this.stack4.getPosition();
          var stack5 = this.stack5.getPosition();
          var stack6 = this.stack6.getPosition();
          var stack7 = this.stack7.getPosition();

          if (stack1.x) {}
        }

        generateAllCards(cardArray) {
          var arr = [...cardArray];

          for (var i = 0; i < arr.length; i++) {
            var card = instantiate(this.cardPrefeb);
            card.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).init(arr[i]);
            this.allCardsArrays.push(card);
          }
        }

        Shuffel(data) {
          var currIndex = data.length,
              randomInadex;

          while (currIndex != 0) {
            randomInadex = Math.floor(math.random() * currIndex);
            currIndex--;
            [data[currIndex], data[randomInadex]] = [data[randomInadex], data[currIndex]];
          }

          return data;
        }

        initilizeStack() {
          this.count = 0;

          for (var i = 0; i < 7; i++) {
            this.count += i;
            var stack = this.defaultPlayArea(i + 1).getComponent(_crd && Pile === void 0 ? (_reportPossibleCrUseOfPile({
              error: Error()
            }), Pile) : Pile);
            stack.init(this.allCardsArrays, i + 1, this.count);
          }

          this.count += 7;
          this.initiallyGeneratedCard = this.count;
        }

        defaultPlayArea(stackNumber) {
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
        } // onDisable() {
        //     for (let i = 0; i <= 7; i++) {
        //         let pile = this.defaultPlayArea(i)
        //         let coll = pile.getComponent(Collider2D);
        //         coll.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        //     }
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "deck", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "resetdeckButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "stack1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "stack2", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "stack3", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "stack4", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "stack5", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "stack6", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "stack7", [_dec12], {
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
//# sourceMappingURL=f4b9408ca832a98cff9e5806f6e73bffb7a8d174.js.map