import CreateInput from "/components/CreateInput.js";
import ItemList from "/components/ItemList.js";

export default class App {
    $root = null;

    constructor($root) {
        this.$root = $root;
        this.items = [];

        this.createInput = new CreateInput($root);
        this.itemList = new ItemList($root, this.items);
    }
    
}