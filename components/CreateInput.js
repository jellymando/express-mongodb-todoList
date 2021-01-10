// import axios from 'axios';

export default class CreateInput {
    constructor($root) {
        const $searchInput = document.createElement("input");
        $searchInput.placeholder = "할일을 추가해보세요.";
        const $searchButton = document.createElement("button");
        $searchButton.id = "createBtn";
        $searchButton.innerHTML = "추가";
        const $findButton = document.createElement("button");
        $findButton.id = "findBtn";
        $findButton.innerHTML = "불러오기";

        $root.appendChild($searchInput);
        $root.appendChild($searchButton);
        $root.appendChild($findButton);
        this.create = async () => {
            try {
                await axios.post('/create', {
                    "title": $searchInput.value
                });
            } catch (e) {
                console.log(e);
            }
        };
        this.find = async () => {
            try {
                const response = await axios.get('/find');
                console.log(response);
                items.push(response);
            } catch (e) {
                console.log(e);
            }
        };
        $searchButton.addEventListener("click", this.create);
        $findButton.addEventListener("click", this.find);
    }
    render() {}
}