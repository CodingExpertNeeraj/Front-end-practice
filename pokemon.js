const imgPath = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/';
const div = document.createElement('div');

for (let i = 1; i < 200; i++) {
	const img = document.createElement('img');
	img.src = imgPath + i + '.png';
	div.appendChild(img);
}

document.body.append(div);