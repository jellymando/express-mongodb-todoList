import ItemList from '/components/ItemList.js';

export default class SearchInput {
  constructor({ $root, items, onSearch }) {
    this.items = items;
    this.onSearch = onSearch;

    const $inputWrap = document.getElementById('inputWrap');
    const $searchWrap = document.createElement('div');
    $searchWrap.id = 'searchWrap';
    const $searchInput = document.createElement('input');
    $searchInput.className = 'form-control';
    $searchInput.placeholder = '검색어를 입력해보세요.';
    this.$searchInput = $searchInput;
    const $searchButton = document.createElement('button');
    $searchButton.id = 'searchBtn';
    $searchButton.className = 'btn btn-default';
    $searchButton.innerHTML = '검색';

    if($inputWrap) {
      $inputWrap.appendChild($searchWrap);
      $searchWrap.appendChild($searchInput);
      $searchWrap.appendChild($searchButton);
    }

    $searchButton.addEventListener('click', () => {
      this.onSearch($searchInput.value);
      this.render();
    });
  }

  render() {
    this.$searchInput.value = '';
  }
}
