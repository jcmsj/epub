import { Chapter, Spine } from "../traits";
import { TableOfContents } from "./TableOfContents";

/**
 * @desc Last resort when walkTOC and walkNavMAP fails.
 */
export function walkSpine(spine:Spine): TableOfContents {
    let order = 0;
    const toc = new TableOfContents()
    for (const item of spine.contents) {
        const element:Chapter = {
            title: item.id, 
            order: order++,
            ...item, 
        };

        if (element.id == undefined)
            continue;

        toc.set(item.id, element)
    }

    return toc;
}