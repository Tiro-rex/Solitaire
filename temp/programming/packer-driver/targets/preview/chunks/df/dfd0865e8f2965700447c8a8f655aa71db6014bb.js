System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, GameManager, PileMaxFanOperation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Pile;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCard(extras) {
    _reporterNs.report("Card", "./Card", _context.meta, extras);
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
    }, function (_unresolved_2) {
      GameManager = _unresolved_2.GameManager;
    }, function (_unresolved_3) {
      PileMaxFanOperation = _unresolved_3.PileMaxFanOperation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "48346LAGsxENaIdWIZ3zlCs", "Pile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Pile", Pile = (_dec = ccclass('Pile'), _dec2 = property(_crd && GameManager === void 0 ? (_reportPossibleCrUseOfGameManager({
        error: Error()
      }), GameManager) : GameManager), _dec(_class = (_class2 = class Pile extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "game", _descriptor, this);

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

        dotSetMaxFan(maxFan) {
          this.maxFan_ = maxFan;
          this.maxFanChanged();
        } //     public sortByRank() {
        //         this.cards_.sort((a, b) => {
        //             if (a.rank > b.rank) return -1;
        //             if (a.rank < b.rank) return 1;
        //             if (a.colour < b.colour) return -1;
        //             if (a.colour > b.colour) return 1;
        //             if (a.suit < b.suit) return -1;
        //             if (a.suit > b.suit) return 1;
        //             return 0;
        //         });
        //         for (let i = 0; i < this.cards_.length; ++i) {
        // //            this.cards_[i].onPileIndexChanged(i);
        //         }
        //         this.cardsChanged();
        //     }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "game", [_dec2], {
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
//# sourceMappingURL=dfd0865e8f2965700447c8a8f655aa71db6014bb.js.map