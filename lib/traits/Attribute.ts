import {Thing} from "./Thing";

export interface Attribute extends Thing {
    _attributes: {}
    [key:string]:any
}