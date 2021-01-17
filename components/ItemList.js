export default class ItemList {
    constructor({$root, items, onFind, onDelete}) {
        this.items = items;
        this.onFind = onFind;
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
                        <span>${item.title}</span>
                        <button type="button" class="deleteButton">삭제</button>
                    </li>
                    `
                ).join("") + "</ul>";
    
            } else {
                this.$itemListWrap.innerHTML = "할 일이 없네용:)";
            }
        } else {
            this.$itemListWrap.innerHTML = "🎀🎀🎀로딩중🎀🎀🎀";
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