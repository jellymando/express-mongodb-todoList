export default class ItemList {
    constructor($root, items) {
        this.items = {};
        this.find = async () => {
            try {
                const response = await axios.get('/find');
                this.items = response.data;
                this.render();
            } catch (e) {
                console.log(e);
            }
        };

        this.find();
        
        const $itemListWrap = document.createElement("div");
        $itemListWrap.id = "itemListWrap";
        this.$itemListWrap = $itemListWrap;

        $root.appendChild($itemListWrap);

        this.render(items);
    }

    render() {
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
    }
};