System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, PileMaxFanOperation;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4d5dGy2qtLQILKAjNOCIpX", "PileMaxFanOperation", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PileMaxFanOperation", PileMaxFanOperation = (_dec = ccclass('PileMaxFanOperation'), _dec(_class = class PileMaxFanOperation extends Component {
        constructor(pile_, oldMaxFan_, newMaxFan_) {}

        undo() {
          this.pile_.doSetMaxFan(this.oldMaxFan_);
        }

        redo() {
          this.pile_.doSetMaxFan(this.newMaxFan_);
        }

        serialize(context) {
          context.writePile(this.pile_);
          context.write(this.oldMaxFan_);
          context.write(this.newMaxFan_);
        }

        get deserializer() {
          return PileMaxFanOperation.deserialize;
        }

        static deserialize(context) {
          const pile = context.readPile();
          const oldMaxFan = context.read();
          const newMaxFan = context.read();
          return new PileMaxFanOperation(pile, oldMaxFan, newMaxFan);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=be3f51d96d922ebb674d1a60eb38073e2820d7a4.js.map