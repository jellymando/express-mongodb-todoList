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
            create: async (title) => {
                try {
                    const response = await axios.post('/create', {
                        "title": title
                    });
                    this.itemList.find();
                } catch (e) {
                    console.log(e);
                }
            }
        });
        
        this.searchInput = new SearchInput({
            $root,
            items,
            search: async (title) => {
                try {
                    const response = await axios.post('/search', {
                        "title": title
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
                    this.itemList.setState(response.data);
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }
    
}