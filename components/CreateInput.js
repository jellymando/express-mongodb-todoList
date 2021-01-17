export default class CreateInput {
    constructor({$root, items, onCreate}) {
        this.items = items;
        this.onCreate = onCreate;

        const $createInput = document.createElement("input");
        $createInput.placeholder = "할일을 추가해보세요.";
        const $createButton = document.createElement("button");
        $createButton.id = "createBtn";
        $createButton.innerHTML = "추가";

        $root.appendChild($createInput);
        $root.appendChild($createButton);
        $createInput.focus();

        $createButton.addEventListener("click", () => this.onCreate($createInput.value));
    }
    render() {
        $createInput.value = "";
        $createInput.focus();
    }
}