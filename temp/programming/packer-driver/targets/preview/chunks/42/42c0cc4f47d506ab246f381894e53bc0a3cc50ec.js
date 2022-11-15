System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, Button, math, Card, CARDS_ARRAY, GameManager, PileMaxFanOperation, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, Pile;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCARDS_ARRAY(extras) {
    _reporterNs.report("CARDS_ARRAY", "./GameConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManager(extras) {
    _reporterNs.report("GameManager", "./GameManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPileMaxFanOperation(extras) {
    _reporterNs.report("PileMaxFanOperation", "./PileMaxFanOperation", _context.meta, extras);
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
      Card = _unresolved_2.Card;
    }, function (_unresolved_3) {
      CARDS_ARRAY = _unresolved_3.CARDS_ARRAY;
    }, function (_unresolved_4) {
      GameManager = _unresolved_4.GameManager;
    }, function (_unresolved_5) {
      PileMaxFanOperation = _unresolved_5.PileMaxFanOperation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48346LAGsxENaIdWIZ3zlCs", "Pile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pile", Pile = (_dec = ccclass('Pile'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Button), _dec5 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec(_class = (_class2 = class Pile extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefeb", _descriptor, this);

          _initializerDefineProperty(this, "reaveldCard", _descriptor2, this);

          _initializerDefineProperty(this, "deck", _descriptor3, this);

          _initializerDefineProperty(this, "game", _descriptor4, this);

          this.arrayOfCard = [];
          this.arrayOfCard2 = [];
          this.h = void 0;
          this.ramdom = math.random();

          this.cardsChanged = () => {};

          this.maxFanChanged = () => {};

          this.cards_ = [];
          this.maxFan_ = 999;
        }

        get length() {
          return this.cards_.length;
        }

        get maxFan() {
          return this.maxFan_;
        }

        set maxFan(maxFan) {
          maxFan = Math.max(0, maxFan);
          if (this.maxFan_ === maxFan) return;
          var oldMaxFan = this.maxFan_;
          var op = new (_crd && PileMaxFanOperation === void 0 ? (_reportPossibleCrUseOfPileMaxFanOperation({
            error: Error()
          }), PileMaxFanOperation) : PileMaxFanOperation)(this, oldMaxFan, maxFan); //this.game.addundoableOP(op);

          op.redo();
        }

        start() {
          this.arrayOfCard2 = _crd && CARDS_ARRAY === void 0 ? (_reportPossibleCrUseOfCARDS_ARRAY({
            error: Error()
          }), CARDS_ARRAY) : CARDS_ARRAY;
        }

        OnClick() {
          this.creatCard();

          if (this.h == 52) {
            this.deck.interactable = false;
          } // this.getComponent(Card).init();

        }

        dotSetMaxFan(maxFan) {
          this.maxFan_ = maxFan;
          this.maxFanChanged();
        }

        creatCard() {
          //console.log("dhoom dhoom");
          // for (let i = 0; i < 1; i++) {
          var card = instantiate(this.cardPrefeb);
          card.getComponent(_crd && Card === void 0 ? (_reportPossibleCrUseOfCard({
            error: Error()
          }), Card) : Card); //  this.reaveldCard.addChild(card);
          // card.getComponent(ReaveldCard).init(this.arrayOfCard2[0]);
          //this.arrayOfCard2.splice(0, 1);

          this.cards_.push(card);
          this.cardsChanged();
          return card;
          console.log("Array", this.h);
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=42c0cc4f47d506ab246f381894e53bc0a3cc50ec.js.map