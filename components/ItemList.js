export default class ItemList {
    constructor({$root, items, onFind, onModify, onDelete}) {
        this.items = items;
        this.onFind = onFind;
        this.onModify = onModify;
        this.onDelete = onDelete;
        
        const $itemListWrap = document.createElement("div");
        $itemListWrap.id = "itemListWrap";
        this.$itemListWrap = $itemListWrap;

        $root.appendChild($itemListWrap);

        this.onFind();
        this.render();
    }

    setState(data) {
        this.items = data;
        this.render();
    }

    render() {
        console.log("render..");
        if(this.items) {
            if(this.items.length > 0) {
                this.$itemListWrap.innerHTML = `<ul id="itemList">` + this.items.map(item => `
                    <li key='${item._id}'>
                        <span class="title">${item.title}</span>
                        <button type="button" class="btn btn-default modifyButton">수정</button>
                        <button type="button" class="btn btn-danger deleteButton">삭제</button>
                    </li>
                    `
                ).join("") + "</ul>";
    
            } else {
                this.$itemListWrap.innerHTML = "할 일이 없네용:)";
            }
        } else {
            this.$itemListWrap.innerHTML = "🎀🎀🎀로딩중🎀🎀🎀";
        }

        const $modifyButton = document.querySelectorAll("#itemList .modifyButton");
        if($modifyButton) {
            $modifyButton.forEach(button => {
                button.addEventListener("click", () => {
                    const parentLi = button.closest("li");
                    const title = parentLi.getElementsByClassName("title")[0];
                    const titleText = title.innerText;
                    title.innerText = '';
                    const input = document.createElement("input");
                    input.className = 'form-control';
                    const saveButton = document.createElement("button");
                    saveButton.className = 'btn btn-default saveButton';
                    saveButton.innerText = '저장';
                    input.value = titleText;
                    title.append(input);
                    title.after(saveButton);
                    button.remove();

                    saveButton.addEventListener("click", () => {
                        this.onModify(parentLi.getAttribute('key'), input.value);
                    })
                })
            });
        }

        const $deleteButton = document.querySelectorAll("#itemList .deleteButton");
        if($deleteButton) {
            $deleteButton.forEach(button => {
                button.addEventListener("click", () => {
                    this.onDelete(button.closest("li").getAttribute('key'))
                })
            });
        }
    }
};