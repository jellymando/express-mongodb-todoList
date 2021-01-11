import CreateInput from "/components/CreateInput.js";
import SearchInput from "/components/SearchInput.js";

export default class App {
    $root = null;
    $items = {}

    constructor($root, $items) {
        this.$root = $root;

        this.createInput = new CreateInput($root, $items);
        this.searchInput = new SearchInput($root, $items);
    }
    
}