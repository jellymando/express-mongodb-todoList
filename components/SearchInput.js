import ItemList from "/components/ItemList.js";

export default class SearchInput {
    constructor({$root, items, search}) {
        this.items = items;
        this.search = search;

        const $searchInput = document.createElement("input");
        $searchInput.placeholder = "검색어를 입력해보세요.";
        const $searchButton = document.createElement("button");
        $searchButton.id = "searchBtn";
        $searchButton.innerHTML = "검색";

        $root.appendChild($searchInput);
        $root.appendChild($searchButton);

        $searchButton.addEventListener("click", () => this.search($searchInput.value));
    }

    render() {
        $searchInput.value = "";
    }
};