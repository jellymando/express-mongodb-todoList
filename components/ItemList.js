export default class ItemList {
    constructor($root, items) {
        this.items = items;
        this.find = async () => {
            try {
                const response = await axios.get('/find');
                items.push(response);
            } catch (e) {
                console.log(e);
            }
        };

        this.find();
        
        const $itemListWrap = document.createElement("div");
        this.$itemListWrap = $itemListWrap;

        $root.appendChild($itemListWrap);
        this.render(items);
    }

    render() {
        if(this.items.length > 0) {
            this.$itemListWrap.innerHTML = this.items.map(item => `
                <div class="item">
                    ${item.title}
                </div>
                `
            ).join("");

        } else {
            this.$itemListWrap.innerHTML = "할 일이 없네용:)";
        }
    }
};