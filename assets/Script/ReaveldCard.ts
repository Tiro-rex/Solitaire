import { _decorator, Component, Node, TERRAIN_HEIGHT_BASE, color, Label, Vec2, Vec3, Touch, Color, math, systemEvent } from 'cc';
import { SUPPORT_JIT } from 'cc/env';
import { cardMove, cardRanks, Colour, DCard, Ranks, Suits } from './GameConstant';
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
        this.parentToCheck = this.node.getParent().name;

    }
    onMoveStart(e: Touch | null) {
        this.lastPosition = e.getUILocation();
        Vec2.subtract(this.offSet, this.touchStart, this.lastPosition);
        let nodePos = this.node.getPosition() as unknown as Vec2;
        this.node.setPosition(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.5);
        this.touchStart = this.lastPosition;
        window.moveCard = true;
    }
    onTouchEnd(p: Touch) {
        if (this.parentToCheck.toString() == 'ReavledCard') {
            //console.log("herere_==><")
            DCard.emit("fromDeck", this.node);
        }
        else {
            // console.log(this.parentToCheck.toString());
            cardMove.emit("snapCard", this.node);
        }
    }

   
    
}


