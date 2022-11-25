import { _decorator, Component, Node, TERRAIN_HEIGHT_BASE, color, Label, Vec2, Vec3, Touch, Color, math, systemEvent } from 'cc';
import { SUPPORT_JIT } from 'cc/env';
import { cardMove, cardRanks, Colour, DCard, PosSnap, Ranks, StackPos, Suits, TouchEnd } from './GameConstant';
import { GameScreen } from './GameScreen';
const { ccclass, property } = _decorator;


@ccclass('ReaveldCard')
export default class ReaveldCard extends Component {
    @property(Label)
    cardRank: Label;
    @property(Label)
    cardRank2: Label;
    @property(Label)
    cardFace: Label;
    @property(Node)
    faceUp: Node;
    @property(Node)
    faceDown: Node;

    public cardColor: string;
    public cardace: string;
    public cardNumber: string;
    public touchStart = new Vec2();
    public offSet = new Vec2();
    public newPosition = new Vec3();
    public lastPosition = new Vec2()
    public zoomPercentage = 100;
    public lastZoomPercentage = 100;
    public gameS: GameScreen;
    public parentToCheck: string;
    public value: number;
    public valueString: string;
    suitofCard: any;
    touchEndPos: Vec2;
    array: any[] = [];


    onLaod() {
    }
    init(data) {
        // let get = this.game.Shuffel(data)
        // console.log(get);

        // this.rankValue(data.rank);
        this.cardFace.string = data.suit;
        this.cardRank.string = data.rank;
        this.cardRank2.string = data.rank;
        this.value = data.value
        this.cardNumber = data.rank;
        if (this.cardFace.string == '♥' || this.cardFace.string == '♦') {
            this.cardace = data.suit;
            this.cardRank.color = new Color(255, 0, 0);
            this.cardRank2.color = new Color(255, 0, 0);
            this.cardFace.color = new Color(255, 0, 0);
        }
        else if (this.cardFace.string == '♠' || this.cardFace.string == '♣') {
            this.cardRank.color = new Color(0, 0, 0, 255);
            this.cardRank2.color = new Color(0, 0, 0, 255);
            this.cardFace.color = new Color(0, 0, 0, 255);
        }
        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
        this.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
    }

    onTouchStart(e: Touch) {


        this.touchStart = e.getUILocation();
        Vec2.subtract(this.offSet, this.node.getParent().getPosition() as unknown as Vec2, this.touchStart);
        console.log("heyys", this.cardace, this.cardNumber, this.value);
        // console.log("Parent", this.node)
        let childrenInArray = this.node.getParent().children;
        // `this.array.push(childrenInArray);
        // for (let i = 0; i < this.array.length; i++) {
        //     let arr = this.array[i];
        //     var pos = arr.getPosition();
        //     console.log("Position", pos)
        // }`

    }
    onMoveStart(e: Touch | null) {
        this.lastPosition = e.getUILocation();
        Vec2.subtract(this.offSet, this.touchStart, this.lastPosition);
        let nodePos = this.node.getPosition() as unknown as Vec2;
        this.node.setPosition(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.5);
        this.touchStart = this.lastPosition;
        window.moveCard = true;
    }
    onTouchEnd(p: Touch | null) {
        // console.log("PostionAtTheTouchEnd", p.getUILocation());
        let touchEndPos = p.getUILocation();

        let nodePos = this.node.getPosition() as unknown as Vec2;
        console.log("pa", touchEndPos.x)
        console.log("posxl", TouchEnd.TouchEndS1);
        // console.log("posxr",);

        if (touchEndPos.x < TouchEnd.TouchEndS1.xl && touchEndPos.x > TouchEnd.TouchEndS1.xr) {
            // this.node.removeFromParent()
            PosSnap.emit("stackPos", { cardPos: StackPos.stack1, Child: this.node, parent: this.node.getParent() });
        }

        if (touchEndPos.x < TouchEnd.TouchEndS2.xl && touchEndPos.x > TouchEnd.TouchEndS2.xr) {
            // this.node.removeFromParent()
            PosSnap.emit("stackPos", { cardPos: StackPos.stack2, Child: this.node, parent: this.node.getParent() });
        }

        if (touchEndPos.x < TouchEnd.TouchEndS3.xl && touchEndPos.x > TouchEnd.TouchEndS3.xr) {
            // this.node.removeFromParent()
            PosSnap.emit("stackPos", { cardPos: StackPos.stack3, Child: this.node, parent: this.node.getParent() });
        }

        if (touchEndPos.x < TouchEnd.TouchEndS4.xl && touchEndPos.x > TouchEnd.TouchEndS4.xr) {
            // this.node.removeFromParent()
            // console.log("heyy");
            PosSnap.emit("stackPos", { cardPos: StackPos.stack4, Child: this.node, parent: this.node.getParent() });
        }

        if (touchEndPos.x < TouchEnd.TouchEndS5.xl && touchEndPos.x > TouchEnd.TouchEndS5.xr) {
            // this.node.removeFromParent()
            PosSnap.emit("stackPos", { cardPos: StackPos.stack5, Child: this.node, parent: this.node.getParent() });
        }

        if (touchEndPos.x < TouchEnd.TouchEndS6.xl && touchEndPos.x > TouchEnd.TouchEndS6.xr) {
            // this.node.removeFromParent()
            PosSnap.emit("stackPos", { cardPos: StackPos.stack6, Child: this.node, parent: this.node.getParent() });
        }

        if (touchEndPos.x < TouchEnd.TouchEndS7.xl && touchEndPos.x > TouchEnd.TouchEndS7.xr) {
            // this.node.removeFromParent()
            PosSnap.emit("stackPos", { cardPos: StackPos.stack7, Child: this.node, parent: this.node.getParent() });
        }


        // if (this.parentToCheck.toString() == 'ReavledCard') {
        //     //console.log("herere_==><")
        //     DCard.emit("fromDeck", this.node);
        // }
        // else {
        //     // console.log(this.parentToCheck.toString());
        //     cardMove.emit("snapCard", this.node);
        // }
    }



}


