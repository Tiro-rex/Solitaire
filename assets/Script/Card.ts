import { _decorator, Component, Node, game } from 'cc';
import { CARDS_ARRAY } from './GameConstant';
import { Colour, Ranks, Suits } from './GameConstant';
import { GameScreen } from './GameScreen';

import ReaveldCard from './ReaveldCard';
//const s52SuitsColors: [Suits, Color][] = [[Suits.SPADES, Color.Black],[Suits.CLUBS, Color.Black],[Suits.HEARTS, Color.Red], [Suits.DIAMONDS, Color.Red]];
//const s52Ranks: Ranks[] = [Ranks.Ace, Ranks.Two, Ranks.Three, Ranks.Four, Ranks.Five, Ranks.Six, Ranks.Seven, Ranks.Eight, Ranks.Nine, Ranks.Ten, Ranks.Jack, Ranks.Queen, Ranks.King];

const { ccclass, property } = _decorator;

@ccclass('Card')
export class Card extends Component {
    



}