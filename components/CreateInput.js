// import axios from 'axios';

export default class CreateInput {
    constructor($root) {
        const $searchInput = document.createElement("input");
        $searchInput.placeholder = "할일을 추가해보세요.";
        const $searchButton = document.createElement("button");
        $searchButton.id = "createBtn";
        $searchButton.innerHTML = "추가";

        $root.appendChild($searchInput);
        $root.appendChild($searchButton);
        $searchInput.focus();

        this.create = async () => {
            try {
                await axios.post('/create', {
                    "title": $searchInput.value
                });
                const $newItem = document.createElement("li");
                $newItem.innerHTML = $searchInput.value;
                document.getElementById("itemList").appendChild($newItem);
            } catch (e) {
                console.log(e);
            }

            $searchInput.value = "";
            $searchInput.focus();
        };

        $searchButton.addEventListener("click", this.create);
    }
    render() {}
}