const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {

	return fruit.filter(suggest => {
		if(suggest.toLowerCase().includes(str)) {
			return suggest
		}})
}

function searchHandler(e) {
	
	const options = search(e.target.value.toLowerCase());
	showSuggestions(options, e.target.value.toLowerCase())
}

function bold(e) {
	e.target.style.backgroundColor = "red";
}

function backgroundBack(e) {
	e.target.style.backgroundColor = "";
}

function showSuggestions(results, inputVal) {

	suggestions.replaceChildren();

	if(inputVal.length !== 0) {
		results.forEach(element => {
			const newItem = document.createElement("li");
			const index = element.toLowerCase().indexOf(inputVal);

			newItem.addEventListener("mouseover", bold);
			newItem.addEventListener("mouseout", backgroundBack);

			newItem.innerHTML = element.substr(0, index) + "<b>" + element.substr(index, inputVal.length) + "</b>" + element.substr(inputVal.length + index);
	
			suggestions.appendChild(newItem);
		});
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.replaceChildren();
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);