import CreateInput from "/components/CreateInput.js";
import SearchInput from "/components/SearchInput.js";
import ItemList from "/components/ItemList.js";

export default class App {
    $root = null;
    items = {}

    constructor($root, items) {
        this.$root = $root;

        this.createInput = new CreateInput({
            $root,
            items,
            create: async () => {
                try {
                    await axios.post('/create', {
                        "title": $createInput.value
                    });
                    items = response.data;
                    this.itemList.setState(response.data);
                } catch (e) {
                    console.log(e);
                }
            }
        });
        
        this.searchInput = new SearchInput({
            $root,
            items,
            search: async () => {
                try {
                    const response = await axios.post('/search', {
                        "title": $searchInput.value
                    });
                    items = response.data;
                    this.itemList.setState(response.data);
                } catch (e) {
                    console.log(e);
                }
            }
        }); 

        this.itemList = new ItemList({
            $root,
            items,
            find: async () => {
                try {
                    const response = await axios.get('/find');
                    this.items = response.data;
                    this.itemList.setState(response.data);
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }
    
}