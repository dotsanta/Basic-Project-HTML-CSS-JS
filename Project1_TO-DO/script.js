const list = document.getElementById('list');

function addItem(){
    const input = document.getElementById('input');
    const item = document.createElement('li');
    item.innerHTML = input.value;
    item.addEventListener('click', toggleItem)
    list.appendChild(item)
    input.value ='';
}

function toggleItem(){
    this.classList.toggle('completed');
}
