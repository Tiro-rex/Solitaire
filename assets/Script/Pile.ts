import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button, Collider2D, PhysicsSystem2D, Contact2DType } from 'cc';
import { Card } from './Card';
import { cardMove, CARDS_ARRAY } from './GameConstant';
import { GameScreen } from './GameScreen';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;


@ccclass('Pile')
export class Pile extends Component {

    offSet = new Vec2();

    public cardR: ReaveldCard;
    snapParent: Node

    start() {
        PhysicsSystem2D.instance.enable = true;
        let coll = this.node.getComponent(Collider2D);
        coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        // this.cardR.getComponent(ReaveldCard)
    }

    async init(array, len, count) {
        //console.log(array, len, count);
        for (let i = 0; i < len; i++) {
            await this.delay(200, this.node.addChild(array[count - 1 + i]));

        }
        this.node.children[len - 1].getComponent(ReaveldCard).faceDown.active = false;

    }
    onBeginContact(self: Collider2D, other: Collider2D) {
        this.snapParent = self.node;
        // other.node.getComponent(ReaveldCard)
        if (self.tag == 1 && window.moveCard) {
            // //let newPos = self.node.getPosition();
            // this.node.addChild(other.node);
            // console.log("Parent-->", Parent)
            // console.log("Postion collider", newPos);
            //other.node.setPosition(newPos);
            //other.node.setSiblingIndex(1);
            // console.log("stack-->", self.tag);
            cardMove.on("snapCard", this.snapCardToParent, this)
        }
        if (self.tag == 2 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
        }
        if (self.tag == 3 && window.moveCard) {
            console.log("stack-->", self.tag);
            cardMove.on("snapCard", this.snapCardToParent, this)
        }
        if (self.tag == 4 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
        }
        if (self.tag == 5 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
        }
        if (self.tag == 6 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
        }
        if (self.tag == 7 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
        }
    }


    snapCardToParent(card) {
        // console.log("Card In Snap", card);
        console.log("before 1-->", this.snapParent.children.length);
        console.log("before 2-->", this.node.children.length);
        this.snapParent.addChild(card);
        console.log("after 1-->", this.snapParent.children.length);
        console.log("after 2-->", this.node.children.length);

        cardMove.removeListener("snapCard", this.snapCardToParent, this)
    }


    delay(milliseconds: number, count): Promise<number> {
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
    }
}