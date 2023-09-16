let addBtn =  document.getElementById('add_btn');
addBtn.addEventListener('click', addChap);
let parentList = document.getElementById('parentList');

function addChap(e){
    if(parentList.children[0].className === "empty"){
        parentList.children[0].remove()
    }
    let currentBtn = e.currentTarget;
    console.log(e);
    let currentInput = currentBtn.previousElementSibling;
    console.log(currentInput.value);
    let currentItem = currentInput.value;
    
    let newli = document.createElement('li');
    newli.className = "list-group-item d-flex justify-content-between";
    newli.innerHTML = `  <li class="list-group-item d-flex justify-content-between">
           <h3 class="flex-grow-1"> ${currentItem} </h3>
             <button class="btn btn-danger mx-3" onclick="removeItem(this)"> Remove</button>
             <button class="btn btn-secondary" onclick="editItem(this)"> Edit</button></li> ` ;
    parentList.appendChild(newli);
}

function removeItem(currentElement){
    currentElement.parentElement.remove();
        let parentList = document.getElementById('parentList');
    if(parentList.children.length <= 0){
        let newMsg = document.createElement('h4'); 
        newMsg.classList.add("empty");
        newMsg.textContent = "Nothing here; add items here";
        parentList.appendChild(newMsg);
    }
}

function editItem(currentElement){
   if( currentElement.textContent === "done") {
        currentElement.textContent ="Edit";
        let currentItemName = currentElement.previousElementSibling.value;
        let currentHead = document.createElement('h4');
        currentHead.className = "flex-grow-1";
        currentHead.textContent = currentItemName;
        currentElement.parentElement.replaceChild( currentHead, currentElement.previousElementSibling); 
    } 
   else{
        currentElement.textContent ="done";
        console.log(currentElement.previousElementSibling);
        let currentItemName = currentElement.previousElementSibling.textContent;
        let currentInput = document.createElement('input');
        currentInput.type = "text";
        currentInput.placeholder = "Itemsdd";
        currentInput.className = "form-control";
        currentInput.value = currentItemName;

        currentElement.parentElement.replaceChild( currentInput, currentElement.previousElementSibling);     
    }

 
}