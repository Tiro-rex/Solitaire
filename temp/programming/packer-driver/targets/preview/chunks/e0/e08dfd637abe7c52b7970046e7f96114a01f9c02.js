System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, instantiate, CARDS_ARRAY, GameManager, PileMaxFanOperation, ReaveldCard, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Pile;

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
    }, function (_unresolved_2) {
      CARDS_ARRAY = _unresolved_2.CARDS_ARRAY;
    }, function (_unresolved_3) {
      GameManager = _unresolved_3.GameManager;
    }, function (_unresolved_4) {
      PileMaxFanOperation = _unresolved_4.PileMaxFanOperation;
    }, function (_unresolved_5) {
      ReaveldCard = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48346LAGsxENaIdWIZ3zlCs", "Pile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pile", Pile = (_dec = ccclass('Pile'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec(_class = (_class2 = class Pile extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardPrefeb", _descriptor, this);

          _initializerDefineProperty(this, "reaveldCard", _descriptor2, this);

          _initializerDefineProperty(this, "game", _descriptor3, this);

          this.arrayOfCard = [];
          this.arrayOfCard2 = [];
          this.h = void 0;

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

        dotSetMaxFan(maxFan) {
          this.maxFan_ = maxFan;
          this.maxFanChanged();
        }

        creatCard() {
          //console.log("dhoom dhoom");
          // for (let i = 0; i < 1; i++) {
          var card = instantiate(this.cardPrefeb);
          this.reaveldCard.addChild(card);
          card.getComponent(_crd && ReaveldCard === void 0 ? (_reportPossibleCrUseOfReaveldCard({
            error: Error()
          }), ReaveldCard) : ReaveldCard).init(this.arrayOfCard2[0]);
          this.arrayOfCard2.splice(0, 1);
          this.h = this.arrayOfCard.push(card);
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
//# sourceMappingURL=e08dfd637abe7c52b7970046e7f96114a01f9c02.js.map