import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button, Collider2D, PhysicsSystem2D, Contact2DType, game } from 'cc';
import { Card } from './Card';
import { cardMove, CARDS_ARRAY, Ranks, snapLogic } from './GameConstant';
import { GameScreen } from './GameScreen';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;


@ccclass('Pile')
export class Pile extends Component {
    // @property(Node)
    // deckOfCard: Node;

    offCard: any[];

    public cardR: any;
    snapParent: any;

    async init(array, len, count) {
    
        for (let i = 0; i < len; i++) {
            await this.delay(200, this.node.addChild(array[count + i]));

        }
        
        this.node.children[len - 1].getComponent(ReaveldCard).faceDown.active = false;

    }

    delay(milliseconds: number, method): Promise<number> {
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(method);
            }, milliseconds);
        });
    }
}