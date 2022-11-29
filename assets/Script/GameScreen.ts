
import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button, math, Collider2D, ICollisionEvent, Collider, BoxCollider2D, Contact2DType, IPhysics2DContact, PhysicsSystem2D, sp, } from 'cc';
import { Card } from './Card';
import { Ranks, Colour, Suits, cardMove, DCard, snapLogic, PosSnap } from './GameConstant';
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
    @property(Node)
    movableParent: Node


    public allCardsArrays: Node[] = [];
    public SuffeledArray: any[] = [];
    public h: any
    public h2: any[] = [];
    public lastindex: any;
    count: number;
    initiallyGeneratedCard = 0;
    playingCard: void;
    deckSnap: any;
    remove: boolean = false;
    movableArray: Node[] = [];
    snapParent: any;


    // instantiationOfStack=true;

    onLaod() {
    }
    start() {
        PosSnap.on("stackPos", this.snapCard, this)
        // PhysicsSystem2D.instance.enable = true;
        // this.stackcoll();
        this.SuffeledArray = CARDS_ARRAY;
        this.Shuffel(this.SuffeledArray);
        this.generateAllCards(this.SuffeledArray);
        this.initilizeStack();
        // snapLogic.on("ParentforSnap", this.snapForDeck, this)

    }

    OnClick() {

        if (this.initiallyGeneratedCard == 52) {
            this.deck.node.active = false
            this.deck.interactable = false;
        }
        else {
            this.deckCard(this.allCardsArrays);
            // DCard.on("fromDeck", this.removeParentFrokmdeck, this);
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
        // window.moveCard = true;
    }
    removeParentFrokmdeck(card) {
        // snapLogic.on("ParentforSnap", this.snapForDeck, this)
        this.reaveldCard.removeChild(card);

        console.log("RemoveDeck");
        this.initiallyGeneratedCard += 1;
        this.count += 1;
        DCard.removeListener("fromDeck", this.removeParentFrokmdeck, this)

    }

    snapForDeck(Sp) {
        console.log("gameScreenEvent", Sp);
        // let value = this.reaveldCard.children[1].getComponent(ReaveldCard).value
        // console.log("deck value", value
        // Sp.Sp.addChild();
        // lastCard.TOUCH_END();

    }
    snapCard(cardPos) {

        // console.log("stackp1", stackp1);
        let stackp1 = this.stack1.getPosition();
        let stackp2 = this.stack2.getPosition();
        let stackp3 = this.stack3.getPosition();
        let stackp4 = this.stack4.getPosition();
        let stackp5 = this.stack5.getPosition();
        let stackp6 = this.stack6.getPosition();
        let stackp7 = this.stack7.getPosition();
        this.snapParent = cardPos.parent;
        let len = cardPos.parent.children.length
        let selectedCardVlaue = cardPos.Child.getComponent(ReaveldCard).value

        //TODO VJ correct the debug 

        if (Math.floor(stackp1.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child)
            let len = cardPos.parent.children.length
            let lentgh2 = this.stack1.children.length
            let stacckCardavlue = this.stack1.children[lentgh2 - 1].getComponent(ReaveldCard).value;

            if (stacckCardavlue == selectedCardVlaue + 1) {
                console.log("IF CONDITION FROM STACK 1")

                if (lentgh2 != 0) {
                    this.flipOperation();
                    this.stack1.addChild(cardPos.Child)
                } else {
                    if (lentgh2 == 0) {
                        lentgh2 = +1
                        this.stack1.addChild(cardPos.Child)
                    } else if (selectedCardVlaue == 13) {
                        this.stack1.addChild(cardPos.Child)
                    }
                    else {

                        cardPos.parent.addChild(cardPos.Child);
                    }
                }
                // this.flipOperation();
                // if (lentgh2 == 0) {



                // cardPos.parent.children[len - 1].getComponent(ReaveldCard).faceDown.active = false;
                // return;
                // len = -1;

            }
            else {
                cardPos.parent.addChild(cardPos.Child);
            }
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);
        }
        if (Math.floor(stackp2.x) == cardPos.cardPos.x) {
            // console.log("para", cardPos);
            cardPos.parent.removeChild(cardPos.Child)
            let lenth2 = this.stack2.children.length
            let len = cardPos.parent.children.length
            if (lenth2 == 0) {
                return;
            }
            let selectedCardVlaue = cardPos.Child.getComponent(ReaveldCard).value
            let stacckCardavlue = this.stack2.children[lenth2 - 1].getComponent(ReaveldCard).value;
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);
            if (stacckCardavlue == selectedCardVlaue + 1) {
                // if (len = + 1 || len == null) {
                console.log("IF CONDITION FROM STACK 2")

                this.flipOperation()
                // return;
                this.stack2.addChild(cardPos.Child)
                // len = -1;
                // }
            }
            else {
                cardPos.parent.addChild(cardPos.Child);
            }
        }
        if (Math.floor(stackp3.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child)
            let len = cardPos.parent.children.length
            let lentgh2 = this.stack3.children.length
            if (lentgh2 == 0) {
                return;
            }
            let selectedCardVlaue = cardPos.Child.getComponent(ReaveldCard).value
            let stacckCardavlue = this.stack3.children[lentgh2 - 1].getComponent(ReaveldCard).value;
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);
            if (stacckCardavlue == selectedCardVlaue + 1) {
                // if (len + 1 || len == null) {
                console.log("IF CONDITION FROM STACK 3")

                this.flipOperation()

                // return;
                this.stack3.addChild(cardPos.Child)
                this.stackMove(cardPos.Child);
                // len = -1;
                // }
            }
            else {
                cardPos.parent.addChild(cardPos.Child);
            }
        }
        if (Math.floor(stackp4.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child)
            let len = cardPos.parent.children.length
            let lentgh2 = this.stack4.children.length
            if (lentgh2 == 0) {
                return;
            }
            let selectedCardVlaue = cardPos.Child.getComponent(ReaveldCard).value
            let stacckCardavlue = this.stack4.children[lentgh2 - 1].getComponent(ReaveldCard).value;
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);
            if (stacckCardavlue == selectedCardVlaue + 1) {
                // if (len + 1 || len == null) {
                console.log("IF CONDITION FROM STACK 4")

                this.flipOperation()

                // return;
                this.stack4.addChild(cardPos.Child)
                // len = -1;
                // }
            }
            else {
                cardPos.parent.addChild(cardPos.Child);
            }
            // console.log("herehr", cardPos.cardPos.x);
        }
        if (Math.floor(stackp5.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child)
            let len = cardPos.parent.children.length
            let lentgh2 = this.stack5.children.length
            if (lentgh2 == 0) {
                return;
            }
            let selectedCardVlaue = cardPos.Child.getComponent(ReaveldCard).value
            let stacckCardavlue = this.stack5.children[lentgh2 - 1].getComponent(ReaveldCard).value;
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);
            if (stacckCardavlue == selectedCardVlaue + 1) {
                // if (len + 1 || len == null) {
                console.log("IF CONDITION FROM STACK 5")
                this.flipOperation()

                // return;
                this.stack5.addChild(cardPos.Child)
                // len = -1;
                // }
            }
            else {
                cardPos.parent.addChild(cardPos.Child);
            }
        }
        if (Math.floor(stackp6.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child)
            let len = cardPos.parent.children.length
            let lentgh2 = this.stack6.children.length
            if (lentgh2 == 0) {
                return;
            }
            let selectedCardVlaue = cardPos.Child.getComponent(ReaveldCard).value
            let stacckCardavlue = this.stack6.children[lentgh2 - 1].getComponent(ReaveldCard).value;
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);
            if (stacckCardavlue == selectedCardVlaue + 1) {
                // if (len + 1 || len == null) {
                console.log("IF CONDITION FROM STACK 6")
                this.flipOperation()


                this.stack6.addChild(cardPos.Child)
                // }
            }
            else {
                cardPos.parent.addChild(cardPos.Child);
            }
        }
        if (Math.floor(stackp7.x) == cardPos.cardPos.x) {
            cardPos.parent.removeChild(cardPos.Child)
            let len = cardPos.parent.children.length
            let lentgh2 = this.stack7.children.length
            if (lentgh2 == 0) {
                return;
            }
            let selectedCardVlaue = cardPos.Child.getComponent(ReaveldCard).value
            let stacckCardavlue = this.stack7.children[lentgh2 - 1].getComponent(ReaveldCard).value;
            if (stacckCardavlue == selectedCardVlaue + 1) {
                // if (len + 1 || len == null) {
                this.flipOperation()
                // if (len + 1) {
                //     if (len == null) {
                //         return;
                //     }
                //     else {
                //         this.flipOperation()
                //     }                    // return;
                console.log("IF CONDITION FROM STACK 7")
                this.stack7.addChild(cardPos.Child)
                // len = +1;                // }
                // }
            }
            else {
                cardPos.parent.addChild(cardPos.Child);
            }
            console.log("selected Card Value", selectedCardVlaue);
            console.log("StackCardValue", stacckCardavlue);
            // else if (len - 1) {
            //     cardPos.parent.addChild(cardPos.ChildS);

            // }

        }
    }

    flipOperation() {
        let lenth = this.snapParent.children.length
        if (lenth == 0) {
            return;
        } else {

            this.snapParent.children[lenth - 1].getComponent(ReaveldCard).faceDown.active = false;
        }
        // console.log("herhehr=>>>>", lenth);

    }

    stackMove(data) {
        this.movableArray.push(data);
    }

    generateAllCards(cardArray) {
        let arr = [...cardArray]
        for (let i = 0; i < arr.length; i++) {
            let card = instantiate(this.cardPrefeb);
            card.getComponent(ReaveldCard).init(arr[i], this.movableArray);
            this.allCardsArrays.push(card);
        }

    }
    Shuffel(data) {
        let currIndex = data.length 
        let randomInadex;
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
