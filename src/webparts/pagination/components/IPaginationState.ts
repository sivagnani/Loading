import { listItems } from "../model/model";

export interface IPaginationState {
    pageItems:listItems[];
    loading:boolean;
    isButtonClicked:boolean;
}
