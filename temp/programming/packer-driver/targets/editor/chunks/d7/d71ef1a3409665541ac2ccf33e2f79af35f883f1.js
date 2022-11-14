System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, GameManager;

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f64adESo+BLWpLdnXpD0A2h", "GameManager", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec(_class = (_class2 = class GameManager extends Component {
        OnLoad() {// this.cardDeck.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
          // this.cardDeck.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
          // this.cardDeck.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
        }

        start() {}

        update(deltaTime) {}

      }, (_applyDecoratedDescriptor(_class2.prototype, "OnLoad", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "OnLoad"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d71ef1a3409665541ac2ccf33e2f79af35f883f1.js.map