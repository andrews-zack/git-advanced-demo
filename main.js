let niceDiv = document.createElement('div');
niceDiv.textContent = 'Nice div!';
document.body.appendChild(niceDiv);

let niceList = document.createElement('ul');

let niceItem = document.createElement('li');
niceItem.textContent = 'Nice List!'

niceList.appendChild(niceItem);
niceDiv.appendChild(niceList);
