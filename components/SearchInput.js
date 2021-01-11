import ItemList from "/components/ItemList.js";

export default class SearchInput {
    constructor($root, $items) {
        this.itemList = new ItemList($root, $items);

        const $searchInput = document.createElement("input");
        $searchInput.placeholder = "검색어를 입력해보세요.";
        const $searchButton = document.createElement("button");
        $searchButton.id = "searchBtn";
        $searchButton.innerHTML = "검색";

        this.search = async () => {
            try {
                const response = await axios.post('/search', {
                    "title": $searchInput.value
                });
                this.items = response.data;
                console.log(this.items);
                this.itemList.render(this.items);
            } catch (e) {
                console.log(e);
            }

            $searchInput.value = "";
        };

        $root.appendChild($searchInput);
        $root.appendChild($searchButton);

        $searchButton.addEventListener("click", this.search);
    }
};