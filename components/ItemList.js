export default class ItemList {
    constructor({$root, items, find}) {
        this.items = items;
        this.find = find;
        
        const $itemListWrap = document.createElement("div");
        $itemListWrap.id = "itemListWrap";
        this.$itemListWrap = $itemListWrap;

        $root.appendChild($itemListWrap);

        this.find();
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
                    <li>
                        ${item.title}
                    </li>
                    `
                ).join("") + "</ul>";
    
            } else {
                this.$itemListWrap.innerHTML = "할 일이 없네용:)";
            }
        } else {
            this.$itemListWrap.innerHTML = "🎀🎀🎀로딩중🎀🎀🎀";
        }
    }
};