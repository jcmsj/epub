import {Thing} from "./Thing";
import { Attribute } from "./Attribute";

//TODO make enum type for TOC
export interface Spine {
    toc:string,
    contents:Array<any>,
    _attributes: {}|Thing & {
        idref:string
    }
}

export interface SpineItem extends Attribute {
    itemref: Thing[]
}