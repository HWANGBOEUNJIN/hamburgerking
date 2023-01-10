import Igd from "./igd.js";
export default class Igdslot {

    constructor() {

    }

    make(index, stage) {
        // console.log("igdslot");
        return new Igd(index, stage);
    }
}