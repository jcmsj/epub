import toArray from "./toArray";
import { RawSpine, Thing, Spine } from "./traits";
export function parseSpine({itemref, _attributes}:RawSpine, rawManifest:Thing): Spine {
    const s:Spine =  {
        toc: "ncx",
        contents: [],
         ..._attributes, //Override the default props
         _attributes: {}
    }
    if (itemref) {
        itemref = toArray(itemref)
        s.contents = itemref.map(({_attributes:atrs}, index) => {
            const l = rawManifest[atrs.idref];

            if (l && l.hasOwnProperty("id")) {
                
            } else {
                throw new TypeError(`Missing id at index ${index} | item, ${l}`, )
            }
            return l
        })
    }
    return s; 
}