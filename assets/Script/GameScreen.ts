
import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button, math, Collider2D, ICollisionEvent, Collider, BoxCollider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, } from 'cc';
import { Card } from './Card';

import { CARDS_ARRAY, CardType } from './GameConstant';
import { GameManager } from './GameManager';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;

@ccclass('GameScreen')
export class GameScreen extends Component {
    @property(Prefab)
    cardPrefeb: Prefab;
    @property(Node)
    reaveldCard: Node;
    @property(Button)
    deck: (Button);
    @property(GameManager)
    game: GameManager;
    @property(Node)
    mainArea: Node
    @property(Node)
    stack1: Node
    @property(Node)
    stack2: Node
    @property(Node)
    stack3: Node
    @property(Node)
    stack4: Node
    @property(Node)
    stack5: Node
    @property(Node)
    stack6: Node
    @property(Node)
    stack7: Node



    arrayOfCard: any[] = [];
    arrayOfCard2: any[] = [];
    h: any
    h2: any
    lastindex: any;

    onLaod() {

    } start() {
        this.arrayOfCard2 = CARDS_ARRAY;
        this.Shuffel(this.arrayOfCard2);
        this.stack();
        PhysicsSystem2D.instance.enable = true;
        let coll = this.node.getComponent(Collider);
       // coll.on("onCollisionEnter", this.onBeginContact, this)
        // this.node.on('onCollisionEnter', this.onCollisionEnter, this);
        // this.node.on('onCollisionEnter', this.onCollisionEnter, this);
    }
    OnClick() {

        if (this.h == 52) {

            this.deck.interactable = false;
        }
        else {
            this.creatCard();

        }
        // console.log("here-->", this.h)
        // this.getComponent(Card).init();
    }


    creatCard() {
        //console.log("dhoom dhoom");
        // for (let i = 0; i < 1; i++) {
        let card = instantiate(this.cardPrefeb);
        this.reaveldCard.addChild(card);
        card.getComponent(ReaveldCard).init(this.arrayOfCard2[0]);
        this.arrayOfCard2.splice(0, 1);
        // console.log("heere-->", this.arrayOfCard2.length)
        this.h = this.arrayOfCard.push(card);
        console.log("Array", this.h);
        card.getComponent(ReaveldCard).faceDown.active = false;
    }

    Shuffel(data) {
        let currIndex = data.length, randomInadex;
        while (currIndex != 0) {
            randomInadex = Math.floor(math.random() * currIndex);
            currIndex--;
            [data[currIndex], data[randomInadex]] = [data[randomInadex], data[currIndex]];
        }
        return data;
    }
    async stacklogic(stack: Node, num) {

        for (let i = 0; i < num; i++) {
            let card1 = instantiate(this.cardPrefeb);
            card1.getComponent(ReaveldCard).init(this.arrayOfCard2[0]);
            this.arrayOfCard2.splice(0, 1);
            await this.delay(200, stack.addChild(card1));
            this.h2 = this.arrayOfCard.push(card1);
        }
        let lastCard: ReaveldCard = stack.children[stack.children.length - 1].getComponent(ReaveldCard)
        lastCard.faceDown.active = false;
        lastCard.faceUp.active = true;
        // console.log("last", this.lastindex);
        //console.log("array", this.h2);
    }

    stack() {
        for (let i = 1; i <= 7; i++) {
            let stack = this.defaultPlayArea(i)
            this.stacklogic(stack, i)
        }
    }

    defaultPlayArea(stackNumber) {
        // let stack: number;
        switch (stackNumber) {

            case 1:
                return this.stack1

            case 2:
                return this.stack2

            case 3:
                return this.stack3

            case 4:
                return this.stack4

            case 5:
                return this.stack5

            case 6:
                return this.stack6

            case 7:
                return this.stack7

        }
    }
    delay(milliseconds: number, count): Promise<number> {
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
    }

    // onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, event: IPhysics2DContact | null) {
    //     console.log("sjhdksjhk");
    //     // let selfcollider = event.selfCollider;
    //     // let otherCollider = event.otherCollider;
    //     // console.log("self", selfcollider);
    //     // console.log("other", otherCollider);
    // }

}
