import { _decorator, Component, Node, TERRAIN_HEIGHT_BASE, color, Label, Vec2, Vec3, Touch, Color } from 'cc';
import { Card } from './Card';
import { Colour, Ranks, Suits } from './GameConstant';
import { CARDS_ARRAY } from './GameConstant';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;


@ccclass('ReaveldCard')
export default class ReaveldCard extends Component {
    @property(Label)
    cardRank: Label;
    @property(Label)
    cardRank2: Label;
    @property(Label)
    cardFace: Label;
    // @property(GameManager)
    // game: GameManager;




    cardColor: string;
    cardace: string;
    cardNumber: string;
    isMoving: boolean;
    distance: number;
    touchStart = new Vec2();
    offSet = new Vec2();
    newPosition = new Vec3();
    lastPosition = new Vec2()
    zoomPercentage = 100;
    lastZoomPercentage = 100;




    init(data) {
        // CARDS_ARRAY.values()
        // console.log(data)

        this.cardFace.string = data.suit;
        this.cardRank.string = data.rank;
        this.cardRank2.string = data.rank;
        this.cardNumber = data.rank;
        this.cardace = data.suit;
        if (this.cardFace.string == '♥' || this.cardFace.string == '♦') {
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
        // this.game.mainArea();

    }
    onTouchStart(e: Touch) {
        if (e._allTouches.length == 2) {
            this.distance = 0;
            this.distance = Vec2.distance(e._allTouches[0]._point, e._allTouches[1]._point);
        }

        this.touchStart = e.getUILocation();
        Vec2.subtract(this.offSet, this.node.getParent().getPosition() as unknown as Vec2, this.touchStart);
        console.log("heyys", this.cardace, this.cardNumber);



    }
    onMoveStart(e: Touch) {
        // if (e._allTouches.length == 1) {

        // this.move(e);
        // }
        this.lastPosition = e.getUILocation();
        Vec2.subtract(this.offSet, this.touchStart, this.lastPosition);
        let nodePos = this.node.getPosition() as unknown as Vec2;
        this.node.setPosition(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.5);
        this.touchStart = this.lastPosition;
        console.log("heyys3 ", this.node.getPosition());
        console.log("lastPos", this.lastPosition)
        // this.node.worldPosition = this.newPosition;
        // this.newPosition = new Vec3(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.);
        //this.getComponent(Card).mainArea();
    }
    onTouchEnd(e: Touch) {
        console.log("Position", this.node.worldPosition);
    }
    private getCardValue_(data) {
        switch (data.rank) {
            case Ranks.Ace: return 1;
            case Ranks.Two: return 2;
            case Ranks.Three: return 3;
            case Ranks.Four: return 4;
            case Ranks.Five: return 5;
            case Ranks.Six: return 6;
            case Ranks.Seven: return 7;
            case Ranks.Eight: return 8;
            case Ranks.Nine: return 9;
            case Ranks.Ten: return 10;
            case Ranks.Jack: return 11;
            case Ranks.Queen: return 12;
            case Ranks.King: return 13;
            default: console.error();
        }
    }
    


}


