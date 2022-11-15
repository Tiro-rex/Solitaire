import { _decorator, Component, Node, Vec3, Vec2, Touch, EventMouse, instantiate } from 'cc';
import ReaveldCard from './ReaveldCard';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {

    // @property(ReaveldCard)
    // rcard: ReaveldCard;

    Acards: any;

    onload() {


    }
}

