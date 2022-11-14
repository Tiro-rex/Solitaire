
import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3 } from 'cc';
import { Card } from './Card';
import { CARDS_ARRAY } from './GameConstant';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;

@ccclass('GameScreen')
export class GameScreen extends Component {
    @property(Prefab)
    cardPrefeb: Prefab;
    @property(Node)
    reaveldCard: Node;



    arrayOfCard: any[] = [];
    arrayOfCard2: any[] = [];
    h: any


    OnLoad() {

    }
    start() {
        this.arrayOfCard2 = CARDS_ARRAY;
    }
    OnClick() {
        this.getDeckOfCard();
        // this.getComponent(Card).init();
    }


    getDeckOfCard() {
        //console.log("dhoom dhoom");
        // for (let i = 0; i < ; i++) {
        let card = instantiate(this.cardPrefeb);
        //card.getComponent(Card).randCardGenrate();
        this.reaveldCard.addChild(card);
        card.getComponent(ReaveldCard).init(this.arrayOfCard2[0]);
        this.arrayOfCard2.splice(0, 1);

        // this.h = this.arrayOfCard.push(card);
        console.log("Array", this.h);
        // }
    }


}

