import {_decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button} from 'cc';
import { Card } from './Card';
import { CARDS_ARRAY } from './GameConstant';
import { GameManager } from './GameManager';

import { PileMaxFanOperation } from './PileMaxFanOperation';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;

@ccclass('Pile')
export class Pile extends Component {

    @property(GameManager)
    game: GameManager;

    public cardsChanged = () => { };
    public maxFanChanged = () => { };
    private cards_: Card[] = [];
    public get length() {
        return this.cards_.length
    }
    private maxFan_: number = 999;
    public get maxFan() { return this.maxFan_; }
    public set maxFan(maxFan: number) {
        maxFan = Math.max(0, maxFan);
        if (this.maxFan_ === maxFan)
            return;
        const oldMaxFan = this.maxFan_;
        const op = new PileMaxFanOperation(this, oldMaxFan, maxFan);
        //this.game.addundoableOP(op);
        op.redo();
    }
   
    // dotSetMaxFan(maxFan: number) {
    //     this.maxFan_ = maxFan;
    //     this.maxFanChanged();
    // }
//     public sortByRank() {
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

}