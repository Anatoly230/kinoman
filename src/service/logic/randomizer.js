import { selectFromArray } from "../../utils";

export default class Randomizer {
    constructor(arr) {
        this.collection = arr;
    }
    getElement = () => {
        return selectFromArray(this.collection)
    }
}
