
import { _decorator, Component, Node, Prefab, instantiate, EventMouse, Touch, Vec2, Vec3, Button } from 'cc';
import { Card } from './Card';

import { CARDS_ARRAY } from './GameConstant';
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



    arrayOfCard: any[] = [];
    arrayOfCard2: any[] = [];
    h: any


    OnLoad() {
        // Deck.make()
    }
    start() {
        this.arrayOfCard2 = CARDS_ARRAY;

    }
    OnClick() {
        this.creatCard();

        if (this.h == 52) {
            this.deck.interactable = false;

        }
        // this.getComponent(Card).init();
    }


    creatCard() {
        //console.log("dhoom dhoom");
        // for (let i = 0; i < 1; i++) {
        let card = instantiate(this.cardPrefeb);
        this.reaveldCard.addChild(card);
        card.getComponent(ReaveldCard).init(this.arrayOfCard2[0]);
        this.arrayOfCard2.splice(0, 1);
        this.h = this.arrayOfCard.push(card);
        console.log("Array", this.h);
    }
    //}


}

