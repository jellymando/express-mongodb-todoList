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
            onCreate: async (title) => {
                try {
                    await axios.post('/create', {
                        "title": title
                    });
                    this.itemList.onFind();
                } catch (e) {
                    console.log(e);
                }
            }
        });
        
        this.searchInput = new SearchInput({
            $root,
            items,
            onSearch: async (title) => {
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
            onFind: async () => {
                try {
                    const response = await axios.get('/find');
                    this.itemList.setState(response.data);
                } catch (e) {
                    console.log(e);
                }
            },
            onDelete: async (_id) => {
                try {
                    await axios.post('/delete', {
                        "_id": _id
                    });
                    this.itemList.onFind();
                } catch (e) {
                    console.log(e);
                }
            }
        });
    }
    
}