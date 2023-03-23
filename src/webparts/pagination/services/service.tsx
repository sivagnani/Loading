import { listItems } from "../model/model";
import {Web} from "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
let sp = Web("https://7zmht7.sharepoint.com/sites/SPFx");
export function getItems():Promise<listItems[]>{
        return sp.lists.getByTitle("items").items.select("Title").getAll().then((items:listItems[])=>{
            console.log(items.length);
            return items
        });
    }

