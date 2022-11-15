System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, PileMaxFanOperation;

  function _reportPossibleCrUseOfPile(extras) {
    _reporterNs.report("Pile", "./Pile", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
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
        constructor(pile_, oldMaxFan_, newMaxFan_) {
          super();
        }

        undo() {//this.pile_.doSetMaxFan(this.oldMaxFan_);
        }

        redo() {// this.pile_.doSetMaxFan(this.newMaxFan_);
        } // public serialize(context: GameSerializationContext) {
        //     context.writePile(this.pile_);
        //     context.write(this.oldMaxFan_);
        //     context.write(this.newMaxFan_);
        // }
        // public get deserializer() { return PileMaxFanOperation.deserialize; }
        // public static deserialize(context: GameSerializationContext) {
        //     const pile = context.readPile();
        //     const oldMaxFan = context.read();
        //     const newMaxFan = context.read();
        //     return new PileMaxFanOperation(pile, oldMaxFan, newMaxFan);
        // }


      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2739e6e6a4c504af7dbe4ce4c17b92d4f388014e.js.map