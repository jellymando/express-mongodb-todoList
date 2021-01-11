// import axios from 'axios';

export default class CreateInput {
    constructor($root, $items) {
        this.items = $items;
        const $createInput = document.createElement("input");
        $createInput.placeholder = "할일을 추가해보세요.";
        const $createButton = document.createElement("button");
        $createButton.id = "createBtn";
        $createButton.innerHTML = "추가";

        $root.appendChild($createInput);
        $root.appendChild($createButton);
        $createInput.focus();

        this.create = async () => {
            try {
                await axios.post('/create', {
                    "title": $createInput.value
                });
                const $newItem = document.createElement("li");
                $newItem.innerHTML = $createInput.value;
                document.getElementById("itemList").appendChild($newItem);
            } catch (e) {
                console.log(e);
            }

            $createInput.value = "";
            $createInput.focus();
        };

        $createButton.addEventListener("click", this.create);
    }
    render() {}
}