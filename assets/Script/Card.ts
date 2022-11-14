import { _decorator, Component, Node } from 'cc';
import { CARDS_ARRAY } from './GameConstant';
import { Color, Ranks, Suits } from './GameConstant';
import { GameScreen } from './GameScreen';
import ReaveldCard from './ReaveldCard';
//const s52SuitsColors: [Suits, Color][] = [[Suits.SPADES, Color.Black],[Suits.CLUBS, Color.Black],[Suits.HEARTS, Color.Red], [Suits.DIAMONDS, Color.Red]];
//const s52Ranks: Ranks[] = [Ranks.Ace, Ranks.Two, Ranks.Three, Ranks.Four, Ranks.Five, Ranks.Six, Ranks.Seven, Ranks.Eight, Ranks.Nine, Ranks.Ten, Ranks.Jack, Ranks.Queen, Ranks.King];

const { ccclass, property } = _decorator;

@ccclass('Card')
export class Card extends Component {
   
   
        randCardGenrate() {
            for(let i ; i>CARDS_ARRAY.length;i++){

            }
        //     for(const[Suits,Color]of s52SuitsColors){
        //     for(const rank of s52Ranks){
        //         const card = this.getComponent(GameScreen);
        //         let color=this.getComponent(ReaveldCard)
        //         if(s52SuitsColors){
        //         color.cardRank.color.set(255,0,0);
        //         }
        //         else{
        //         color.cardFace.color.set(0,0,0);
        //         }
        //     }
        // }
}
}
