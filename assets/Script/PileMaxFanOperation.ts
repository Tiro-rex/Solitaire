import { _decorator, Component, Node } from 'cc';
import { Pile } from './Pile';
const { ccclass, property } = _decorator;

@ccclass('PileMaxFanOperation')
export class PileMaxFanOperation extends Component {
    constructor(pile_: Pile, oldMaxFan_: number, newMaxFan_: number) {
        super();
    }

    public undo() {
        //this.pile_.doSetMaxFan(this.oldMaxFan_);
    }

    public redo() {
        // this.pile_.doSetMaxFan(this.newMaxFan_);
    }

    // public serialize(context: GameSerializationContext) {
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
}

