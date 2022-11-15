import { _decorator, Component, Node } from 'cc';
import { CARDS_ARRAY } from './GameConstant';
import { Colour, Ranks, Suits } from './GameConstant';
import { GameScreen } from './GameScreen';
import { Pile } from './Pile';
import ReaveldCard from './ReaveldCard';
//const s52SuitsColors: [Suits, Color][] = [[Suits.SPADES, Color.Black],[Suits.CLUBS, Color.Black],[Suits.HEARTS, Color.Red], [Suits.DIAMONDS, Color.Red]];
//const s52Ranks: Ranks[] = [Ranks.Ace, Ranks.Two, Ranks.Three, Ranks.Four, Ranks.Five, Ranks.Six, Ranks.Seven, Ranks.Eight, Ranks.Nine, Ranks.Ten, Ranks.Jack, Ranks.Queen, Ranks.King];

const { ccclass, property } = _decorator;

@ccclass('Card')
export class Card extends Component {
public pile:Pile;
public pileIndex = 0
public pileChanged = ()=>{};
public pileIndexChanged=()=>{};
public faceUpChanged=()=>{};
private faceUp_=false;
public get faceUp() { return this.faceUp_; }
public set faceUp(faceUp:boolean){
    if(this.faceUp_===faceUp)
    return;
    const oldFaceUp=this.faceUp_;
    //const op=new
    // 
}

public doSetFaceUp(faceUp: boolean) {
    this.faceUp_ = faceUp;
    this.faceUpChanged();
}






}