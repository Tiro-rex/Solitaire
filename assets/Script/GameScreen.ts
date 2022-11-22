
import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button, math, Collider2D, ICollisionEvent, Collider, BoxCollider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, sp, } from 'cc';
import { Card } from './Card';
import { Ranks, Colour, Suits, cardMove, DCard, snapParent } from './GameConstant';
import { CARDS_ARRAY, CardType } from './GameConstant';
import { Pile } from './Pile';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;
declare global {
    interface Window {
        moveCard: boolean;
    }
}
window.moveCard = false;

@ccclass('GameScreen')
export class GameScreen extends Component {
    @property(Prefab)
    cardPrefeb: Prefab;

    @property(Node)
    reaveldCard: Node;

    @property(Button)
    deck: Button;

    @property(Node)
    resetdeckButton: Node;

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


    public allCardsArrays: Node[] = [];
    public SuffeledArray: any[] = [];
    public h: any
    public h2: any[] = [];
    public lastindex: any;
    count: number;
    initiallyGeneratedCard = 0;
    playingCard: void;
    deckSnap: any;


    // instantiationOfStack=true;

    onLaod() {
    }
    start() {
        // PhysicsSystem2D.instance.enable = true;
        // this.stackcoll();
        this.SuffeledArray = CARDS_ARRAY;
        this.Shuffel(this.SuffeledArray);
        this.generateAllCards(this.SuffeledArray);
        this.initilizeStack();
    }

    OnClick() {

        if (this.initiallyGeneratedCard == 52) {
            this.deck.node.active = false
            this.deck.interactable = false;
        }
        else {
            this.deckCard(this.allCardsArrays);
            DCard.on("fromDeck", this.removeParentFrokmdeck, this);
        }
    }
    OnResetDeck() {
        this.reaveldCard.removeAllChildren();
        this.initiallyGeneratedCard = this.count;
        this.deck.node.active = true;
        this.deck.interactable = true;
    }

    deckCard(cardArray) {
        let card = cardArray[this.initiallyGeneratedCard++];
        this.reaveldCard.addChild(card);
        card.getComponent(ReaveldCard).faceDown.active = false;
        this.h = this.h2.push(card);
    }
    removeParentFrokmdeck(card) {
        this.reaveldCard.removeChild(card);
        this.initiallyGeneratedCard += 1;
        this.count += 1;
        snapParent.on("ParentforSnap", this.fun, this)
        DCard.removeListener("fromDeck", this.removeParentFrokmdeck, this)
       
    }
   
    fun(sp) {
       sp.sp.addChild(sp.c);

        snapParent.removeListener('ParentforSnap', this.fun, this)
    }



    generateAllCards(cardArray) {
        let arr = [...cardArray]
        for (let i = 0; i < arr.length; i++) {
            let card = instantiate(this.cardPrefeb);
            card.getComponent(ReaveldCard).init(arr[i]);
            this.allCardsArrays.push(card);
        }
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
    initilizeStack() {
        this.count = 0;
        for (let i = 0; i < 7; i++) {
            this.count += i;
            let stack = this.defaultPlayArea(i + 1).getComponent(Pile)
            stack.init(this.allCardsArrays, i + 1, this.count)
        }
        this.count += 7;
        this.initiallyGeneratedCard = this.count;
    }
    defaultPlayArea(stackNumber) {
        switch (stackNumber) {
            case 1:
                return this.stack1;
            case 2:
                return this.stack2;
            case 3:
                return this.stack3;
            case 4:
                return this.stack4;
            case 5:
                return this.stack5;
            case 6:
                return this.stack6;
            case 7:
                return this.stack7;
        }
    }
    delay(milliseconds: number, count): Promise<number> {
        return new Promise<number>(resolve => {
            setTimeout(() => {
                resolve(count);
            }, milliseconds);
        });
    }

    // onDisable() {
    //     for (let i = 0; i <= 7; i++) {
    //         let pile = this.defaultPlayArea(i)
    //         let coll = pile.getComponent(Collider2D);
    //         coll.off(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
    //     }
    // }

}
