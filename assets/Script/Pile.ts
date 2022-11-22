import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button, Collider2D, PhysicsSystem2D, Contact2DType, game } from 'cc';
import { Card } from './Card';
import { cardMove, CARDS_ARRAY, Ranks, snapParent } from './GameConstant';
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
    // snapcard: boolean = false;

    start() {
        PhysicsSystem2D.instance.enable = true;
        let coll = this.node.getComponent(Collider2D);
        coll.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        // this.cardR.getComponent(ReaveldCard)
    }
    onDisable() {
        this.node.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    }
    async init(array, len, count) {
        // console.log(array, len, count);
        // if (len == 1) {
        //     console.log("ifloop")
        //     this.node.addChild(array[count - 1]);
        // }
        // else {
        for (let i = 0; i < len; i++) {
            await this.delay(200, this.node.addChild(array[count + i]));

        }
        // }
        this.node.children[len - 1].getComponent(ReaveldCard).faceDown.active = false;

    }
    onBeginContact(self: Collider2D, other: Collider2D) {
        this.snapParent = self.node;
        this.cardR = other.node;
        // console.log("hhihihi", self);
        snapParent.emit("ParentforSnap", { sp: this.snapParent, c: this.cardR })



        // console.log("Snaping Parent", this.snapParent);

        if (self.tag == 1 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
        }
        if (self.tag == 2 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
        }
        if (self.tag == 3 && window.moveCard) {
            cardMove.on("snapCard", this.snapCardToParent, this)
            console.log("stack-->", self.tag);
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
    // checkBeforesnap() {

    //     console.log("card", value)
    // }
    snapCardToParent(card) {

        this.node.removeChild(card);
        let value = this.cardR.getComponent(ReaveldCard).value
        let index = this.node.children.length;
        let indexforstack = this.snapParent.children.length
        let cardInStack = this.snapParent.children[index - 1].getComponent(ReaveldCard).value

        console.log("card  ", value.toString())
        console.log("cardStack  ", cardInStack.toString())
        if (value + 1 == cardInStack) {
            this.snapParent.addChild(card);
        } else {
            // /this.node.addChild(card);
        }
        this.snapParent.children[indexforstack - 1].getComponent(ReaveldCard).faceDown.active = false;
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