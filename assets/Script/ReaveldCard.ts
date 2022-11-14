import { _decorator, Component, Node, TERRAIN_HEIGHT_BASE, color, Label, Vec2, Vec3, Touch } from 'cc';
import { Color, Ranks, Suits } from './GameConstant';
import { CARDS_ARRAY } from './GameConstant';
const { ccclass, property } = _decorator;


@ccclass('ReaveldCard')
export default class ReaveldCard extends Component {
    @property(Label)
    cardRank: Label;
    @property(Label)
    cardFace: Label;


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

        this.node.on(Node.EventType.TOUCH_START, this.onTouchStart.bind(this));
        this.node.on(Node.EventType.TOUCH_MOVE, this.onMoveStart.bind(this));
        this.node.on(Node.EventType.TOUCH_END, this.onTouchEnd.bind(this));
    }
    onTouchStart(e: Touch) {
        if (e._allTouches.length == 2) {
            this.distance = 0;
            this.distance = Vec2.distance(e._allTouches[0]._point, e._allTouches[1]._point);
        }

        this.touchStart = e.getUILocation();
        Vec2.subtract(this.offSet, this.node.getParent().getPosition() as unknown as Vec2, this.touchStart);
        // console.log("heyys", this.touchStart);



    }
    onMoveStart(e: Touch) {
        // if (e._allTouches.length == 1) {

        // this.move(e);
        // }
        let movsd = e.getUILocation();
        Vec2.subtract(this.offSet, this.touchStart, movsd);
        let nodePos = this.node.getPosition() as unknown as Vec2;
        this.node.setPosition(nodePos.x - this.offSet.x, nodePos.y - this.offSet.y, 0.5);
        this.touchStart = movsd;
        console.log("heyys3 ", movsd, this.node.getPosition());
        // this.node.worldPosition = this.newPosition;


    }
    onTouchEnd(e: Touch) {

        console.log("heyys", e);
        //  this.node.worldPosition = this.newPosition;
        // console.log("Position", this.node.worldPosition);
    }


}


