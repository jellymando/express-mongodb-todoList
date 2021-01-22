export default class CreateInput {
    constructor({$root, items, onCreate}) {
        this.items = items;
        this.onCreate = onCreate;

        const $inputWrap = document.createElement('div');
        $inputWrap.id = 'inputWrap';
        const $createWrap = document.createElement('div');
        $createWrap.id = 'createWrap';
        const $createInput = document.createElement('input');
        $createInput.className = 'form-control';
        $createInput.placeholder = '할일을 추가해보세요.';
        this.$createInput = $createInput;
        const $createButton = document.createElement('button');
        $createButton.id = 'createBtn';
        $createButton.className = 'btn btn-default';
        $createButton.innerHTML = '추가';

        $root.appendChild($inputWrap);
        $inputWrap.appendChild($createWrap);
        $createWrap.appendChild($createInput);
        $createWrap.appendChild($createButton);
        $createInput.focus();

        $createButton.addEventListener("click", () => {
            this.onCreate($createInput.value);
            this.render();
        });
    }
    render() {
        this.$createInput.value = "";
        this.$createInput.focus();
    }
}