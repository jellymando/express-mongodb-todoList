export default class ItemList {
    constructor($root, $items) {
        this.items = $items;

        this.find = async () => {
            try {
                const response = await axios.get('/find');
                this.items = response.data;
                console.log(this.items);
                this.render(this.items);
            } catch (e) {
                console.log(e);
            }
        };

        this.find();
        
        const $itemListWrap = document.createElement("div");
        $itemListWrap.id = "itemListWrap";
        this.$itemListWrap = $itemListWrap;

        $root.appendChild($itemListWrap);

        this.render(this.items);
    }

    render(items) {
        console.log("render..");
        if(items) {
            if(items.length > 0) {
                this.$itemListWrap.innerHTML = `<ul id="itemList">` + items.map(item => `
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