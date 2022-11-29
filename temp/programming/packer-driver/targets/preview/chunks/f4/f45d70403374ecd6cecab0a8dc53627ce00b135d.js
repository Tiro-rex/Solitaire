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
          this.remove = false;
          this.array = [];
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

        snapCard(cardPos) {
          // console.log("stackp1", stackp1);
          var stackp1 = this.stack1.getPosition();
          var stackp2 = this.stack2.getPosition();
          var stackp3 = this.stack3.getPosition();
          var stackp4 = this.stack4.getPosition();
          var stackp5 = this.stack5.getPosition();
          var stackp6 = this.stack6.getPosition();
          var stackp7 = this.stack7.getPosition();

          if (Math.floor(stackp1.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child);
            this.stack1.addChild(cardPos.Child);
          }

          if (Math.floor(stackp2.x) == cardPos.cardPos.x) {
            // console.log("para", cardPos);
            cardPos.parent.removeChild(cardPos.Child);
            var len = cardPos.parent.children.length;
            var lentgh2 = this.stack2.children.length;
            var selectedCardVlaue = cardPos.Child.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;
            var stacckCardavlue = this.stack2.children[lentgh2 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);

            if (stacckCardavlue == selectedCardVlaue + 1) {
              if (len = +1 || len == null) {
                cardPos.parent.children[len - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
                  error: Error()
                }), ReaveldCard) : ReaveldCard).faceDown.active = false; // return;

                var selected = this.stack2.addChild(cardPos.Child);
                len = -1;
              }
            } else {
              cardPos.parent.addChild(cardPos.Child);
            } // else if (len - 1) {
            //     cardPos.parent.addChild(cardPos.ChildS);
            // }

          }

          if (Math.floor(stackp3.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child);
            var _len = cardPos.parent.children.length;
            var _lentgh = this.stack3.children.length;
            var _selectedCardVlaue = cardPos.Child.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            var _stacckCardavlue = this.stack3.children[_lentgh - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            console.log("selected Card Value", _selectedCardVlaue);
            console.log("StackCardValue", _stacckCardavlue);

            if (_stacckCardavlue == _selectedCardVlaue + 1) {
              if (_len + 1 || _len == null) {
                cardPos.parent.children[_len - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
                  error: Error()
                }), ReaveldCard) : ReaveldCard).faceDown.active = false; // return;

                this.stack3.addChild(cardPos.Child);
                _len = -1;
              }
            } else {
              cardPos.parent.addChild(cardPos.Child);
            }
          }

          if (Math.floor(stackp4.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child);
            var _len2 = cardPos.parent.children.length;
            var _lentgh2 = this.stack4.children.length;
            var _selectedCardVlaue2 = cardPos.Child.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            var _stacckCardavlue2 = this.stack4.children[_lentgh2 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            console.log("selected Card Value", _selectedCardVlaue2);
            console.log("StackCardValue", _stacckCardavlue2);

            if (_stacckCardavlue2 == _selectedCardVlaue2 + 1) {
              if (_len2 + 1 || _len2 == null) {
                cardPos.parent.children[_len2 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
                  error: Error()
                }), ReaveldCard) : ReaveldCard).faceDown.active = false; // return;

                this.stack4.addChild(cardPos.Child);
                _len2 = -1;
              }
            } else {
              cardPos.parent.addChild(cardPos.Child);
            } // console.log("herehr", cardPos.cardPos.x);

          }

          if (Math.floor(stackp5.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child);
            var _len3 = cardPos.parent.children.length;
            var _lentgh3 = this.stack5.children.length;
            var _selectedCardVlaue3 = cardPos.Child.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            var _stacckCardavlue3 = this.stack5.children[_lentgh3 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            console.log("selected Card Value", _selectedCardVlaue3);
            console.log("StackCardValue", _stacckCardavlue3);

            if (_stacckCardavlue3 == _selectedCardVlaue3 + 1) {
              if (_len3 + 1 || _len3 == null) {
                cardPos.parent.children[_len3 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
                  error: Error()
                }), ReaveldCard) : ReaveldCard).faceDown.active = false; // return;

                this.stack5.addChild(cardPos.Child);
                _len3 = -1;
              }
            } else {
              cardPos.parent.addChild(cardPos.Child);
            }
          }

          if (Math.floor(stackp6.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child);
            var _len4 = cardPos.parent.children.length;
            var _lentgh4 = this.stack6.children.length;
            var _selectedCardVlaue4 = cardPos.Child.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            var _stacckCardavlue4 = this.stack6.children[_lentgh4 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            console.log("selected Card Value", _selectedCardVlaue4);
            console.log("StackCardValue", _stacckCardavlue4);

            if (_stacckCardavlue4 == _selectedCardVlaue4 + 1) {
              if (_len4 + 1 || _len4 == null) {
                cardPos.parent.children[_len4 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
                  error: Error()
                }), ReaveldCard) : ReaveldCard).faceDown.active = false; // return;

                this.stack6.addChild(cardPos.Child);
                _len4 = -1;
              }
            } else {
              cardPos.parent.addChild(cardPos.Child);
            }
          }

          if (Math.floor(stackp7.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child);
            var _len5 = cardPos.parent.children.length;
            var _lentgh5 = this.stack7.children.length;
            var _selectedCardVlaue5 = cardPos.Child.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            var _stacckCardavlue5 = this.stack7.children[_lentgh5 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
              error: Error()
            }), ReaveldCard) : ReaveldCard).value;

            if (_stacckCardavlue5 == _selectedCardVlaue5 + 1) {
              if (_len5 + 1 || _len5 == null) {
                cardPos.parent.children[_len5 - 1].getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
                  error: Error()
                }), ReaveldCard) : ReaveldCard).faceDown.active = false; // return;

                this.stack7.addChild(cardPos.Child);
                _len5 = -1;
              }
            } else {
              cardPos.parent.addChild(cardPos.Child);
            }

            console.log("selected Card Value", _selectedCardVlaue5);
            console.log("StackCardValue", _stacckCardavlue5); // else if (len - 1) {
            //     cardPos.parent.addChild(cardPos.ChildS);
            // }
          }
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
//# sourceMappingURL=f45d70403374ecd6cecab0a8dc53627ce00b135d.js.map