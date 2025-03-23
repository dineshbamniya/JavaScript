const todoInput  = document.getElementById('todo-input');

const addBtn = document.getElementById("addButton");

const todoItemContainer = document.getElementById('todo-item');

addBtn.addEventListener('click', () => {

    const value = todoInput.value;

    const li = document.createElement('li');


    li.innerText = value;

    const xbtn = document.createElement('button');

    xbtn.innerText = 'x';

    li.appendChild(xbtn);

    xbtn.addEventListener('click', () => {

        li.remove();
    })

todoItemContainer.appendChild(li);

todoInput.value = "";

})

const ClearAll = document.getElementById('clear-all-task');

ClearAll.addEventListener('click', () => {

    
    const All_li = document.querySelectorAll('li');

for(i = 0 ; i<=All_li.length; i++){

    console.log(All_li[i]);

    All_li[i].remove();

}

}
    

    


   
)

