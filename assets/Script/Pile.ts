import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button, Collider2D, PhysicsSystem2D, Contact2DType } from 'cc';
import { Card } from './Card';
import { CARDS_ARRAY } from './GameConstant';
import { GameManager } from './GameManager';
import { GameScreen } from './GameScreen';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;


@ccclass('Pile')
export class Pile extends Component {

    offSet = new Vec2();

    public cardR: ReaveldCard;

    start() {
        PhysicsSystem2D.instance.enable = true;
        let coll = this.node.getComponent(Collider2D);
        coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        // this.cardR.getComponent(ReaveldCard)
    }
    onBeginContact(self: Collider2D, other: Collider2D) {

        if (self.tag == 1 && window.moveCard) {
            let newPos = self.node.getPosition();
           // console.log("Postion collider", newPos);
            //other.node.setPosition(newPos);
            //other.node.setSiblingIndex(1);
            console.log("stack-->", self.tag);
        }
        if (self.tag == 2 && window.moveCard) {
            console.log("stack-->", self.tag);
        }
        if (self.tag == 3 && window.moveCard) {
            console.log("stack-->", self.tag);
        }
        if (self.tag == 4 && window.moveCard) {
            console.log("stack-->", self.tag);
        }
        if (self.tag == 5 && window.moveCard) {
            console.log("stack-->", self.tag);
        }
        if (self.tag == 6 && window.moveCard) {
            console.log("stack-->", self.tag);
        }
        if (self.tag == 7 && window.moveCard) {
            console.log("stack-->", self.tag);
        }
    }
}